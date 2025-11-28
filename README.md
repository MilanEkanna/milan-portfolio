# 🚀 My Portfolio – WithMilan.dev

A modern, elegant, fully responsive personal portfolio built with **React**, **Vite**, **TailwindCSS**, **GSAP animations**, and a rich UI/UX design philosophy. This website showcases my skills, projects, blogs, and professional journey as a **Full‑Stack MERN Developer**.

---

## 📌 Overview

This portfolio is crafted to highlight:

* My technical expertise (Frontend, Backend, DevOps basics)
* My professional journey and achievements
* Clean UI, smooth animations, and strong readability
* Blog section for developer insights
* Contact form optimized for client enquiries

The design focuses on:

* Warm theme with browns and gold accents
* Rounded, polished UI components
* Smooth hover animations
* Pixel‑perfect layout consistency
* GSAP-powered text and cursor interactions

---

## 🛠️ Tech Stack

### **Frontend**

* **React 19**
* **Vite** (super‑fast dev environment)
* **TailwindCSS 3.4**
* **React Router DOM** (v7)
* **GSAP** (ScrambleText, SplitText, cursor interactions)
* **Motion** (animation utilities)
* **OGL** (3D visual elements, if used in hero section)

### **Other Tools**

* **ESLint** (clean code)
* **Autoprefixer**
* **PostCSS**

---

## 📁 Project Structure

```
my-portfolio/
│── public/
│── src/
│   ├── components/
│   ├── pages/
│   ├── animations/
│   ├── hooks/
│   ├── assets/
│   ├── router/
│   └── main.jsx
│── package.json
│── tailwind.config.js
│── README.md
```

---

## 🎨 UI/UX Features

### 🔹 **Navbar**

* Elegant dark‑brown background
* Gold accent icons and text
* Fully responsive, centered navigation

### 🔹 **Skill Icons Section**

* Circular skill badges
* Smooth hover lift effect
* Consistent layout across large screens

### 🔹 **Expertise Bars**

* Soft progress bars using brown shades
* Smooth transitions

### 🔹 **About Section**

* Serif headlines
* Paragraphs with improved readability

### 🔹 **Latest Blogs**

* Card‑based layout
* Category pill
* Author section with avatar

### 🔹 **Footer**

* Multi‑column information
* Social links

### 🔹 **Hire Me Section**

* Contact form with fields:

  * Name
  * Email
  * Role / Company
  * Project Type (dropdown)
  * Message textarea

---

## ✨ Animation Features

Using **GSAP** with `ScrambleText` and `SplitText`:

* Text scrambles when hovered
* Word interactions based on cursor radius
* Smooth linear easing
* GSAP revert on unmount

Other animations (if included):

* Cursor glow trail
* Fade‑ins for sections
* Subtle scale animations for buttons

---

## 📦 Installation & Setup

Clone the repo:

```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

Install dependencies:

```bash
npm install
```

Run in development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🔧 Configuration

### Tailwind

Fully configured with custom colors and typography adjustments.

```
# tailwind.config.js
content: ["./index.html", "./src/**/*.{js,jsx}"]
```

### GSAP

Make sure plugins are registered globally:

```js
gsap.registerPlugin(SplitText, ScrambleTextPlugin);
```

---

## 📚 Components Overview

### `ScrambledText.jsx`

* Creates split-character text
* Applies scramble animation near cursor
* Fully configurable (radius, speed, characters, duration)

### Reusable Components

* Navbar
* SkillCircle
* ProgressBar
* BlogCard
* Footer
* ContactForm

---

## 📖 Pages

* **Home** – Hero, skills, expertise
* **About** – Biography, background
* **Projects** – Portfolio showcase
* **Blogs** – Latest writing
* **Hire Me** – Inquiry form
* **Journey** – Timeline / personal story

---

## 🌐 Deployment

Works perfectly with:

* **Vercel** (recommended)
* Netlify
* GitHub Pages (with Vite static build)

To deploy on Vercel:

```bash
vercel
```

---

## 🤝 Contact

If you'd like to collaborate or hire me:
📧 **[milanmekanna@gmail.com](mailto:milanmekanna@gmail.com)**
📞 **+91‑639‑7757‑813**

Social Links:

* GitHub
* Instagram
* LinkedIn
* Twitter / X
* StackOverflow

---

## ❤️ Credits

Designed & developed by **WithMilan.dev**

Made with passion for clean UI, performance, and meaningful web experiences.

---

## 📜 License

This project is private and not intended for public reuse. If you want to fork or reuse components, please contact me first.

---

**Thank you for checking out my portfolio!**
