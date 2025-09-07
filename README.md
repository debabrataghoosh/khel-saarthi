# KHEL SAARTHI - Sports Assessment Platform

A comprehensive mobile-first web application for the **Sports Authority of India (SAI)** that provides a complete digital platform for sports talent identification and assessment. Built with Next.js and optimized for mobile devices.

## 🏆 Project Overview

KHEL SAARTHI is a cutting-edge sports assessment platform that enables athletes to:
- Take standardized physical fitness tests
- Track performance progress over time
- Access comprehensive test analytics
- File grievances and appeals for test reviews
- View leaderboards and merit rankings

## ✨ Key Features

### 🎯 **Complete Test Flow**
- **Test Instructions**: Detailed setup guides with visual demonstrations
- **Live Test Recording**: Real-time capture interface with camera integration
- **Results Analysis**: Comprehensive performance metrics and comparisons
- **Grievance System**: Professional appeals process for test reviews

### 📊 **Tests Hub**
- **Categorized Assessments**: Fitness, Agility, and Sport-Specific tests
- **Popular Tests**: 20m Shuttle Run, Vertical Jump, Sprint tests, Agility drills
- **Search & Filter**: Easy discovery of relevant assessments
- **Visual Test Cards**: Icons and descriptions for each test

### 📈 **Progress Tracking**
- **Performance Trends**: Visual charts showing improvement over time
- **Test Statistics**: Detailed breakdown of recent test results
- **Personal Bests**: Track achievements and milestones
- **Fitness Ratings**: Comparative analysis with age groups

### 🏅 **Comprehensive System**
- **User Onboarding**: Multi-step registration with face verification
- **Dashboard**: Personalized home screen with quick actions
- **Profile Management**: Detailed athlete profiles and settings
- **Merit Leaderboards**: Rankings and competitive standings

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.5.2 with TypeScript
- **Styling**: Tailwind CSS (mobile-first responsive design)
- **Architecture**: App Router with grouped routes
- **Icons**: Heroicons and custom SVG components
- **Responsive**: Optimized for mobile devices and tablets

## 📁 Project Structure

```
src/app/
├── (onboarding)/           # Registration & Welcome Flow
│   ├── splash/             # App splash screen
│   ├── welcome/            # Welcome/Login page
│   ├── register-basic/     # Basic info registration
│   ├── register-id/        # ID verification
│   ├── register-face/      # Face verification
│   └── register-complete/  # Registration completion
│
├── (results)/              # Progress & Analytics
│   ├── progress/           # Performance tracking
│   └── merit/              # Leaderboards
│
├── (test)/                 # Test Management
│   ├── instructions/       # Test guidelines
│   ├── live/               # Live test interface
│   └── analysis/           # Post-test analysis
│
├── test/                   # Specific Test Flows
│   ├── instructions/shuttle-run/
│   ├── record/shuttle-run/
│   └── results/shuttle-run/
│
├── dashboard/              # Main dashboard
├── assessments/            # Tests hub
├── profile/                # User profile
├── settings/               # App settings
└── grievance/              # Appeals system
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/debabrataghoosh/khel-saarthi.git
   cd khel-saarthi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### For Mobile Testing
- Use Chrome DevTools mobile emulation
- Test on actual mobile devices for best experience
- Recommended viewport: 375x667 (iPhone SE) or similar

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000) backgrounds
- **Secondary**: Gray-900 (#111827) cards and components
- **Accent**: Teal-400 (#2DD4BF) for highlights and CTAs
- **Text**: White (#FFFFFF) primary, Gray-400 (#9CA3AF) secondary
- **Status**: Green for success, Red for errors, Orange for warnings

### Typography
- **Headers**: Bold, large text for primary headings
- **Body**: Regular weight for content
- **Labels**: Medium weight for form labels and metadata

## 📱 Mobile Optimization

- **Touch-first interface** with appropriate button sizes
- **Gesture-friendly navigation** with swipe support
- **Responsive layouts** that adapt to different screen sizes
- **Optimized images** and icons for fast loading
- **Progressive Web App** capabilities

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🌟 Key Pages & Components

### Dashboard
Central hub with quick access to tests, progress, and profile management.

### Tests Hub (`/assessments`)
Comprehensive catalog of available fitness and sports assessments.

### Test Flow
Complete testing experience from instructions to results analysis.

### Progress Tracking (`/progress`)
Visual analytics and performance trends with detailed statistics.

### Grievance System (`/grievance`)
Professional complaint handling system for test review requests.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is part of the Sports Authority of India initiative. All rights reserved.

## 📞 Support

For technical support or questions about the KHEL SAARTHI platform, please contact the development team.

---

**Built with ❤️ for Indian Sports Excellence**

## Next Steps
- Implement navigation between screens
- Add mobile meta tags and PWA support
- Connect to backend APIs (future)
- Replace placeholder content with real UI and logic
