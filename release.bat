@echo off
REM 关闭命令回显，让窗口里只显示我们主动 echo 出来的说明。
chcp 65001 >nul
REM 切换到 UTF-8，避免中文提示在 Windows 命令行里乱码。

set "version="
REM 先清空版本号变量，避免沿用系统里可能残留的同名变量。

set /p version="请输入版本号（例如 1.3.1）: "
REM 让你手动输入本次发布版本号。

set "version=%version: =%"
REM 去掉版本号里的空格，避免只输入空格也被当成有效版本。

if not defined version (
    REM 如果没有输入版本号，就停止发布，避免误打空版本。
    echo ERROR: 版本号不能为空，本次发布已停止。
    pause
    exit /b 1
)

set usb_drive=E:\
REM 你的 U 盘盘符。以后如果 U 盘变成 F 盘，就改这里。

set backup_folder=%usb_drive%hogwarts_backup
REM U 盘里的备份目录，最终 zip 会复制到这里。

if not exist %usb_drive% (
    REM 如果找不到 U 盘，就停止发布，避免备份丢失。
    echo ERROR: 找不到 U 盘 %usb_drive%，本次发布已停止。
    pause
    exit /b 1
)

if not exist %backup_folder% mkdir %backup_folder%
REM 如果 U 盘里还没有备份目录，就自动创建一个。

echo [1/5] 正在提交并推送代码到 GitHub...
REM 把当前项目改动加入 Git 暂存区，但排除 AI/编辑器产生的隐藏工作目录。
git add . ":!.claude" ":!.trae"

REM 再保险一次：如果 .claude 或 .trae 被误加入暂存区，就从暂存区移除。
git reset -q -- .claude .trae 2>nul

REM 创建提交。提交信息会是 Release v版本号。
git commit -m "Release v%version%"

REM 推送当前分支到 GitHub。
git push

echo [2/5] 正在创建并推送标签 v%version%...
REM 创建 Git 标签，用来标记这次版本发布。
git tag v%version%

REM 把标签推送到 GitHub，通常会触发 GitHub Actions 发布流程。
git push origin v%version%

echo [3/5] 等待 5 秒，让 Git 和文件系统释放刚刚操作过的文件...
REM 等几秒可以减少压缩时遇到“文件正在被占用”的概率。
timeout /t 5

echo [4/5] 正在创建本地 zip 备份包...
REM zip 文件名就是版本号，例如 1.7.7.zip。
set zip_file=%version%.zip

REM 最多尝试压缩 3 次。第一次失败通常是因为某个文件短暂被占用。
for /l %%i in (1,1,3) do (
    REM 显示当前是第几次压缩尝试。
    echo 正在压缩：第 %%i 次 / 共 3 次...

    REM 如果上一次留下了半成品 zip，先删掉，避免复制坏文件。
    if exist "%zip_file%" del "%zip_file%"

    REM 调用 PowerShell 压缩项目文件。
    REM 本地备份版要尽量全量，所以会包含 release.bat、.claude、.trae 等本地文件。
    REM 只排除 .git 仓库目录和当前临时 zip 本身，避免备份包过大或出现 zip 套 zip。
    REM 如果 Compress-Archive 报错，PowerShell 会返回失败码，脚本会进入重试。
    powershell -NoProfile -Command "try { Get-ChildItem -Force -Exclude '.git','%zip_file%' | Compress-Archive -DestinationPath '%zip_file%' -Force -ErrorAction Stop; exit 0 } catch { Write-Error $_; exit 1 }"

    REM errorlevel 为 0 表示压缩成功，跳到 zip_done。
    if not errorlevel 1 (
        goto zip_done
    )

    REM 压缩失败时先等 3 秒，再试下一次。
    echo 压缩失败，可能是文件正在被占用。等待 3 秒后自动重试...
    timeout /t 3 >nul
)

:zip_done
REM 压缩循环结束后，检查 zip 文件是否真的存在。
if not exist "%zip_file%" (
    REM 如果 3 次都失败，就停止，不会复制坏备份。
    echo ERROR: zip 压缩 3 次都失败，未复制备份文件。
    pause
    exit /b 1
)

echo [5/5] 正在复制 zip 到 U 盘备份目录...
REM 把本地 zip 复制到 U 盘备份目录。
copy "%zip_file%" "%backup_folder%\" >nul

if %errorlevel%==0 (
    REM 复制成功后，提示 U 盘里的最终备份路径。
    echo SUCCESS: zip 已保存到 %backup_folder%\%zip_file%

    REM 删除电脑上的临时 zip，只保留 U 盘备份。
    del "%zip_file%"

    REM 提示本地临时文件已删除。
    echo 本地临时 zip 已删除。
) else (
    REM 如果复制失败，保留本地 zip，方便你手动处理。
    echo ERROR: 复制到 U 盘失败，本地 zip 未删除。
)

echo DONE! 发布脚本执行完毕，请检查 GitHub Actions 是否发布成功。
REM 暂停窗口，方便你查看上面的输出。
pause
