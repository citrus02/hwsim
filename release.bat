@echo off
set /p version="Enter version number (example: 1.3.0): "

set usb_drive=D:\
set backup_folder=%usb_drive%hogwarts_backup

if not exist %usb_drive% (
    echo ERROR: USB drive %usb_drive% not found!
    pause
    exit /b 1
)

if not exist %backup_folder% mkdir %backup_folder%

echo Pushing code to GitHub...
git add .
git commit -m "Release v%version%"
git push

echo Creating and pushing tag v%version%...
git tag v%version%
git push origin v%version%

echo Waiting 5 seconds...
timeout /t 5

echo Creating zip package...
powershell -Command "Compress-Archive -Path * -DestinationPath \"%version%.zip\" -Force -Exclude '.git','.github','*.bat'"

echo Copying to USB drive...
copy "%version%.zip" "%backup_folder%\" >nul
if %errorlevel%==0 (
    echo SUCCESS: Zip saved to %backup_folder%\%version%.zip
) else (
    echo ERROR: Copy failed
)

echo DONE! Check GitHub Actions for release.
pause