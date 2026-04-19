@echo off
echo ========================================
echo   Netflix-Style Portfolio Setup
echo ========================================
echo.

echo [1/4] Installing dependencies...
call npm install

echo.
echo [2/4] Checking installation...
if errorlevel 1 (
    echo ERROR: Installation failed!
    pause
    exit /b 1
)

echo.
echo [3/4] Building project...
call npm run build

echo.
echo [4/4] Setup complete!
echo.
echo ========================================
echo   Next Steps:
echo ========================================
echo.
echo 1. Update your personal information in:
echo    - src/components/ (all component files)
echo    - src/data/portfolioData.js
echo.
echo 2. Add your resume to: public/resume.pdf
echo.
echo 3. Start development server:
echo    npm run dev
echo.
echo 4. Build for production:
echo    npm run build
echo.
echo 5. Deploy to GitHub Pages:
echo    npm run deploy
echo.
echo ========================================
echo   Documentation:
echo ========================================
echo.
echo - README.md - Full documentation
echo - QUICK_START.md - Quick start guide
echo - CUSTOMIZATION_CHECKLIST.md - Customization steps
echo - DEPLOYMENT.md - Deployment guide
echo.
pause
