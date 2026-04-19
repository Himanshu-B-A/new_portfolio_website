# 🌐 Deployment Guide

## Option 1: GitHub Pages (Recommended)

### Method A: Using npm deploy script

1. **Update package.json**:
```json
"homepage": "https://YOUR_USERNAME.github.io/Profile_Website_Himanshu-B-A"
```

2. **Build and deploy**:
```bash
npm run deploy
```

That's it! Your site will be live at the homepage URL.

### Method B: Using GitHub Actions (Automated)

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

2. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages section
   - Source: GitHub Actions
   - The workflow in `.github/workflows/deploy.yml` will auto-deploy

3. **Every push to main branch will auto-deploy**

## Option 2: Netlify

### Quick Deploy

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Build your site**:
```bash
npm run build
```

3. **Deploy**:
```bash
netlify deploy
```

4. **For production**:
```bash
netlify deploy --prod
```

### Continuous Deployment

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

**Custom Domain**: Add in Site settings → Domain management

## Option 3: Vercel

### Quick Deploy

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **For production**:
```bash
vercel --prod
```

### Continuous Deployment

1. Go to [Vercel](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"

## Option 4: Firebase Hosting

1. **Install Firebase CLI**:
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**:
```bash
firebase login
```

3. **Initialize Firebase**:
```bash
firebase init hosting
```
   - Select "Use an existing project" or create new
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub integration: Optional

4. **Build and deploy**:
```bash
npm run build
firebase deploy
```

## Option 5: Render

1. Go to [Render](https://render.com)
2. Click "New" → "Static Site"
3. Connect your GitHub repository
4. Settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click "Create Static Site"

## 🔧 Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] Resume PDF added to `/public/`
- [ ] All project links working
- [ ] Contact form configured
- [ ] Images optimized
- [ ] No console errors
- [ ] Tested on mobile/tablet/desktop
- [ ] Meta tags updated for SEO
- [ ] Favicon added

## 🚀 Post-Deployment Steps

1. **Test your live site**:
   - Check all navigation links
   - Test contact form
   - Verify all images load
   - Test on different devices

2. **SEO Optimization**:
   - Submit sitemap to Google Search Console
   - Add meta description tags
   - Add Open Graph tags for social sharing

3. **Analytics** (Optional):
   - Add Google Analytics
   - Add Hotjar for user behavior
   - Set up conversion tracking

## 🔄 Updating Your Site

### GitHub Pages:
```bash
npm run deploy
```

### Netlify/Vercel (with Git integration):
```bash
git add .
git commit -m "Update content"
git push
```
Auto-deploys on push!

### Manual deploy:
```bash
npm run build
# Then use platform-specific deploy command
```

## 🐛 Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages shows 404
- Check `homepage` in package.json
- Ensure base in vite.config.js matches repo name
- Wait a few minutes for DNS propagation

### Images not loading
- Use relative paths
- Check image files are in `public/` folder
- Verify image URLs in components

### Contact form not working
- Configure form submission service (Formspree/EmailJS)
- Check CORS settings
- Verify API keys are set

## 💡 Tips

- Use environment variables for API keys
- Enable HTTPS (automatic on most platforms)
- Set up custom domain for professional look
- Monitor site performance with Lighthouse
- Keep dependencies updated

## 📊 Performance

Expected scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

Run audit:
```bash
npm run build
npx serve dist
# Open Chrome DevTools → Lighthouse
```

---

Choose the deployment option that best fits your needs. GitHub Pages is recommended for simplicity!
