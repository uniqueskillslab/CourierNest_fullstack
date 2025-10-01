# 🆓 100% FREE Deployment Guide

**NO CREDIT CARD REQUIRED!** Deploy your CourierNest app completely free using Cyclic (backend) and Vercel (frontend).

## 🎯 Step-by-Step FREE Deployment

### Step 1: Push to GitHub
```bash
cd CourierNest_fullstack
git add .
git commit -m "Ready for free deployment"
git push origin main
```

### Step 2: Deploy Backend to Cyclic (100% FREE!)

1. **Go to Cyclic:**
   - Visit https://cyclic.sh/
   - Click "Sign Up" → "Sign up with GitHub"

2. **Deploy Backend:**
   - Click "Deploy Now"
   - Select your GitHub repository
   - Choose the `backend` folder
   - Click "Connect & Deploy"

3. **Get Backend URL:**
   - Cyclic will give you a URL like: `https://couriernest-backend.cyclic.app`
   - Copy this URL for the frontend

### Step 3: Deploy Frontend to Vercel (100% FREE!)

1. **Go to Vercel:**
   - Visit https://vercel.com/
   - Click "Sign Up" → "Continue with GitHub"

2. **Import Project:**
   - Click "New Project"
   - Import your GitHub repository
   - Set **Root Directory** to `frontend`

3. **Configure Build:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

4. **Set Environment Variable:**
   - Go to Project Settings → Environment Variables
   - Add: `VITE_API_BASE` = `https://couriernest-backend.cyclic.app/api`

5. **Deploy:**
   - Click "Deploy"
   - Wait for deployment
   - Get your frontend URL: `https://couriernest-frontend.vercel.app`

### Step 4: Update Backend CORS

1. **In Cyclic Dashboard:**
   - Go to your backend service
   - Add environment variable:
     - **Key:** `FRONTEND_URL`
     - **Value:** `https://your-vercel-app.vercel.app`

2. **Redeploy:**
   - Cyclic will automatically redeploy

## ✅ You're Live - 100% FREE!

Your job board is now live at:
- **Frontend:** `https://your-app.vercel.app`
- **Backend:** `https://couriernest-backend.cyclic.app`

## 🎉 Why This is Better:

### Cyclic (Backend):
- ✅ **100% FREE** forever
- ✅ **No credit card required**
- ✅ **No time limits**
- ✅ **Automatic deployments**
- ✅ **Custom domains**

### Vercel (Frontend):
- ✅ **100% FREE** forever
- ✅ **No credit card required**
- ✅ **Global CDN**
- ✅ **Automatic deployments**
- ✅ **Custom domains**

## 🔧 Troubleshooting

### Backend not starting on Cyclic:
- Check that `server.js` is in the backend folder
- Ensure `package.json` has correct start script
- Check Cyclic logs for errors

### Frontend not connecting to backend:
- Verify `VITE_API_BASE` environment variable in Vercel
- Check that `FRONTEND_URL` is set in Cyclic
- Look at browser console for CORS errors

### Build failures:
- Check build logs in Vercel/Cyclic dashboards
- Ensure all dependencies are in package.json
- Verify environment variables are set

## 🚀 Advanced Features (Still FREE!)

### Custom Domains:
- **Cyclic:** Add custom domain in dashboard
- **Vercel:** Add custom domain in project settings

### Automatic Updates:
- Both platforms auto-deploy when you push to GitHub
- No manual deployment needed

### Monitoring:
- Both platforms provide logs and monitoring
- Check dashboards for any issues

## 🎯 Success!

Your CourierNest application is now live and accessible worldwide - completely FREE! No credit cards, no time limits, no hidden costs.

---

**Need help?** Check the logs in Cyclic and Vercel dashboards for detailed error information.
