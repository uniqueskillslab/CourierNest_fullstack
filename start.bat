@echo off
echo ========================================
echo    CourierNest - Auto Setup & Start
echo ========================================
echo.

echo [1/6] Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    echo Then run this batch file again.
    pause
    exit /b 1
)
echo ✓ Node.js is installed
echo.

echo [2/6] Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install backend dependencies!
    pause
    exit /b 1
)
echo ✓ Backend dependencies installed
echo.

echo [3/6] Installing frontend dependencies...
cd ..\frontend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install frontend dependencies!
    pause
    exit /b 1
)
echo ✓ Frontend dependencies installed
echo.

echo [4/6] Starting backend server...
cd ..\backend
start "CourierNest Backend" cmd /k "echo Backend Server Running on http://localhost:5000 && node server.js"
timeout /t 3 /nobreak >nul
echo ✓ Backend server started
echo.

echo [5/6] Starting frontend server...
cd ..\frontend
start "CourierNest Frontend" cmd /k "echo Frontend Server Running on http://localhost:5173 && npm run dev"
timeout /t 5 /nobreak >nul
echo ✓ Frontend server started
echo.

echo [6/6] Opening application in browser...
timeout /t 2 /nobreak >nul
start http://localhost:5173
echo ✓ Application opened in browser
echo.

echo ========================================
echo    Setup Complete! 
echo ========================================
echo.
echo Your CourierNest application is now running:
echo • Frontend: http://localhost:5173
echo • Backend:  http://localhost:5000
echo.
echo Default login credentials:
echo • Admin: username=admin, password=admin
echo • Student: username=john, password=pass
echo.
echo To stop the servers, close the command windows.
echo.
echo Press any key to exit this window...
pause >nul
