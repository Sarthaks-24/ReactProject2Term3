# LUXE STORE — Premium E-Commerce Experience

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

**Luxe Store** is a high-performance, aesthetically curated e-commerce browsing experience built with React 19 and Tailwind CSS v4. It features a sophisticated "Earth-tone" design system, optimized data fetching, and a seamless shopping journey from discovery to checkout.

---

## ✨ Key Features

### 🛍️ Product Exploration
- **Luxe Catalogue**: A responsive grid layout (4 cols desktop) displaying premium products with high-quality imagery and localized pricing.
- **Dynamic Search**: High-performance searching with **Debounce** optimization to ensure smooth re-renders while typing.
- **Smart Category Navigation**: Primary navigation via aesthetic **Top Tabs** and a simplified Sidebar for a focused experience.
- **Advanced Sorting**: Sort results by Price (Low/High), Rating (Highest), and **Newest Arrivals**.

### 💎 User Experience
- **Interactive Details**: A beautiful product page featuring a **Swiper.js image gallery** with thumbnail navigation.
- **Seamless State**: Global state management for both **Cart** and **Wishlist** using the React Context API.
- **Premium Animations**: Fluid transitions and micro-interactions powered by **Framer Motion**.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.

### 💳 Cart & Checkout
- **Bag Management**: Add, remove, and update quantities with real-time total calculations.
- **Secure Checkout**: Specialized order summary with Subtotal, Tax breakdown, and **Yup-validated** shipping/payment forms.

---

## 🛠️ Technology Stack

- **Core**: React 19 (Hooks, Context API, Suspense/Lazy)
- **Bundler**: Vite 8 (HMR enabled)
- **Styling**: Tailwind CSS v4 (Custom theme + Glassmorphism)
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Yup
- **Iconography**: React Icons (Feather / Lucide)
- **Notifications**: React Toastify

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/GLADIATOR-CODING/React-Project-2.git
   ```
2. Navigate to the project directory:
   ```bash
   cd React-Project-2
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🏗️ Folder Structure

```text
src/
├── components/   # Reusable UI (Navbar, ProductCard, Filters, etc.)
├── context/      # Global state (Cart, Wishlist)
├── hooks/        # Custom logic (useProducts, useDebounce, etc.)
├── pages/        # Route components (Home, Products, Checkout)
├── services/     # API integration (Axios)
└── utils/        # Formatting and helper functions
```

---

## ⚖️ License
This project was developed for academic/portfolio purposes. Use it freely for education and inspiration.

---
*Created with ❤️*
