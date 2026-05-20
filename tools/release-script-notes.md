# 发布脚本说明

`release.bat` 保持英文输出，是为了避免 Windows cmd 在中文编码下把命令和注释解析坏。

## release.bat 做什么

1. 询问版本号，例如 `1.3.1`。
2. 检查 U 盘 `E:\` 是否存在。
3. 提交当前改动并推送到 GitHub。
4. 创建并推送 `v版本号` 标签。
5. 调用 `tools/create-backup-zip.ps1` 生成本地 zip 备份。
6. 把 zip 复制到 `E:\hogwarts_backup\`。
7. 复制成功后删除电脑上的临时 zip。

发布脚本会排除 `.claude` 和 `.trae` 的普通改动，但会允许提交 `.claude/worktrees` 中已经被误跟踪文件的删除，用来清理历史遗留的嵌套工作区记录。

## create-backup-zip.ps1 做什么

这个脚本负责真正压缩项目文件。

会排除：

- `.git`
- `.cache`
- `.kilo`
- `.trae`
- `.uploads`
- `.venv`
- `__pycache__`
- `CLAUDE.md`
- `scripts`
- 临时修复脚本，例如 `fix*.js`、`fix*.py`、`rebuild*.js`
- 临时题库/检查文件，例如 `*.bak`、`temp_*.txt`、`test-questionbank.mjs`
- `.claude/worktrees`
- 正在生成的 zip 文件本身

会保留：

- 项目源码
- `release.bat`
- `tools` 目录
- `ai/private-config.js`
- `.claude` 中除 `worktrees` 之外的文件

如果压缩中途失败，脚本会删除半成品 zip，并把错误返回给 `release.bat`。`release.bat` 最多重试 3 次，仍失败就停止，不会复制坏 zip 到 U 盘。
