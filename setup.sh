#!/bin/bash

# 🎬 Netflix Portfolio - Quick Setup Script

echo "🎬 Setting up your Netflix-style Portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 16+ and try again."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎨 Portfolio setup complete!"
echo ""
echo "📝 Next steps:"
echo "  1. Update your information in src/components/"
echo "  2. Customize colors in tailwind.config.js"
echo "  3. Add your projects and experience data"
echo ""
echo "🚀 Quick commands:"
echo "  npm run dev      - Start development server"
echo "  npm run build    - Build for production"
echo "  npm run preview  - Preview production build"
echo "  npm run deploy   - Deploy to GitHub Pages"
echo ""
echo "📖 For detailed instructions, see:"
echo "  - README.md - General overview"
echo "  - DEPLOYMENT.md - Deployment guide"
echo "  - CUSTOMIZATION_CHECKLIST.md - What to customize"
echo ""
echo "✨ Happy coding! Your portfolio awaits at http://localhost:5173"
echo ""
