@echo off
chcp 65001 >nul
set /p version="Enter version number (example: 1.3.0): "
if "%version%"=="" (
    echo ERROR: Version number cannot be empty!
    pause
    exit /b 1
)

set usb_drive=E:\
set backup_folder=%usb_drive%hogwarts_backup

if not exist %usb_drive% (
    echo ERROR: USB drive %usb_drive% not found!
    pause
    exit /b 1
)

if not exist %backup_folder% mkdir %backup_folder%

echo Pushing code to GitHub...
git add . ":!.claude" ":!.trae"
git reset -q -- .claude .trae 2>nul
git commit -m "Release v%version%"
git push

echo Creating and pushing tag v%version%...
git tag v%version%
git push origin v%version%

echo Waiting 5 seconds...
timeout /t 5

echo Creating zip package...
set zip_file=%version%.zip
for /l %%i in (1,1,3) do (
    echo Zip attempt %%i of 3...
    if exist "%zip_file%" del "%zip_file%"
    powershell -NoProfile -Command "try { Get-ChildItem -Exclude '.git','.github','*.bat' | Compress-Archive -DestinationPath '%zip_file%' -Force -ErrorAction Stop; exit 0 } catch { Write-Error $_; exit 1 }"
    if not errorlevel 1 (
        goto zip_done
    )
    echo Zip failed. Waiting 3 seconds before retry...
    timeout /t 3 >nul
)

:zip_done
if not exist "%zip_file%" (
    echo ERROR: Zip package failed after 3 attempts. Backup was not copied.
    pause
    exit /b 1
)

echo Copying to USB drive...
copy "%zip_file%" "%backup_folder%\" >nul
if %errorlevel%==0 (
    echo SUCCESS: Zip saved to %backup_folder%\%zip_file%
    del "%zip_file%"
    echo Local zip deleted.
) else (
    echo ERROR: Copy failed
)

echo DONE! Check GitHub Actions for release.
pause
