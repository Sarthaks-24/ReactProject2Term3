import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartProvider } from './features/cart/CartContext';
import { WishlistProvider } from './features/wishlist/WishlistContext';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import HomePage from './features/products/HomePage';
import ProductsPage from './features/products/ProductsPage';
import ProductDetailsPage from './features/products/ProductDetailsPage';
import CartPage from './features/cart/CartPage';
import WishlistPage from './features/wishlist/WishlistPage';
import CheckoutPage from './features/cart/CheckoutPage';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
            <Navbar />

            <main className="flex-1 py-6 md:py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </main>

            <Footer />
          </div>

          <ToastContainer
            position="bottom-right"
            autoClose={2200}
            theme="light"
          />
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
