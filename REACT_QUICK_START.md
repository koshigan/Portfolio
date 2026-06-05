# ⚡ Quick Setup Guide - React Portfolio

Get your React portfolio running in 5 minutes!

## Step 1: Install Dependencies (2 min)

```bash
cd portfolio
npm install
```

## Step 2: Update Your Information (2 min)

### Update Name
Open `src/components/Hero.jsx` and change:
```javascript
<h1 className="text-5xl md:text-6xl font-bold text-hr-navy mb-4 leading-tight">
  Your Name  {/* ← Change this */}
</h1>
```

### Update GitHub Username
Open `src/App.jsx` and change:
```javascript
const username = 'koshigan'  // ← Change to your username
```

### Update Email & Links
Open `src/components/Contact.jsx` and update:
```javascript
const contactMethods = [
  { value: 'your.email@example.com' },           // ← Your email
  { value: 'linkedin.com/in/yourprofile' },      // ← Your LinkedIn
  { value: 'github.com/yourprofile' }            // ← Your GitHub
]
```

## Step 3: Add Profile Picture (1 min)

1. Create folder: `public/assets/`
2. Add your photo: `public/assets/profile.jpg`
3. Recommended size: 400x400px

Or leave empty for placeholder.

## Step 4: Test Locally

```bash
npm run dev
```

Open http://localhost:3000 and verify:
- ✅ Your name appears
- ✅ All sections load
- ✅ No console errors (F12)
- ✅ Theme toggle works
- ✅ Mobile responsive (F12 → toggle device toolbar)

## Step 5: Build & Deploy

### Build for Production
```bash
npm run build
```

Output: `dist/` folder (ready to deploy)

### Deploy to Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Or Deploy to Netlify
1. Run `npm run build`
2. Go to netlify.com
3. Drag `dist/` folder → Deploy

---

## 🎨 Color Customization (Optional)

Edit `tailwind.config.js`:

```javascript
colors: {
  'hr-navy': '#1a3a52',      // Primary (navy blue)
  'hr-navy-light': '#2d5a7b',
  'hr-green': '#6B8E6F',     // Secondary (sage green)
  'hr-green-light': '#8ba88a',
  'hr-teal': '#0E7490',      // Accent (teal)
  'hr-cream': '#F9F7F4',     // Background (cream)
  'hr-gray': '#E8E4D9',      // Borders (gray)
  'hr-dark': '#2C3E50',      // Text (dark)
  'hr-gold': '#D4A574',      // Highlights (gold)
}
```

Change hex values to your preferred colors!

---

## 📝 Content Customization

### Update Skills
Edit `src/components/Skills.jsx`:
```javascript
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', ...] // ← Edit skills
  },
  // ... more categories
]
```

### Update Experience
Edit `src/components/Experience.jsx`:
```javascript
const experiences = [
  {
    role: 'Your Job Title',
    company: 'Your Company',
    period: '2024 - Present',
    // ... update details
  },
]
```

### Update Projects
Edit `src/components/Projects.jsx`:
```javascript
const featuredProjects = [
  {
    title: '🚀 Your Project',
    description: 'Your description...',
    // ... update project
  },
]
```

### Update About
Edit `src/components/About.jsx`:
```javascript
<p className="text-lg text-hr-dark leading-relaxed">
  Your about text here...
</p>
```

---

## 🔧 Troubleshooting

### "npm: command not found"
Install Node.js from nodejs.org

### Port 3000 in use?
```bash
npm run dev -- --port 3001
```

### GitHub projects not showing?
1. Check username in `src/App.jsx`
2. Open F12 → Console tab
3. Look for error messages

### Styles look broken?
```bash
npm install
npm run dev
```

### Build fails?
```bash
rm -rf node_modules
npm install
npm run build
```

---

## ✅ Pre-Deployment Checklist

- [ ] Updated your name
- [ ] Updated email address
- [ ] Added profile picture
- [ ] Updated GitHub username
- [ ] Updated LinkedIn/GitHub links
- [ ] Updated job titles and experience
- [ ] Updated skills and expertise
- [ ] Tested locally (npm run dev)
- [ ] Verified responsive design (F12)
- [ ] Built for production (npm run build)
- [ ] Deployed successfully

---

## 🚀 Deploy Commands

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify (Manual)
```bash
npm run build
# Then upload dist/ folder to netlify.com
```

### GitHub Pages
```bash
npm run build
# Create gh-pages branch
# Push dist/ to gh-pages branch
```

---

## 📚 More Information

- Full docs: See `REACT_README.md`
- Original HTML version: `index.html`, `styles.css`, `script.js`
- Color palette: `tailwind.config.js`

---

## 🎉 You're Ready!

Your portfolio is now ready to impress HR teams and recruiters! 

Share your link on:
- LinkedIn
- GitHub profile
- Resume
- Twitter/X
- Professional networks

Good luck! 🌟

---

**Questions?** Check the error console (F12) for helpful debugging info.
