@echo off
setlocal enabledelayedexpansion
title CourierNest - Auto Setup & Start

echo.
echo ████████████████████████████████████████████████████████████████
echo ██                                                          ██
echo ██              CourierNest - Auto Setup                    ██
echo ██            Find Your Dream Career Platform               ██
echo ██                                                          ██
echo ████████████████████████████████████████████████████████████████
echo.

:: Check if running from correct directory
if not exist "backend\package.json" (
    echo ERROR: Please run this batch file from the CourierNest_fullstack folder!
    echo Make sure you're in the correct directory.
    pause
    exit /b 1
)

:: Check Node.js installation
echo [1/7] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ❌ ERROR: Node.js is not installed!
    echo.
    echo Please download and install Node.js from: https://nodejs.org/
    echo Choose the LTS version for best compatibility.
    echo.
    echo After installing Node.js, restart your computer and run this file again.
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✓ Node.js !NODE_VERSION! is installed
echo.

:: Check npm installation
echo [2/7] Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERROR: npm is not available!
    echo Please reinstall Node.js with npm included.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✓ npm !NPM_VERSION! is available
echo.

:: Install backend dependencies
echo [3/7] Installing backend dependencies...
cd backend
echo Installing packages for backend server...
call npm install --silent
if %errorlevel% neq 0 (
    echo.
    echo ❌ ERROR: Failed to install backend dependencies!
    echo Please check your internet connection and try again.
    echo.
    pause
    exit /b 1
)
echo ✓ Backend dependencies installed successfully
cd ..
echo.

:: Install frontend dependencies
echo [4/7] Installing frontend dependencies...
cd frontend
echo Installing packages for frontend server...
call npm install --silent
if %errorlevel% neq 0 (
    echo.
    echo ❌ ERROR: Failed to install frontend dependencies!
    echo Please check your internet connection and try again.
    echo.
    pause
    exit /b 1
)
echo ✓ Frontend dependencies installed successfully
cd ..
echo.

:: Check if ports are available
echo [5/7] Checking if ports are available...
netstat -an | findstr ":5000" >nul
if %errorlevel% equ 0 (
    echo ⚠️  WARNING: Port 5000 is already in use!
    echo The backend server might not start properly.
    echo Please close any applications using port 5000.
    echo.
)

netstat -an | findstr ":5173" >nul
if %errorlevel% equ 0 (
    echo ⚠️  WARNING: Port 5173 is already in use!
    echo The frontend server might not start properly.
    echo Please close any applications using port 5173.
    echo.
)

:: Start backend server
echo [6/7] Starting backend server...
cd backend
start "CourierNest Backend Server" cmd /k "title CourierNest Backend - http://localhost:5000 && echo. && echo ████████████████████████████████████████████████████████████████ && echo ██                    BACKEND SERVER                    ██ && echo ██              Running on http://localhost:5000         ██ && echo ████████████████████████████████████████████████████████████████ && echo. && echo Starting server... && node server.js"
echo ✓ Backend server starting...
cd ..
echo.

:: Wait a moment for backend to start
timeout /t 3 /nobreak >nul

:: Start frontend server
echo [7/7] Starting frontend server...
cd frontend
start "CourierNest Frontend Server" cmd /k "title CourierNest Frontend - http://localhost:5173 && echo. && echo ████████████████████████████████████████████████████████████████ && echo ██                   FRONTEND SERVER                   ██ && echo ██              Running on http://localhost:5173        ██ && echo ████████████████████████████████████████████████████████████████ && echo. && echo Starting development server... && npm run dev"
echo ✓ Frontend server starting...
cd ..
echo.

:: Wait for servers to fully start
echo Waiting for servers to start up...
timeout /t 8 /nobreak >nul

:: Open browser
echo Opening application in your default browser...
start http://localhost:5173
echo ✓ Application opened in browser
echo.

:: Display success message
echo.
echo ████████████████████████████████████████████████████████████████
echo ██                    SETUP COMPLETE!                    ██
echo ████████████████████████████████████████████████████████████████
echo.
echo 🎉 Your CourierNest application is now running!
echo.
echo 📍 Access URLs:
echo    • Frontend: http://localhost:5173
echo    • Backend:  http://localhost:5000
echo.
echo 🔑 Default Login Credentials:
echo    • Admin:    username=admin, password=admin
echo    • Student:  username=john, password=pass
echo    • Student:  username=ali, password=ali
echo.
echo 💡 Features Available:
echo    • Browse and search jobs
echo    • Apply to job positions
echo    • Post new job listings (admin)
echo    • View application statistics
echo.
echo ⚠️  To stop the servers:
echo    • Close the command windows that opened
echo    • Or press Ctrl+C in each server window
echo.
echo 📁 Project Structure:
echo    • backend/     - Node.js API server
echo    • frontend/    - React.js web application
echo    • data.json    - Database file (JSON)
echo.
echo Press any key to close this window...
pause >nul
