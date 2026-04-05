# SimpleStore - Beginner-Friendly React E-Commerce App

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

SimpleStore is a clean and easy-to-understand e-commerce frontend built with React and Tailwind CSS. It is designed for students who are learning React basics such as components, state, props, context, routing, and simple form handling.

## Features

- Product listing with category filter, price filter, sort, and search
- Product details page with image selection
- Cart management with quantity updates and totals
- Wishlist management
- Checkout form with simple client-side validation
- Local persistence for cart and wishlist using localStorage

## Tech Stack

- React 19
- React Router
- Tailwind CSS v4
- Vite
- Axios
- React Toastify
- React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install and Run

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Current Project Structure

```text
src/
   features/
      cart/
         CartContext.jsx
         CartPage.jsx
         CheckoutPage.jsx
      products/
         components/
            Filters.jsx
            ProductCard.jsx
            ProductGrid.jsx
         hooks/
            useProducts.js
         HomePage.jsx
         ProductDetailsPage.jsx
         ProductsPage.jsx
      wishlist/
         WishlistContext.jsx
         WishlistPage.jsx
   layout/
      Footer.jsx
      Navbar.jsx
   shared/
      api.js
      formatCurrency.js
      useDebounce.js
   App.jsx
   index.css
   main.jsx
```

## Data and State Flow

- Product data is fetched from DummyJSON in shared API helpers.
- Product filtering and category logic live in the products feature hook.
- Global app state is split by feature:
   - Cart state in CartContext
   - Wishlist state in WishlistContext
- Cart and wishlist are saved to localStorage.

## Notes

- This repository includes a local-only learning document named howitworks.md.
- It is intentionally ignored through .gitignore and will not be committed.

## License

This project is for learning and academic use.
