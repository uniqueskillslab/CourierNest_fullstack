# 🚀 Netlify + Supabase Deployment Guide

Deploy your CourierNest app using **Netlify** (frontend) and **Supabase** (database) - both completely FREE!

## 🎯 What You Get

- **Frontend:** Netlify (FREE hosting + CDN)
- **Database:** Supabase (FREE PostgreSQL database)
- **Total Cost:** $0 (completely free)
- **Custom Domain:** Available for free

## 📋 Prerequisites

- GitHub account
- Netlify account (free)
- Supabase account (free)
- Git installed locally

## 🎯 Step-by-Step Deployment

### Step 1: Set Up Supabase Database

1. **Go to Supabase:**
   - Visit https://supabase.com/
   - Sign up with GitHub
   - Create a new project

2. **Create Database Tables:**
   - Go to your Supabase project dashboard
   - Click "SQL Editor"
   - Copy and paste the contents of `supabase-schema.sql`
   - Click "Run" to create tables and sample data

3. **Get Your Supabase Credentials:**
   - Go to Settings → API
   - Copy your:
     - **Project URL:** `https://xhrjsyqtofevopfgvcbt.supabase.co`
     - **Anon Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
     - **Service Role Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### Step 2: Push to GitHub

```bash
cd CourierNest_fullstack
git add .
git commit -m "Add Supabase integration and Netlify deployment"
git push origin main
```

### Step 3: Deploy to Netlify

1. **Go to Netlify:**
   - Visit https://app.netlify.com/
   - Sign up with GitHub

2. **Create New Site:**
   - Click "New site from Git"
   - Choose GitHub → your repository

3. **Configure Build Settings:**
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/dist`

4. **Set Environment Variables:**
   - Go to Site settings → Environment variables
   - Add these variables:
     - `VITE_SUPABASE_URL` = `https://xhrjsyqtofevopfgvcbt.supabase.co`
     - `VITE_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

5. **Deploy:**
   - Click "Deploy site"
   - Wait for deployment (2-3 minutes)
   - Get your URL: `https://amazing-couriernest.netlify.app`

### Step 4: Test Your Application

1. **Visit your Netlify URL**
2. **Test all features:**
   - Sign up/login
   - Browse jobs
   - Apply to jobs
   - Post jobs (as admin)
   - View admin dashboard

## 🔧 Configuration Files Created

- `frontend/src/supabase.js` - Supabase client configuration
- `frontend/src/supabaseApi.js` - Supabase API functions
- `frontend/src/api.js` - Updated to use Supabase
- `supabase-schema.sql` - Database schema
- `netlify.toml` - Netlify build configuration

## 🌐 Your Live URLs

After deployment:
- **Frontend:** `https://your-app-name.netlify.app`
- **Database:** Supabase dashboard (your project)

## 💰 Cost Breakdown

### Netlify (Frontend):
- **Hosting:** FREE
- **Bandwidth:** 100GB/month FREE
- **Build minutes:** 300 minutes/month FREE
- **Custom domain:** FREE
- **SSL certificate:** FREE

### Supabase (Database):
- **Database:** FREE (500MB storage)
- **API requests:** 50,000/month FREE
- **Real-time:** FREE
- **Authentication:** FREE
- **Storage:** 1GB FREE

## 🎉 Benefits of This Setup

### **Netlify:**
- ✅ **Global CDN** - Fast worldwide access
- ✅ **Automatic deployments** from GitHub
- ✅ **Form handling** (if needed)
- ✅ **Custom domains** for free
- ✅ **Branch previews** for testing

### **Supabase:**
- ✅ **Real PostgreSQL database** - Much better than localStorage
- ✅ **Real-time subscriptions** - Live updates
- ✅ **Built-in authentication** - User management
- ✅ **Row Level Security** - Data protection
- ✅ **RESTful API** - Easy to use

## 🔄 Updating Your App

1. **Make changes locally**
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update app"
   git push origin main
   ```
3. **Netlify auto-deploys** from GitHub

## 🛠️ Troubleshooting

### Frontend not connecting to Supabase:
- Check environment variables in Netlify
- Verify Supabase URL and keys are correct
- Check browser console for errors

### Database errors:
- Check Supabase dashboard for logs
- Verify tables were created correctly
- Check RLS policies are set up

### Build failures:
- Check Netlify build logs
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

## 🎯 Custom Domain Setup

1. **In Netlify Dashboard:**
   - Go to Site settings → Domain management
   - Add your custom domain: `couriernest.com`
   - Configure DNS as instructed

2. **DNS Configuration:**
   ```
   Type: CNAME
   Name: www
   Value: your-app-name.netlify.app
   
   Type: A
   Name: @
   Value: Netlify IP (provided)
   ```

## 🚀 Success!

Your CourierNest application is now live with:
- **Professional hosting** on Netlify
- **Real database** with Supabase
- **Zero cost** - completely free
- **Scalable** - can handle growth
- **Production-ready** - professional setup

---

**Need help?** Check the Netlify and Supabase dashboards for detailed logs and error information.
