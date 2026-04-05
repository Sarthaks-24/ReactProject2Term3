import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiBox, FiHeart, FiHome, FiMenu, FiSearch, FiShoppingCart, FiX } from 'react-icons/fi';
import { useCart } from '../features/cart/CartContext';
import { useWishlist } from '../features/wishlist/WishlistContext';

const links = [
  { label: 'Home', to: '/', icon: <FiHome /> },
  { label: 'Products', to: '/products', icon: <FiBox /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { cartCount } = useCart();
  const { wishlistItems } = useWishlist();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (value) => {
    setSearch(value);
    navigate(`/products?q=${encodeURIComponent(value)}`);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex min-h-[72px] w-[min(1100px,calc(100%-2rem))] items-center gap-3">
        <Link to="/" className="text-xl font-extrabold tracking-tight text-teal-700">SimpleStore</Link>

        <div className="hidden md:flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
          <FiSearch className="text-slate-500" />
          <input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search products"
            className="min-w-[200px] bg-transparent text-sm outline-none"
          />
        </div>

        <nav className="ml-auto hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                location.pathname === link.to
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/wishlist"
            className="relative inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Wishlist"
          >
            <FiHeart />
            {wishlistItems.length > 0 && (
              <b className="absolute -right-1.5 -top-1.5 rounded-full bg-teal-700 px-1.5 text-[11px] text-white">
                {wishlistItems.length}
              </b>
            )}
          </Link>
          <Link
            to="/cart"
            className="relative inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Cart"
          >
            <FiShoppingCart />
            {cartCount > 0 && (
              <b className="absolute -right-1.5 -top-1.5 rounded-full bg-teal-700 px-1.5 text-[11px] text-white">
                {cartCount}
              </b>
            )}
          </Link>
          <button
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-700 md:hidden"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white p-4 md:hidden">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
            <FiSearch className="text-slate-500" />
            <input
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search products"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
          <nav className="mt-3 grid gap-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
