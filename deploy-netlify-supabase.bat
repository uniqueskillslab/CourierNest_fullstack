@echo off
echo ========================================
echo    CourierNest - Netlify + Supabase
echo    (100% FREE Deployment)
echo ========================================
echo.

echo This will deploy your app using:
echo • Netlify (Frontend) - FREE hosting
echo • Supabase (Database) - FREE PostgreSQL
echo • Total cost: $0
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
git commit -m "Add Supabase integration and Netlify deployment"
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

echo [4/4] Next Steps for Deployment...
echo.
echo ========================================
echo    Ready for FREE Deployment!
echo ========================================
echo.
echo 1. SET UP SUPABASE DATABASE:
echo    • Go to https://supabase.com/
echo    • Create new project
echo    • Run supabase-schema.sql in SQL Editor
echo    • Get your project URL and API keys
echo.
echo 2. DEPLOY TO NETLIFY:
echo    • Go to https://app.netlify.com/
echo    • Connect GitHub repository
echo    • Set base directory to 'frontend'
echo    • Add environment variables:
echo      VITE_SUPABASE_URL = your-supabase-url
echo      VITE_SUPABASE_ANON_KEY = your-anon-key
echo.
echo 3. BENEFITS:
echo    • Frontend: FREE Netlify hosting + CDN
echo    • Database: FREE Supabase PostgreSQL
echo    • Custom domain: FREE
echo    • SSL certificates: FREE
echo    • Total cost: $0
echo.
echo Follow NETLIFY_SUPABASE_DEPLOYMENT.md for detailed instructions.
echo.
pause
