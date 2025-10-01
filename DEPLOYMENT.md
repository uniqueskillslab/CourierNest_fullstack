# 🚀 CourierNest Deployment Guide

This guide will help you deploy your CourierNest application to GitHub, Netlify (frontend), and Railway (backend).

## 📋 Prerequisites

- GitHub account
- Netlify account (free)
- Railway account (free)
- Git installed on your computer

## 🎯 Deployment Steps

### Step 1: Prepare for GitHub

1. **Initialize Git repository:**
   ```bash
   cd CourierNest_fullstack
   git init
   git add .
   git commit -m "Initial commit: CourierNest job board platform"
   ```

2. **Create GitHub repository:**
   - Go to https://github.com/new
   - Repository name: `couriernest` (or your preferred name)
   - Make it public or private
   - Don't initialize with README (we already have one)

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/couriernest.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy Backend to Railway

1. **Go to Railway:**
   - Visit https://railway.app/
   - Sign up/login with GitHub

2. **Create new project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `couriernest` repository
   - Select the `backend` folder

3. **Configure Railway:**
   - Railway will auto-detect Node.js
   - It will install dependencies automatically
   - The app will start with `node server.js`

4. **Get your backend URL:**
   - Once deployed, Railway will give you a URL like: `https://couriernest-backend-production.up.railway.app`
   - Copy this URL - you'll need it for the frontend

### Step 3: Deploy Frontend to Netlify

1. **Go to Netlify:**
   - Visit https://app.netlify.com/
   - Sign up/login with GitHub

2. **Create new site:**
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Configure build settings:
     - **Base directory:** `frontend`
     - **Build command:** `npm run build`
     - **Publish directory:** `frontend/dist`

3. **Set environment variables:**
   - Go to Site settings > Environment variables
   - Add new variable:
     - **Key:** `VITE_API_BASE`
     - **Value:** `https://your-railway-backend-url.railway.app/api`
     - Replace with your actual Railway URL

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will build and deploy your frontend
   - You'll get a URL like: `https://amazing-couriernest.netlify.app`

### Step 4: Update CORS for Production

1. **Update backend CORS settings:**
   - In your Railway dashboard, go to your backend service
   - Add environment variable:
     - **Key:** `FRONTEND_URL`
     - **Value:** `https://your-netlify-url.netlify.app`

2. **Update server.js CORS:**
   ```javascript
   // In backend/server.js, update the CORS configuration:
   app.use(cors({
     origin: process.env.FRONTEND_URL || 'http://localhost:5173',
     credentials: true
   }));
   ```

### Step 5: Test Your Deployment

1. **Visit your Netlify URL**
2. **Test the features:**
   - Browse jobs
   - Sign up/login
   - Apply to jobs
   - Post jobs (as admin)

## 🔧 Configuration Files Created

- `package.json` - Root package file for easy development
- `frontend/netlify.toml` - Netlify build configuration
- `backend/railway.json` - Railway deployment configuration
- `.gitignore` - Git ignore file
- `env.example` - Environment variables example

## 🌐 Your Live URLs

After deployment, you'll have:
- **Frontend:** `https://your-app-name.netlify.app`
- **Backend:** `https://your-app-name.railway.app`
- **GitHub:** `https://github.com/your-username/couriernest`

## 🔄 Updating Your App

To update your deployed app:

1. **Make changes locally**
2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Update: describe your changes"
   git push origin main
   ```
3. **Netlify and Railway will auto-deploy** from your GitHub repository

## 🛠️ Troubleshooting

### Frontend not connecting to backend
- Check that `VITE_API_BASE` environment variable is set correctly in Netlify
- Ensure the Railway backend URL is correct
- Check browser console for CORS errors

### Backend not starting
- Check Railway logs for errors
- Ensure all dependencies are in `package.json`
- Verify the start command is correct

### Build failures
- Check that all environment variables are set
- Ensure Node.js version compatibility
- Check build logs for specific errors

## 📱 Custom Domain (Optional)

### Netlify Custom Domain
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings as instructed

### Railway Custom Domain
1. Go to your service settings
2. Add custom domain
3. Configure DNS as instructed

## 🎉 Success!

Your CourierNest application is now live and accessible worldwide! Share your job board with others and start connecting job seekers with opportunities.

---

**Need help?** Check the logs in Netlify and Railway dashboards for detailed error information.
