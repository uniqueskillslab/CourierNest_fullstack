@echo off
echo ========================================
echo    CourierNest - FREE Deployment
echo ========================================
echo.
echo This will deploy your app 100% FREE using:
echo • Cyclic (Backend) - No credit card required
echo • Vercel (Frontend) - No credit card required
echo.

echo [1/3] Checking Git status...
git status
if %errorlevel% neq 0 (
    echo ERROR: Git is not initialized!
    echo Please run: git init
    pause
    exit /b 1
)
echo ✓ Git is ready
echo.

echo [2/3] Adding files to Git...
git add .
git commit -m "Ready for free deployment - Cyclic + Vercel"
if %errorlevel% neq 0 (
    echo ERROR: Failed to commit!
    pause
    exit /b 1
)
echo ✓ Files committed
echo.

echo [3/3] Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo WARNING: Failed to push to GitHub!
    echo Please set up GitHub repository first.
    echo.
    pause
    exit /b 1
)
echo ✓ Pushed to GitHub successfully!
echo.

echo ========================================
echo    Ready for FREE Deployment!
echo ========================================
echo.
echo Next steps:
echo.
echo 1. BACKEND (Cyclic):
echo    • Go to https://cyclic.sh/
echo    • Sign up with GitHub
echo    • Deploy from your repository
echo    • Select 'backend' folder
echo.
echo 2. FRONTEND (Vercel):
echo    • Go to https://vercel.com/
echo    • Sign up with GitHub
echo    • Import your repository
echo    • Set root directory to 'frontend'
echo    • Add environment variable:
echo      VITE_API_BASE = https://your-cyclic-url.cyclic.app/api
echo.
echo 3. UPDATE CORS:
echo    • In Cyclic dashboard, add environment variable:
echo      FRONTEND_URL = https://your-vercel-url.vercel.app
echo.
echo Both platforms are 100% FREE - No credit card required!
echo.
echo Follow FREE_DEPLOYMENT.md for detailed instructions.
echo.
pause
