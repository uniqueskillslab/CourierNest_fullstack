# 🚀 Quick Render Deployment Guide

Since Railway now requires a paid plan, we'll use **Render** which offers free Node.js hosting!

## 📋 Prerequisites
- GitHub repository with your code
- Render account (free)

## 🎯 Step-by-Step Deployment

### 1. Push to GitHub (if not done already)
```bash
cd CourierNest_fullstack
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy Backend to Render

1. **Go to Render:**
   - Visit https://render.com/
   - Sign up with GitHub

2. **Create Web Service:**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Select your `couriernest` repository

3. **Configure Settings:**
   - **Name:** `couriernest-backend`
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Plan:** Free

4. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Copy your backend URL: `https://couriernest-backend.onrender.com`

### 3. Deploy Frontend to Netlify

1. **Go to Netlify:**
   - Visit https://app.netlify.com/
   - Sign up with GitHub

2. **Create New Site:**
   - Click "New site from Git"
   - Choose GitHub → your repository

3. **Build Settings:**
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/dist`

4. **Environment Variables:**
   - Go to Site settings → Environment variables
   - Add: `VITE_API_BASE` = `https://couriernest-backend.onrender.com/api`

5. **Deploy:**
   - Click "Deploy site"
   - Wait for deployment
   - Copy your frontend URL: `https://amazing-couriernest.netlify.app`

### 4. Update CORS

1. **In Render Dashboard:**
   - Go to your backend service
   - Environment tab
   - Add: `FRONTEND_URL` = `https://your-netlify-url.netlify.app`

2. **Redeploy:**
   - Render will automatically redeploy with new environment variable

## ✅ You're Live!

Your job board is now live at:
- **Frontend:** `https://your-app.netlify.app`
- **Backend:** `https://couriernest-backend.onrender.com`

## 🔧 Troubleshooting

### Backend not starting
- Check Render logs for errors
- Ensure all dependencies are in package.json
- Verify start command is correct

### Frontend can't connect to backend
- Check VITE_API_BASE environment variable in Netlify
- Ensure FRONTEND_URL is set in Render
- Check browser console for CORS errors

### Build failures
- Check build logs in Netlify/Render
- Ensure all environment variables are set
- Verify Node.js version compatibility

## 🎉 Success!

Your CourierNest application is now live and accessible worldwide! Share your job board with others and start connecting job seekers with opportunities.

---

**Need help?** Check the logs in Render and Netlify dashboards for detailed error information.
