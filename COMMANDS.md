# 🎯 Quick Start Commands

Essential commands for working with your portfolio:

## 📦 Installation

```bash
# Install dependencies
npm install

# Or use the setup script
./setup.sh        # Linux/Mac
setup.bat         # Windows
```

## 🛠️ Development

```bash
# Start development server (with hot reload)
npm run dev

# Access at: http://localhost:5173
```

## 🏗️ Building

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🚀 Deployment

```bash
# Deploy to GitHub Pages (manual)
npm run deploy

# Or push to main branch for automatic deployment via GitHub Actions
git push origin main
```

## 🧹 Maintenance

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Clean install (if issues occur)
rm -rf node_modules package-lock.json
npm install
```

## 🔍 Troubleshooting

```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Clear build folder
rm -rf dist

# Reinstall everything
npm clean-install
```

## 📝 Git Commands

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit: Netflix-style portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main

# Regular updates
git add .
git commit -m "Update: your changes here"
git push
```

## 🎨 Customization Workflow

1. **Update personal info** in components
2. **Test locally** with `npm run dev`
3. **Build** with `npm run build`
4. **Deploy** with `npm run deploy` or push to GitHub

## 📊 Performance Check

```bash
# Build and analyze bundle size
npm run build

# Check bundle size in dist folder
# Target: < 500KB gzipped
```

## 🔗 Useful Links

- **Development:** http://localhost:5173
- **Preview:** http://localhost:4173 (after `npm run preview`)
- **Live Site:** https://YOUR-USERNAME.github.io/YOUR-REPO/

## ⚡ Hot Tips

- Save files to see instant updates with HMR
- Check browser console for errors
- Use React DevTools for debugging
- Commit frequently with meaningful messages
- Test on multiple devices before deploying

---

**Need help?** Check [README.md](README.md) or [DEPLOYMENT.md](DEPLOYMENT.md)
