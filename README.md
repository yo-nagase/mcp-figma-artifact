# Jane's Profile Page - Next.js

A modern, responsive mobile profile page built with Next.js from a Figma design. This project demonstrates pixel-perfect implementation of a social media profile interface with interactive React components and smooth animations.

## 🎨 Design Source

This page was built based on the Figma design: [Figma Basics - Profile Design](https://www.figma.com/design/KU2AAKOOvsuap7PRgJRa6v/Figma-Basics?node-id=325-2&t=RjKLNhsAE1vtZx5u-4)

## ✨ Features

### 📱 Mobile-First Design
- **375px viewport optimized** - Designed specifically for mobile devices
- **Responsive layout** - Adapts to different screen sizes
- **Native mobile feel** - Includes status bar and tab navigation

### ⚛️ React Components
- **Modular architecture** - Reusable React components
- **Next.js optimization** - Image optimization and performance
- **React Hooks** - Modern state management with useState and useEffect
- **Component separation** - Clean component structure
- **Multi-page support** - Profile and Chat pages with routing

### 🎯 Interactive Elements
- **Tab Navigation** - 5 interactive tabs (Home, Search, Upload, Chat, Profile)
- **Action Buttons** - Follow/Unfollow and Message functionality
- **Gallery Interaction** - Clickable image gallery with modal view
- **See More Button** - Simulated loading states
- **Chat Interface** - Individual chat page with message history
- **Page Navigation** - Seamless routing between profile and chat

### 🌟 Modern UX Features
- **Haptic Feedback** - Visual and vibration feedback on interactions
- **Real-time Updates** - Live time display and battery indicator
- **Smooth Animations** - CSS transitions and keyframe animations
- **Image Modal** - Full-screen image viewing with counter
- **Toast Notifications** - User feedback for actions
- **Auto-hide Navigation** - Bars hide/show on scroll

### 🎨 Design Details
- **Pixel-perfect fonts** - Comfortaa, Roboto, and SF Pro Text
- **Exact colors** - Matches Figma color specifications
- **Precise layout** - CSS Grid and Flexbox for exact positioning
- **Custom icons** - Pure CSS recreations of Figma icons
- **Gradient effects** - Linear gradients matching design

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17.0 or higher
- npm or yarn package manager

### Installation

1. **Install dependencies**
```bash
npm install
# or
yarn install
```

2. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

3. **Open in browser**
   - Visit [http://localhost:3000](http://localhost:3000)
   - Use mobile view (375px width) for the best experience

### Production Build

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
├── pages/
│   ├── _app.js              # Next.js App component with global styles
│   ├── index.js             # Main profile page
│   └── chat.js              # Individual chat page
├── components/
│   ├── StatusBar.js         # Mobile status bar component
│   ├── ProfileHeader.js     # Profile image, name, and location
│   ├── ActionButtons.js     # Follow and message buttons
│   ├── Gallery.js           # Image gallery grid
│   ├── TabBar.js            # Navigation tab bar
│   ├── Modal.js             # Image modal viewer
│   ├── Notification.js      # Toast notification component
│   ├── ChatHeader.js        # Chat page header with back navigation
│   └── ChatMessages.js      # Chat messages display component
├── styles/
│   └── globals.css          # Global styles and animations
├── public/
│   └── images/              # Gallery, profile and chat images
│       ├── profile-image.png
│       ├── gallery-1.png
│       ├── gallery-2.png
│       ├── gallery-3.png
│       ├── gallery-4.png
│       ├── gallery-5.png
│       ├── gallery-6.png
│       ├── chat-avatar-1.png
│       └── chat-avatar-2.png
├── package.json             # Dependencies and scripts
├── next.config.js           # Next.js configuration
└── README.md                # This file
```

## 🛠 Technical Implementation

### Next.js Features
- **Image Optimization** - Automatic image optimization with next/image
- **React 18** - Latest React features and improvements
- **TypeScript Ready** - TypeScript support configured
- **Performance** - Built-in performance optimizations

### React Components
- **Functional Components** - Modern React with hooks
- **State Management** - useState for component state
- **Side Effects** - useEffect for DOM interactions
- **Refs** - useRef for direct DOM access
- **Props** - Clean component interfaces

### CSS Features
- **Global Styles** - Consistent styling across components
- **CSS Modules Ready** - Easy to migrate to CSS modules
- **Responsive Design** - Mobile-first approach
- **Animations** - Smooth transitions and loading effects

## 📱 Component Details

### StatusBar
- Real-time clock updates
- Simulated battery level with color coding
- Signal and WiFi indicators
- Auto-hide on scroll

### ProfileHeader
- Optimized profile image with Next.js Image
- Typography matching Figma design
- Centered layout

### ActionButtons
- Follow/Unfollow state management
- Visual feedback on interactions
- Haptic feedback support

### Gallery
- CSS Grid layout with proper aspect ratios
- Click to open modal
- Staggered animations
- Next.js Image optimization

### TabBar
- 5 navigation tabs with custom icons
- Active state management
- Special styling for upload tab
- Auto-hide functionality

### Modal
- Full-screen image viewing
- Keyboard navigation (ESC to close)
- Click outside to close
- Image counter

## 🎮 Interactions

### Button Actions
- **Follow Button** - Toggles between "follow jane" and "following"
- **Message Button** - Shows notification (placeholder)
- **See More** - Simulates loading with disabled state

### Gallery
- **Click to View** - Opens full-screen modal
- **Image Counter** - Shows current image position
- **Close Options** - Click outside, close button, or ESC key
- **Hover Effects** - Subtle scale animation

### Tab Navigation
- **Home** - Navigates to profile page
- **Search** - Shows search notification
- **Upload** - Shows camera notification
- **Chat** - Navigates to chat page
- **Profile** - Shows settings notification

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components

1. Create component in `components/` directory
2. Import and use in pages or other components
3. Add any specific styles to `globals.css`

### Customization

- **Colors** - Update CSS variables in `globals.css`
- **Images** - Replace images in `public/images/`
- **Content** - Update component props and data
- **Fonts** - Modify Google Fonts import in `_app.js`

## 🌐 Browser Support

- **Modern Browsers** - Chrome, Firefox, Safari, Edge
- **Next.js Support** - Latest browser support with polyfills
- **Mobile Browsers** - Optimized for mobile experience
- **Performance** - Excellent Lighthouse scores

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- **Netlify** - Static export support
- **AWS** - Serverless deployment
- **Docker** - Containerized deployment

## 📊 Performance

- **Image Optimization** - Automatic WebP conversion
- **Code Splitting** - Automatic route-based splitting
- **Bundle Analysis** - Built-in bundle analyzer
- **SEO Ready** - Meta tags and proper structure

## 🎯 Use Cases

- **Portfolio Showcase** - Personal branding and work display
- **Social Media Prototype** - App design validation
- **Learning Project** - Next.js, React, and modern web development
- **Design Implementation** - Figma to code workflow
- **Component Library** - Reusable mobile UI components

## 🔗 Links

- **Original Figma Design**: [View on Figma](https://www.figma.com/design/KU2AAKOOvsuap7PRgJRa6v/Figma-Basics?node-id=325-2&t=RjKLNhsAE1vtZx5u-4)
- **Next.js Documentation**: [nextjs.org](https://nextjs.org/docs)
- **React Documentation**: [react.dev](https://react.dev)

## 📄 License

This project is created for educational and demonstration purposes. Feel free to use and modify as needed.

---

**Built with ❤️ using Next.js and React from Figma design to pixel-perfect code** 