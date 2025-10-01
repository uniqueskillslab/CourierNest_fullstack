@echo off
echo ========================================
echo    CourierNest - Quick Setup & Deploy
echo    (Netlify + Supabase)
echo ========================================
echo.

echo Your Supabase credentials are already configured!
echo Project URL: https://xhrjsyqtofevopfgvcbt.supabase.co
echo.

echo [1/5] Checking Git status...
git status
if %errorlevel% neq 0 (
    echo ERROR: Git is not initialized!
    echo Please run: git init
    pause
    exit /b 1
)
echo ✓ Git is ready
echo.

echo [2/5] Installing frontend dependencies...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies!
    echo Please check your Node.js installation.
    pause
    exit /b 1
)
echo ✓ Dependencies installed
cd ..
echo.

echo [3/5] Adding files to Git...
git add .
git commit -m "Add Supabase integration and Netlify deployment"
if %errorlevel% neq 0 (
    echo ERROR: Failed to commit!
    pause
    exit /b 1
)
echo ✓ Files committed
echo.

echo [4/5] Pushing to GitHub...
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

echo [5/5] Next Steps...
echo.
echo ========================================
echo    Almost Ready to Deploy!
echo ========================================
echo.
echo 1. SET UP SUPABASE DATABASE:
echo    • Go to: https://supabase.com/dashboard/project/xhrjsyqtofevopfgvcbt
echo    • Click "SQL Editor"
echo    • Copy and paste supabase-schema.sql
echo    • Click "Run"
echo.
echo 2. DEPLOY TO NETLIFY:
echo    • Go to: https://app.netlify.com/
echo    • Click "New site from Git"
echo    • Connect your GitHub repository
echo    • Set base directory to 'frontend'
echo    • Add environment variables:
echo      VITE_SUPABASE_URL = https://xhrjsyqtofevopfgvcbt.supabase.co
echo      VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
echo.
echo 3. TEST YOUR APP:
echo    • Visit your Netlify URL
echo    • Test signup/login
echo    • Browse and apply to jobs
echo.
echo Follow QUICK_SETUP.md for detailed instructions.
echo.
pause
