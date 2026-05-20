@echo off
setlocal EnableExtensions
chcp 65001 >nul

set "version="
set /p version="Enter version number, for example 1.3.1: "
set "version=%version: =%"

if not defined version (
    echo ERROR: Version cannot be empty. Release stopped.
    pause
    exit /b 1
)

set "usb_drive=E:\"
set "backup_folder=%usb_drive%hogwarts_backup"
set "zip_file=%version%.zip"

if not exist "%usb_drive%" (
    echo ERROR: USB drive %usb_drive% was not found. Release stopped.
    pause
    exit /b 1
)

if not exist "%backup_folder%" mkdir "%backup_folder%"

echo [1/5] Commit and push code to GitHub...
git add . ":!.claude" ":!.trae"
git reset -q -- .claude .trae 2>nul
git add -u -- .claude\worktrees 2>nul

git commit -m "Release v%version%"
if errorlevel 1 (
    echo ERROR: git commit failed. Release stopped.
    pause
    exit /b 1
)

git push
if errorlevel 1 (
    echo ERROR: git push failed. Release stopped.
    pause
    exit /b 1
)

echo [2/5] Create and push tag v%version%...
git tag v%version%
if errorlevel 1 (
    echo ERROR: git tag failed. The tag may already exist.
    pause
    exit /b 1
)

git push origin v%version%
if errorlevel 1 (
    echo ERROR: git tag push failed. Release stopped.
    pause
    exit /b 1
)

echo [3/5] Wait 5 seconds before backup...
timeout /t 5 >nul

echo [4/5] Create local zip backup...
if exist "%zip_file%" del "%zip_file%"

for /l %%i in (1,1,3) do (
    echo Zip attempt %%i of 3...
    powershell -NoProfile -ExecutionPolicy Bypass -File "tools\create-backup-zip.ps1" -ZipPath "%zip_file%"
    if not errorlevel 1 goto zip_done

    if exist "%zip_file%" del "%zip_file%"
    echo Zip failed. Waiting 3 seconds before retry...
    timeout /t 3 >nul
)

echo ERROR: Zip creation failed after 3 attempts. Backup was not copied.
pause
exit /b 1

:zip_done
if not exist "%zip_file%" (
    echo ERROR: Zip file was not created. Backup was not copied.
    pause
    exit /b 1
)

echo [5/5] Copy zip to USB backup folder...
copy "%zip_file%" "%backup_folder%\" >nul
if errorlevel 1 (
    echo ERROR: Copy to USB failed. Local zip was kept: %zip_file%
    pause
    exit /b 1
)

echo SUCCESS: Zip saved to %backup_folder%\%zip_file%
del "%zip_file%"
echo Local temporary zip deleted.
echo DONE. Please check GitHub Actions for release.
pause
