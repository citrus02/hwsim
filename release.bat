@echo off
set /p version="请输入版本号（例如 1.3.0）: "
echo 正在提交并推送代码...
git add .
git commit -m "Release v%version%"
git push
echo 正在创建并推送标签 v%version%...
git tag v%version%
git push origin v%version%
echo 完成！请去 GitHub 仓库的 Actions 页面查看自动打包进度。
pause