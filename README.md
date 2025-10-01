# CourierNest - Job Board Platform

A modern fullstack job posting and application platform built with React and Node.js.

## 🚀 Quick Start

### Option 1: Automatic Setup (Recommended)
1. Extract the zip file to your desired location
2. Double-click `start-advanced.bat` (Windows)
3. Wait for automatic setup to complete
4. The application will open in your browser automatically

### Option 2: Manual Setup
1. Make sure Node.js is installed (https://nodejs.org/)
2. Open terminal/command prompt in the project folder
3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
4. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
5. Start backend server:
   ```bash
   cd ../backend
   node server.js
   ```
6. Start frontend server (in new terminal):
   ```bash
   cd frontend
   npm run dev
   ```
7. Open http://localhost:5173 in your browser

## 🔑 Default Login Credentials

- **Admin**: username=`admin`, password=`admin`
- **Student**: username=`john`, password=`pass`
- **Student**: username=`ali`, password=`ali`

## 📱 Features

- **Browse Jobs**: Search and filter job listings
- **Apply to Jobs**: Submit applications with resume
- **Post Jobs**: Create new job listings (admin only)
- **Admin Dashboard**: View statistics and manage applications
- **User Authentication**: Secure login/signup system
- **Responsive Design**: Works on desktop and mobile

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, React Router
- **Backend**: Node.js, Express.js
- **Database**: JSON file (data.json)
- **Styling**: Modern CSS with gradients and animations

## 📁 Project Structure

```
CourierNest_fullstack/
├── backend/
│   ├── server.js          # Express API server
│   ├── data.json          # JSON database
│   └── package.json       # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   └── App.jsx        # Main app component
│   ├── public/
│   │   └── favicon.svg    # App icon
│   └── package.json       # Frontend dependencies
├── start.bat              # Simple auto-setup script
├── start-advanced.bat     # Advanced auto-setup script
└── README.md              # This file
```

## 🌐 Access URLs

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 🔧 Troubleshooting

### Port Already in Use
If you get "port already in use" errors:
1. Close any applications using ports 5000 or 5173
2. Or restart your computer
3. Run the setup script again

### Node.js Not Found
1. Download and install Node.js from https://nodejs.org/
2. Choose the LTS version
3. Restart your computer
4. Run the setup script again

### Dependencies Installation Failed
1. Check your internet connection
2. Try running the setup script again
3. If still failing, try manual setup

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Make sure all requirements are met
3. Try the manual setup process

## 🎯 Sample Data

The application comes with sample data including:
- 10 realistic job listings
- 5 user accounts
- 3 sample applications

You can modify the `backend/data.json` file to add your own data.

---

**CourierNest** - Find Your Dream Career! 🚀
