# 🌐 Anurag Ray - Web3 Tokenomics Portfolio

A modern, responsive portfolio website for Web3 Tokenomics Architect & Ecosystem Strategist Anurag Ray, built with Next.js, TypeScript, and cutting-edge UI components.

## ✨ Features

### 🎨 Design & UI
- **Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- **Interactive Aceternity UI Components** - Floating navigation, animated backgrounds, and hover effects
- **Shadcn UI Components** - Modern, accessible UI components
- **Responsive Design** - Mobile-first approach with perfect desktop experience
- **Smooth Animations** - Framer Motion powered animations and transitions

### 📱 Mobile-First Experience
- **Touch-Friendly Navigation** - Optimized for mobile interaction
- **Responsive Typography** - Scales beautifully across all screen sizes
- **Mobile-Optimized Layouts** - Stacked layouts and touch-friendly buttons
- **Custom Scrollbar** - Sleek scrollbar design for better UX

### 🚀 Interactive Components
- **Floating Navigation Bar** - Auto-hiding navigation with smooth animations
- **Background Beams** - Animated SVG background effects
- **Hover Effect Cards** - Interactive experience and testimonial cards
- **Smooth Scrolling** - CSS-based smooth scrolling between sections
- **Contact Integration** - Direct links to email, Telegram, and LinkedIn

## 🛠️ Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with modern features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Re-usable UI components
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/anurag-portfolio.git
   cd anurag-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
anurag-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main portfolio page
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   │   ├── button.tsx    # Button component
│   │   ├── floating-navbar.tsx  # Floating navigation
│   │   ├── background-beams.tsx # Animated background
│   │   └── card-hover-effect.tsx # Interactive cards
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Dark/light mode toggle
├── lib/                  # Utility functions
│   └── utils.ts          # Tailwind utility functions
├── public/               # Static assets
└── package.json          # Project dependencies
```

## 🎯 Key Sections

### 🏠 Hero Section
- Animated introduction with gradient text
- Background beams animation
- Call-to-action buttons
- Mobile-optimized typography

### 👤 About Section
- Personal introduction
- Three-step process overview
- Responsive grid layout

### 💼 Experience Section
- Interactive hover cards
- 5 key professional roles
- Detailed descriptions and time periods

### 💬 Testimonials Section
- Client testimonials
- Interactive card hover effects
- Industry leader quotes

### 📞 Contact Section
- Multiple contact methods
- Social media links
- Tech stack showcase

## 🎨 Customization

### Theme Colors
Modify theme colors in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other color variables */
}
```

### Content Updates
Update portfolio content in `app/page.tsx`:

```typescript
const experiences = [
  {
    title: "Your Role",
    company: "Your Company",
    period: "Date Range",
    description: "Your description"
  },
  // ... more experiences
];
```

## 📱 Mobile Responsiveness

The portfolio is built with a mobile-first approach:

- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive layouts
- **Touch Optimization**: Large tap targets and gesture-friendly interactions
- **Performance**: Optimized images and lazy loading

## 🚀 Deployment

### Deploy on Vercel
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Anurag Ray** - Web3 Tokenomics Architect
- 📧 Email: [anuragray28@gmail.com](mailto:anuragray28@gmail.com)
- 💬 Telegram: [@anuragray](https://t.me/anuragray)
- 🔗 LinkedIn: [linkedin.com/in/aray28](https://linkedin.com/in/aray28)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
