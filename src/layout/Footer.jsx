import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] grid-cols-1 gap-6 py-8 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-lg font-bold text-teal-700">SimpleStore</h3>
          <p className="text-sm text-slate-600">A beginner friendly React shopping app.</p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">Quick Links</h4>
          <ul className="space-y-1 text-sm text-slate-700">
            <li><Link to="/" className="hover:text-teal-700">Home</Link></li>
            <li><Link to="/products" className="hover:text-teal-700">Products</Link></li>
            <li><Link to="/wishlist" className="hover:text-teal-700">Wishlist</Link></li>
            <li><Link to="/cart" className="hover:text-teal-700">Cart</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">Contact</h4>
          <p className="text-sm text-slate-700">Email: support@simplestore.dev</p>
          <p className="text-sm text-slate-700">Phone: +91-90000-00000</p>
        </div>
      </div>
      <p className="pb-4 text-center text-xs text-slate-500">Copyright {new Date().getFullYear()} SimpleStore</p>
    </footer>
  );
};

export default Footer;
