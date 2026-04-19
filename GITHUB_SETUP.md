# 🚀 GitHub Setup & Deployment Guide

Complete guide to push your portfolio to GitHub and deploy it to GitHub Pages.

## 📋 Prerequisites

- [x] Node.js 16+ installed
- [x] Git installed
- [x] GitHub account created
- [x] Portfolio customized with your information

## 🎯 Step-by-Step Setup

### 1. Create GitHub Repository

1. **Go to GitHub** → https://github.com/new
2. **Repository settings:**
   - Name: `Profile_Website_Himanshu-B-A` (or your preferred name)
   - Description: `Netflix-style portfolio website with React and Framer Motion`
   - Visibility: Public (required for GitHub Pages on free plan)
   - ❌ Don't initialize with README (we already have one)
3. **Click "Create repository"**

### 2. Update Configuration

**Important:** Before pushing, update these files with YOUR repository name:

**vite.config.js:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPO-NAME/',  // ⚠️ Change this!
  build: {
    outDir: 'dist',
  },
});
```

**package.json:**
```json
{
  "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"
}
```

### 3. Initialize Git & Push to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Netflix-style portfolio"

# Rename branch to main
git branch -M main

# Add remote repository (⚠️ Replace with YOUR URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

**Example with actual values:**
```bash
git remote add origin https://github.com/himanshu-b-a/Profile_Website_Himanshu-B-A.git
git push -u origin main
```

### 4. Enable GitHub Pages

#### Option A: GitHub Actions (Recommended - Automatic)

1. **Go to your repository on GitHub**
2. **Click "Settings" tab**
3. **Click "Pages" in the left sidebar**
4. **Under "Source":**
   - Select: **GitHub Actions**
5. **Done!** Your workflow is already configured in `.github/workflows/deploy.yml`

The site will automatically deploy on every push to main branch.

#### Option B: gh-pages Branch (Manual)

1. **Deploy manually:**
   ```bash
   npm run deploy
   ```

2. **Enable Pages:**
   - Go to Settings → Pages
   - Source: Select `gh-pages` branch
   - Root: Select `/ (root)`
   - Click Save

### 5. Access Your Live Site

After deployment (takes 2-5 minutes), your site will be live at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

**Example:**
```
https://himanshu-b-a.github.io/Profile_Website_Himanshu-B-A/
```

## 🔄 Making Updates

After initial setup, to update your portfolio:

```bash
# 1. Make your changes in the code

# 2. Test locally
npm run dev

# 3. Stage changes
git add .

# 4. Commit with descriptive message
git commit -m "Update: added new project to portfolio"

# 5. Push to GitHub
git push

# 6. GitHub Actions will automatically rebuild and deploy
```

## ⚠️ Common Issues & Solutions

### Issue 1: 404 on GitHub Pages

**Problem:** Site shows 404 error

**Solution:** 
- Check `base` path in `vite.config.js` matches your repo name exactly
- Ensure it starts and ends with `/`
- Example: `base: '/Profile_Website_Himanshu-B-A/',`

### Issue 2: Images/CSS Not Loading

**Problem:** Assets return 404 errors

**Solution:**
- Verify `base` configuration in `vite.config.js`
- Check that files are in correct folders
- Rebuild: `npm run build`

### Issue 3: Push Rejected

**Problem:** `git push` fails

**Solution:**
```bash
# Pull latest changes first
git pull origin main --rebase

# Then push
git push origin main
```

### Issue 4: GitHub Actions Failing

**Problem:** Deployment workflow fails

**Solution:**
1. Check the Actions tab for error details
2. Ensure `package.json` has all dependencies
3. Try building locally: `npm run build`
4. Fix any build errors
5. Push again

### Issue 5: Old Version Showing

**Problem:** Changes not visible on live site

**Solution:**
1. Check GitHub Actions completed successfully
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Wait 2-3 minutes for CDN to update
4. Try incognito/private window

## 📊 Verify Deployment

After deploying, check:

- ✅ Site loads at GitHub Pages URL
- ✅ All sections display correctly
- ✅ Navigation works
- ✅ Forms submit (if configured)
- ✅ Links open correctly
- ✅ Images load
- ✅ Animations play smoothly
- ✅ Responsive on mobile

## 🎨 Custom Domain (Optional)

### To use your own domain (e.g., www.yourdomain.com):

1. **Create CNAME file:**
   ```bash
   echo "www.yourdomain.com" > public/CNAME
   ```

2. **Update DNS records** at your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```

3. **In GitHub Settings → Pages:**
   - Enter custom domain
   - Enable "Enforce HTTPS"
   - Wait 24-48 hours for DNS propagation

## 🔐 Security Best Practices

- ✅ Never commit `.env` files with secrets
- ✅ Use environment variables for API keys
- ✅ Enable "Enforce HTTPS" in GitHub Pages settings
- ✅ Keep dependencies updated: `npm update`
- ✅ Run security audits: `npm audit`

## 📈 Post-Deployment Tasks

- [ ] Test site on multiple devices
- [ ] Share on LinkedIn with live URL
- [ ] Add to GitHub profile README
- [ ] Set up Google Analytics (optional)
- [ ] Submit to Google Search Console
- [ ] Add to your resume
- [ ] Share on social media

## 🎉 Success Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site accessible at GitHub Pages URL
- [ ] All sections working correctly
- [ ] Responsive on all devices
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Shared on LinkedIn/resume

## 📞 Need Help?

- **GitHub Issues:** [Open an issue](https://github.com/himanshu-b-a/Profile_Website_Himanshu-B-A/issues)
- **Documentation:** Check README.md and DEPLOYMENT.md
- **GitHub Docs:** https://docs.github.com/pages

## 🎓 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Git Basics Tutorial](https://git-scm.com/book/en/v2)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 🚀 Quick Command Reference

```bash
# Check current status
git status

# See commit history
git log --oneline

# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# See all branches
git branch -a

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Update from remote
git pull origin main

# Force push (use with caution!)
git push --force origin main
```

---

**Congratulations! Your portfolio is now live on GitHub Pages! 🎉🎊**

Share your live URL:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

**Don't forget to:**
1. ⭐ Star this repository if you found it helpful
2. 📢 Share your deployed portfolio
3. 🎨 Keep customizing and improving

Good luck! 🚀✨
