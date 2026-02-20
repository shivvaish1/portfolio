# Shiv's Portfolio

A modern, responsive portfolio website built with React.js. Features a clean dark theme with smooth animations and a professional design.

![Portfolio Preview](preview.png)

## Features

- 🎨 Modern dark theme design
- 📱 Fully responsive layout
- ⚡ Smooth scroll navigation
- 🎭 Animated components
- 📧 Contact form
- 🚀 Easy deployment to GitHub Pages

## Technologies Used

- React.js
- React Icons
- React Scroll
- CSS3 (Custom styling with animations)
- GitHub Pages (Deployment)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shivvaish1/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Personal Information

Update the following files to add your personal information:

1. **Hero Section** (`src/components/Hero/Hero.jsx`)
   - Change name and title
   - Update social media links

2. **About Section** (`src/components/About/About.jsx`)
   - Update bio text
   - Modify stats (years of experience, projects, etc.)
   - Update tech list

3. **Skills Section** (`src/components/Skills/Skills.jsx`)
   - Add/remove skills based on your expertise

4. **Projects Section** (`src/components/Projects/Projects.jsx`)
   - Add your own projects with descriptions
   - Update GitHub and live demo links

5. **Contact Section** (`src/components/Contact/Contact.jsx`)
   - Update email and location
   - Update social media links

6. **Footer** (`src/components/Footer/Footer.jsx`)
   - Update social media links

### Colors & Theme

The color scheme can be modified in `src/App.css`:
- Primary background: `#0a192f`
- Secondary background: `#112240`
- Accent color: `#64ffda`
- Text colors: `#ccd6f6`, `#8892b0`

## Deployment to GitHub Pages

### Step 1: Update Homepage URL

In `package.json`, update the homepage field with your GitHub username:

```json
"homepage": "https://shivvaish.tech"
```

### Step 2: Create GitHub Repository

1. Create a new repository on GitHub named `portfolio`
2. Initialize git and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/shivvaish1/portfolio.git
git push -u origin main
```

### Step 3: Deploy

Run the deploy command:

```bash
npm run deploy
```

This will:
1. Build your React app
2. Create a `gh-pages` branch
3. Push the build to GitHub Pages

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", select `gh-pages` branch
4. Click Save

Your portfolio will be live at: `https://shivvaish.tech`

## Adding Your Profile Picture

To add your profile picture:

1. Add your image to `public/images/profile.jpg`
2. Update `src/components/Hero/Hero.jsx`:

```jsx
<div className="image-wrapper">
  <img src="/images/profile.jpg" alt="Shiv" className="profile-image" />
</div>
```

3. Update the CSS in `src/components/Hero/Hero.css` as needed.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- GitHub: [@shivvaish1](https://github.com/shivvaish1)
- LinkedIn: [Shiv](https://linkedin.com/in/)
- Email: shivvaish05@gmail.com

---

⭐ If you found this portfolio template helpful, please give it a star!

