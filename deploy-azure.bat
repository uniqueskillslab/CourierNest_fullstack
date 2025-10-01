@echo off
echo ========================================
echo    CourierNest - Azure Deployment
echo    (Using GitHub Student Plan)
echo ========================================
echo.

echo This will deploy your app using:
echo • Azure App Service (Backend) - FREE with student credits
echo • GitHub Pages (Frontend) - FREE
echo.

echo [1/4] Checking Git status...
git status
if %errorlevel% neq 0 (
    echo ERROR: Git is not initialized!
    echo Please run: git init
    pause
    exit /b 1
)
echo ✓ Git is ready
echo.

echo [2/4] Adding files to Git...
git add .
git commit -m "Ready for Azure deployment with student credits"
if %errorlevel% neq 0 (
    echo ERROR: Failed to commit!
    pause
    exit /b 1
)
echo ✓ Files committed
echo.

echo [3/4] Pushing to GitHub...
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

echo [4/4] Next Steps for Azure Deployment...
echo.
echo ========================================
echo    Ready for Azure Deployment!
echo ========================================
echo.
echo 1. ACTIVATE STUDENT BENEFITS:
echo    • Go to https://education.github.com/pack
echo    • Claim your $100 Azure credits
echo.
echo 2. DEPLOY BACKEND (Azure):
echo    • Go to https://portal.azure.com/
echo    • Create App Service
echo    • Deploy from GitHub repository
echo    • Select 'backend' folder
echo    • Get URL: https://couriernest-backend.azurewebsites.net
echo.
echo 3. DEPLOY FRONTEND (GitHub Pages):
echo    • Go to repository Settings → Pages
echo    • Enable GitHub Actions
echo    • Add secret: BACKEND_URL = your-azure-url
echo    • Get URL: https://your-username.github.io/couriernest
echo.
echo 4. COST:
echo    • Backend: FREE with student credits
echo    • Frontend: FREE with GitHub Pages
echo    • Total: $0 (using student benefits)
echo.
echo Follow AZURE_DEPLOYMENT.md for detailed instructions.
echo.
pause
