# 🚀 Quick Start Guide

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 📝 Customize Content

### Easy Way: Update Data File

Edit `src/data/portfolioData.js` to update:
- Personal information
- Projects
- Experience
- Education
- Skills
- Social links

### Advanced: Direct Component Editing

Edit individual component files in `src/components/`:
- `Hero.jsx` - Landing section
- `About.jsx` - About section
- `Skills.jsx` - Skills grid
- `Projects.jsx` - Project cards
- `Experience.jsx` - Work timeline
- `Education.jsx` - Education details
- `Contact.jsx` - Contact form

## 🎨 Styling

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  netflix: {
    red: '#E50914',      // Your brand color
    black: '#141414',
    darkGray: '#1a1a1a',
    gray: '#2a2a2a',
    lightGray: '#b3b3b3',
  },
}
```

### Adjust Animations

Modify animation variants in component files:

```javascript
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 } // Adjust timing
  },
};
```

## 📦 Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## 🌐 Deployment

### GitHub Pages

1. Update `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name"
```

2. Deploy:
```bash
npm run deploy
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

## 🔧 Common Issues

### Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📱 Testing

- **Desktop**: Use browser DevTools (F12)
- **Mobile**: Use device emulation in DevTools
- **Real devices**: Use `npm run dev -- --host` and access via local IP

## 🎯 Next Steps

1. ✅ Update all personal information
2. ✅ Add real projects with screenshots
3. ✅ Upload resume PDF to `/public/resume.pdf`
4. ✅ Configure contact form
5. ✅ Test on mobile devices
6. ✅ Deploy to GitHub Pages/Netlify/Vercel

## 💡 Tips

- Use high-quality images (WebP format recommended)
- Keep descriptions concise and impactful
- Test all links before deployment
- Optimize images before uploading
- Use real project URLs when available

---

Need help? Check `CUSTOMIZATION_CHECKLIST.md` for detailed steps!
