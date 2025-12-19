# Nargiz Alizada — SITE 1101 Portfolio

This repository contains a clean, responsive static portfolio built with HTML, CSS, and JavaScript.

Structure:
```
index.html
about.html
projects.html
assets/
  css/style.css
  js/script.js
  images/profile.svg
  images/project-screenshot.svg
```

Local preview (Windows PowerShell):

1. Open the folder in a code editor or terminal.
2. Start a simple server. If you have Python 3 installed, run:

```powershell
python -m http.server 8000
```

3. Open `http://localhost:8000` in your browser.

Git instructions (commit & push):

```powershell
cd "c:/Users/NARGIS/OneDrive/Desktop/WEBSITE"
# initialize git if not already
git init
git add .
git commit -m "Initial SITE 1101 portfolio scaffold by Nargiz Alizada"
# connect to remote (if not set)
# Replace origin if you already set different remote
git remote add origin https://github.com/alizadenn08-bot/Project-3.git
git branch -M main
git push -u origin main
```

Deploy to GitHub Pages (simple guide):

- Using the repository `https://github.com/alizadenn08-bot/Project-3.git`:
  1. Push `main` branch to GitHub.
  2. Go to GitHub repo → Settings → Pages.
  3. Under "Source", select the `main` branch and `/ (root)` folder.
  4. Save. The site will be published at `https://alizadenn08-bot.github.io/Project-3/` (or similar) after a few minutes.

If you want, I can run the git commands for you and help deploy.