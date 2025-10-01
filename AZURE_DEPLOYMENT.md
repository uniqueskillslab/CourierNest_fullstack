# 🚀 Azure Deployment Guide (GitHub Student Plan)

Deploy your CourierNest app using your **FREE** GitHub Student Azure credits!

## 🎓 What You Get with GitHub Student Plan

- **$100 Azure credits** (renewable annually)
- **Free App Service** hosting
- **Free database** options
- **No credit card required** for student plan

## 📋 Prerequisites

- GitHub Student account (✅ You have this!)
- Azure account linked to GitHub Student
- Git installed locally

## 🎯 Step-by-Step Deployment

### Step 1: Set Up Azure Account

1. **Activate GitHub Student Benefits:**
   - Go to https://education.github.com/pack
   - Sign in with your GitHub account
   - Verify your student status
   - Click "Get your pack"

2. **Claim Azure Credits:**
   - Go to https://azure.microsoft.com/en-us/free/students/
   - Click "Activate now"
   - Sign in with your GitHub account
   - Verify student status
   - Get your $100 Azure credits

### Step 2: Deploy Backend to Azure App Service

1. **Go to Azure Portal:**
   - Visit https://portal.azure.com/
   - Sign in with your GitHub account

2. **Create App Service:**
   - Click "Create a resource"
   - Search for "App Service"
   - Click "Create"

3. **Configure App Service:**
   - **Subscription:** Your student subscription
   - **Resource Group:** Create new "couriernest-rg"
   - **Name:** `couriernest-backend` (must be unique)
   - **Runtime stack:** Node 18 LTS
   - **Operating System:** Linux
   - **Region:** Choose closest to you
   - **Pricing Plan:** F1 (Free) or B1 (Basic - uses credits)

4. **Deploy from GitHub:**
   - Go to your App Service
   - Click "Deployment Center"
   - Choose "GitHub"
   - Select your repository
   - Branch: `main`
   - Folder: `backend`

5. **Set Environment Variables:**
   - Go to Configuration → Application settings
   - Add: `FRONTEND_URL` = `https://your-username.github.io/couriernest`
   - Add: `NODE_ENV` = `production`

6. **Get Your Backend URL:**
   - Your backend will be at: `https://couriernest-backend.azurewebsites.net`

### Step 3: Deploy Frontend to GitHub Pages

1. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: "GitHub Actions"

2. **Create GitHub Action:**
   - The `.github/workflows/deploy-frontend.yml` file is already created
   - It will automatically deploy when you push to main

3. **Set Repository Secret:**
   - Go to Settings → Secrets and variables → Actions
   - Add new secret:
     - **Name:** `BACKEND_URL`
     - **Value:** `https://couriernest-backend.azurewebsites.net`

4. **Deploy:**
   - Push your code to GitHub
   - GitHub Actions will automatically build and deploy
   - Your frontend will be at: `https://your-username.github.io/couriernest`

### Step 4: Update Frontend API Configuration

1. **Update API Base URL:**
   - The frontend will automatically use the `BACKEND_URL` secret
   - No manual configuration needed

2. **Test Your App:**
   - Visit your GitHub Pages URL
   - Test all features (signup, login, job posting, etc.)

## 🔧 Configuration Files Created

- `backend/web.config` - Azure App Service configuration
- `backend/package.json` - Updated with Azure settings
- `.github/workflows/deploy-frontend.yml` - GitHub Pages deployment

## 💰 Cost Breakdown (Using Student Credits)

### Backend (Azure App Service):
- **F1 Free Tier:** $0/month (limited resources)
- **B1 Basic:** ~$13/month (uses your $100 credits)
- **Recommended:** Start with F1, upgrade to B1 if needed

### Frontend (GitHub Pages):
- **Cost:** $0/month (completely free)
- **Bandwidth:** Unlimited
- **Custom domain:** Free

## 🎉 Your Live URLs

After deployment:
- **Frontend:** `https://your-username.github.io/couriernest`
- **Backend:** `https://couriernest-backend.azurewebsites.net`

## 🔄 Updating Your App

1. **Make changes locally**
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update app"
   git push origin main
   ```
3. **Azure and GitHub Pages will auto-deploy**

## 🛠️ Troubleshooting

### Backend not starting on Azure:
- Check Azure App Service logs
- Ensure `server.js` is in the backend folder
- Verify environment variables are set

### Frontend not connecting to backend:
- Check that `BACKEND_URL` secret is set in GitHub
- Verify CORS settings in backend
- Check browser console for errors

### Build failures:
- Check GitHub Actions logs
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

## 🎓 Student Benefits Used

- ✅ **Azure Credits:** $100 free credits
- ✅ **GitHub Pages:** Free hosting
- ✅ **GitHub Actions:** Free CI/CD
- ✅ **Custom Domain:** Free with GitHub Pages

## 🚀 Success!

Your CourierNest application is now live using your GitHub Student benefits! The app will run for free using your student credits, and you can renew them annually as long as you're a student.

---

**Need help?** Check the Azure App Service logs and GitHub Actions logs for detailed error information.
