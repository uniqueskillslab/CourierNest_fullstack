# 🚀 Quick Setup Guide - CourierNest with Supabase

## Your Supabase Credentials:
- **Project URL:** `https://xhrjsyqtofevopfgvcbt.supabase.co`
- **API Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhocmpzeXF0b2Zldm9wZmd2Y2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMjk3ODIsImV4cCI6MjA3NDkwNTc4Mn0.GIl-FBoeu9cBkQVPhX-1riqaIW8HgYj28Gw86hzwW7g`

## Step 1: Set Up Supabase Database

1. **Go to your Supabase project:**
   - Visit: https://supabase.com/dashboard/project/xhrjsyqtofevopfgvcbt
   - Click on "SQL Editor" in the left sidebar

2. **Create Database Tables:**
   - Copy the entire contents of `supabase-schema.sql`
   - Paste it into the SQL Editor
   - Click "Run" to execute the SQL

3. **Verify Tables Created:**
   - Go to "Table Editor" in the left sidebar
   - You should see 3 tables: `users`, `jobs`, `applications`
   - Check that sample data was inserted

## Step 2: Test Locally (Optional)

1. **Install Dependencies:**
   ```bash
   cd CourierNest_fullstack/frontend
   npm install
   ```

2. **Create Environment File:**
   - Create `.env.local` in the `frontend` folder
   - Add these lines:
   ```
   VITE_SUPABASE_URL=https://xhrjsyqtofevopfgvcbt.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhocmpzeXF0b2Zldm9wZmd2Y2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMjk3ODIsImV4cCI6MjA3NDkwNTc4Mn0.GIl-FBoeu9cBkQVPhX-1riqaIW8HgYj28Gw86hzwW7g
   ```

3. **Run Locally:**
   ```bash
   npm run dev
   ```
   - Visit http://localhost:5173
   - Test signup/login functionality

## Step 3: Deploy to Netlify

1. **Push to GitHub:**
   ```bash
   cd CourierNest_fullstack
   git add .
   git commit -m "Add Supabase integration"
   git push origin main
   ```

2. **Deploy to Netlify:**
   - Go to https://app.netlify.com/
   - Click "New site from Git"
   - Connect your GitHub repository
   - Configure:
     - **Base directory:** `frontend`
     - **Build command:** `npm run build`
     - **Publish directory:** `frontend/dist`

3. **Set Environment Variables:**
   - Go to Site settings → Environment variables
   - Add:
     - `VITE_SUPABASE_URL` = `https://xhrjsyqtofevopfgvcbt.supabase.co`
     - `VITE_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhocmpzeXF0b2Zldm9wZmd2Y2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMjk3ODIsImV4cCI6MjA3NDkwNTc4Mn0.GIl-FBoeu9cBkQVPhX-1riqaIW8HgYj28Gw86hzwW7g`

4. **Deploy:**
   - Click "Deploy site"
   - Wait for deployment (2-3 minutes)
   - Get your live URL!

## Step 4: Test Your Live App

1. **Visit your Netlify URL**
2. **Test Features:**
   - Sign up with a new account
   - Login with existing accounts:
     - Admin: username=`admin`, password=`admin`
     - Student: username=`john`, password=`pass`
   - Browse jobs
   - Apply to jobs
   - Post new jobs (as admin)

## 🎉 You're Live!

Your CourierNest job board is now live with:
- ✅ **Real PostgreSQL database** (Supabase)
- ✅ **Professional hosting** (Netlify)
- ✅ **Global CDN** for fast loading
- ✅ **Custom domain** support
- ✅ **SSL certificate** (automatic)
- ✅ **Zero cost** - completely free!

## 🔧 Troubleshooting

### Database not working:
- Check that SQL schema was run successfully
- Verify environment variables are set correctly
- Check Supabase dashboard for errors

### Frontend not loading:
- Check Netlify build logs
- Verify environment variables in Netlify
- Check browser console for errors

### Build failing:
- Ensure all dependencies are installed
- Check that Supabase package is in package.json
- Verify Node.js version compatibility

---

**Need help?** Check the Supabase and Netlify dashboards for detailed logs.
