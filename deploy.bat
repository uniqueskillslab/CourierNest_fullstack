@echo off
echo ========================================
echo    CourierNest - Deploy to GitHub
echo ========================================
echo.

echo [1/4] Checking Git status...
git status
if %errorlevel% neq 0 (
    echo ERROR: Git is not initialized or not available!
    echo Please run: git init
    pause
    exit /b 1
)
echo ✓ Git is available
echo.

echo [2/4] Adding all files to Git...
git add .
if %errorlevel% neq 0 (
    echo ERROR: Failed to add files to Git!
    pause
    exit /b 1
)
echo ✓ Files added to Git
echo.

echo [3/4] Committing changes...
set /p COMMIT_MSG="Enter commit message (or press Enter for default): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG="Update CourierNest application"

git commit -m %COMMIT_MSG%
if %errorlevel% neq 0 (
    echo ERROR: Failed to commit changes!
    pause
    exit /b 1
)
echo ✓ Changes committed
echo.

echo [4/4] Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo WARNING: Failed to push to GitHub!
    echo This might be because:
    echo 1. No remote repository is set up
    echo 2. You need to set up GitHub repository first
    echo.
    echo Please follow the DEPLOYMENT.md guide to set up GitHub repository.
    echo.
    pause
    exit /b 1
)
echo ✓ Pushed to GitHub successfully!
echo.

echo ========================================
echo    Deployment Complete!
echo ========================================
echo.
echo Your code has been pushed to GitHub.
echo Now you can deploy to:
echo • Netlify (frontend): https://app.netlify.com/
echo • Railway (backend): https://railway.app/
echo.
echo Follow the DEPLOYMENT.md guide for detailed instructions.
echo.
pause
