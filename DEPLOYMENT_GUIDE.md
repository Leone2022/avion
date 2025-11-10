# 🚀 Deployment Guide

Complete guide to deploy Avion School Supplies website to production.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier available)
- Domain name (optional but recommended)
- Namecheap account (if using their domain)

## 🌐 Option 1: Vercel Deployment (Recommended)

### Step 1: Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Avion School Supplies website"

# Add GitHub remote (replace with your repository)
git remote add origin https://github.com/Leone2022/avion-school-supplies.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Install Command**: `npm install`
6. Click "Deploy"
7. Wait for deployment to complete

### Step 3: Custom Domain Setup

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `avionschoolsupplies.com`
4. Follow DNS configuration instructions

### Step 4: Configure DNS (Namecheap)

1. Log in to Namecheap
2. Go to Domain List
3. Click "Manage" next to your domain
4. Go to "Advanced DNS"
5. Add these records:

```
Type: A Record
Host: @
Value: 76.76.21.21 (Vercel IP)

Type: CNAME
Host: www
Value: cname.vercel-dns.com
```

### Step 5: SSL Certificate

- Vercel automatically provides SSL certificates
- Wait 5-10 minutes for SSL to activate
- Your site will be accessible via HTTPS

## 🌐 Option 2: Netlify Deployment

### Step 1: Build for Production

```bash
npm run build
```

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import existing project"
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
6. Click "Deploy site"

### Step 3: Custom Domain

1. In Netlify dashboard, go to "Domain settings"
2. Add custom domain
3. Update DNS records at Namecheap:

```
Type: A Record
Host: @
Value: (Netlify will provide IP)

Type: CNAME
Host: www
Value: (Netlify domain)
```

## 🌐 Option 3: GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "next build && next export && touch out/.nojekyll && gh-pages -d out"

# Deploy
npm run deploy
```

## 📊 Post-Deployment Checklist

### Technical

- [ ] Website loads in < 3 seconds
- [ ] HTTPS enabled (SSL certificate active)
- [ ] Mobile responsive design works
- [ ] All navigation links work
- [ ] Cart functionality works
- [ ] Forms validate properly
- [ ] No console errors
- [ ] Images load correctly

### Content

- [ ] All 36 products display correctly
- [ ] Product prices in UGX
- [ ] Contact information correct
- [ ] Business hours accurate
- [ ] Owner name visible
- [ ] Designer credit present

### SEO

- [ ] Meta title and description set
- [ ] Sitemap.xml generated (optional)
- [ ] robots.txt configured (optional)
- [ ] Google Analytics setup (optional)

## 🔧 Environment-Specific Configuration

### Development

```bash
npm run dev
# Runs on http://localhost:3000
```

### Production Build

```bash
npm run build
# Generates static files in /out directory
```

### Testing Production Build Locally

```bash
npm run build
npm start
# Runs production build on http://localhost:3000
```

## 📱 Testing Checklist

### Functionality

- [ ] Navigation works on all pages
- [ ] Search functionality works
- [ ] Category filters work
- [ ] Add to cart works
- [ ] Cart updates correctly
- [ ] Remove from cart works
- [ ] Update quantities works
- [ ] Clear cart works
- [ ] Contact form validates
- [ ] Links open correctly

### Responsiveness

- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Mobile landscape (667x375)

### Browsers

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Chrome
- [ ] Mobile Safari

## 🎯 Performance Goals

- Lighthouse Score: > 80
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. Push to `main` branch triggers deployment
2. Preview deployments for pull requests
3. Automatic rollback on build errors

## 📞 Support

### Deployment Issues

- Check build logs in Vercel/Netlify dashboard
- Verify all dependencies are in package.json
- Ensure Node.js version is compatible

### DNS Issues

- Wait 24-48 hours for DNS propagation
- Use online DNS checker tools
- Verify DNS records are correct

### SSL Issues

- Wait 5-10 minutes after adding domain
- Clear browser cache
- Try incognito mode

## 🎉 Launch Checklist

- [ ] All tests passed
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Google Analytics setup (optional)
- [ ] Social media links added (optional)
- [ ] Notify owner (Mr. Makhoha)
- [ ] Backup created
- [ ] Monitor for first 24 hours

## 📈 Post-Launch

1. Monitor website performance
2. Check error logs
3. Collect user feedback
4. Update content as needed
5. Add new products as they become available

---

**Ready to launch! 🚀**


