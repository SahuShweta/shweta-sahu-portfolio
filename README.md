# 🌟 Shweta Sahu - Portfolio Website
<div align="center">
![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

   **A modern, interactive portfolio showcasing my journey as a Computer Science Engineering student**

[🌐 Live Demo](https://shweta-sahu-portfolio-ecni.vercel.app) · [📧 Contact Me](mailto:shwetasahu1710@gmail.com) · [💼 LinkedIn](https://www.linkedin.com/in/shweta-sahu-b239a3307)
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

---

## 🎯 About

This is my personal portfolio website built to showcase my skills, projects, and achievements as a Computer Science Engineering student. The portfolio reflects my passion for **full-stack development**, **competitive programming**, and **building impactful digital solutions**.

### 🎨 Design Philosophy
- **Modern & Minimal** - Clean, professional interface with focus on content
- **Interactive** - Smooth animations and engaging user experience
- **Performant** - Optimized for speed with 90+ Lighthouse score
- **Responsive** - Seamless experience across all devices

---

## ✨ Features

### 🚀 Core Features
- ⚡ **Lightning Fast** - Built with Next.js 14 App Router for optimal performance
- 🎨 **Modern UI/UX** - Glassmorphism effects, gradient animations, and smooth transitions
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🌙 **Dark Mode** - Easy on the eyes with beautiful dark theme
- 🎭 **3D Elements** - Interactive Three.js animations in hero section
- 📊 **Coding Stats** - Live LeetCode and GeeksforGeeks achievements
- 📬 **Contact Form** - Functional contact form with validation
- 🔍 **SEO Optimized** - Meta tags and Open Graph for better discoverability

### 🎪 Highlights
- Dynamic project showcase with filtering
- Interactive skills visualization
- Competitive programming achievements
- Smooth scroll navigation
- Animated section transitions
- Professional resume download

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/)
- **Icons:** [Lucide React](https://lucide.dev/)

### Development Tools
- **Package Manager:** [Bun](https://bun.sh/)
- **Code Quality:** ESLint, Prettier
- **Version Control:** Git & GitHub
- **Deployment:** [Vercel](https://vercel.com/)

### Database (Optional)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** PostgreSQL / MongoDB

---

## 🚀 Quick Start

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) or npm/yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SahuShweta/ShwetaPortfolio.git
cd ShwetaPortfolio
```

2. **Install dependencies**
```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install

# Or using yarn
yarn install
```

3. **Set up environment variables**
```bash
# Create .env.local file
cp .env.example .env.local

# Add your environment variables
# DATABASE_URL=your_database_url
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Run the development server**
```bash
# Using Bun
bun run dev

# Or using npm
npm run dev
```

5. **Open your browser**
```
Navigate to http://localhost:3000
```

### Build for Production

```bash
# Build the application
bun run build

# Start production server
bun start
```

---

## 📁 Project Structure

```
ShwetaPortfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts      # Contact form API
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Hero section
│   │   │   ├── About.tsx         # About section
│   │   │   ├── Skills.tsx        # Skills section
│   │   │   ├── Projects.tsx      # Projects showcase
│   │   │   ├── Achievements.tsx  # Coding achievements
│   │   │   └── Contact.tsx       # Contact form
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── ThreeBackground.tsx   # 3D animations
│   │   ├── Navigation.tsx        # Navbar
│   │   └── Footer.tsx            # Footer
│   ├── lib/
│   │   ├── utils.ts              # Utility functions
│   │   └── constants.ts          # Constants
│   └── types/
│       └── index.ts              # TypeScript types
├── public/
│   ├── resume.pdf                # Resume file
│   └── projects/                 # Project images
├── prisma/
│   └── schema.prisma             # Database schema
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 📄 Sections

### 1. 🎯 Hero Section
- Eye-catching introduction with 3D particle effects
- Gradient animated text
- Call-to-action buttons
- Smooth scroll indicator

### 2. 👨‍💻 About Section
- Professional introduction
- Educational background
- Skills overview
- Downloadable resume

### 3. 💼 Skills Section
- Categorized skill cards (Languages, Web Dev, Tools)
- Visual proficiency indicators
- Tech stack logos with hover effects
- Competitive programming skills

### 4. 🚀 Projects Section
- Filterable project gallery
- Project cards with live demos and GitHub links
- Tech stack badges
- Hover effects and animations

### 5. 🏆 Achievements Section
- LeetCode statistics and profile link
- GeeksforGeeks achievements
- Problem-solving metrics
- Contest participation highlights

### 6. 📬 Contact Section
- Functional contact form with validation
- Email and phone information
- Social media links
- Professional layout

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project settings
   - Click "Deploy"

3. **Environment Variables**
   - Add all environment variables from `.env.local`
   - Go to Project Settings → Environment Variables

4. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS settings

### Alternative Deployment Options
- **Netlify:** Push to GitHub and connect via Netlify dashboard
- **Railway:** Deploy directly from GitHub
- **Self-hosted:** Build and deploy to your own server

---

## 📊 Performance

- ⚡ **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)
- 🎨 **First Contentful Paint:** < 1.5s
- 📱 **Mobile Optimization:** Fully responsive
- ♿ **Accessibility:** WCAG 2.1 AA compliant

---

## 📱 Connect With Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shweta-sahu-b239a3307)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/Shweta_Sahu10/)
[![GeeksforGeeks](https://img.shields.io/badge/GeeksforGeeks-2F8D46?style=for-the-badge&logo=geeksforgeeks&logoColor=white)](https://www.geeksforgeeks.org/profile/shwetasan7ie)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SahuShweta)

**📧 Email:** shwetasahu1710@gmail.com  
**📱 Phone:** +91 7091693590

</div>

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is **open source** and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **shadcn/ui** - For beautiful UI components
- **Vercel** - For seamless deployment
- **Three.js** - For 3D graphics capabilities
- **Framer Motion** - For smooth animations

---

## 📈 Future Enhancements

- [ ] Blog section for technical articles
- [ ] Dark/Light mode toggle
- [ ] More interactive 3D elements
- [ ] Project case studies
- [ ] Testimonials section
- [ ] Analytics dashboard
- [ ] Multi-language support

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ by [Shweta Sahu](https://github.com/SahuShweta)**

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=SahuShweta.ShwetaPortfolio)
![GitHub stars](https://img.shields.io/github/stars/SahuShweta/ShwetaPortfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/SahuShweta/ShwetaPortfolio?style=social)

</div>
