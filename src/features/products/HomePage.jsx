import { Link } from 'react-router-dom';
import ProductGrid from './components/ProductGrid';
import { useProducts } from './hooks/useProducts';

const HomePage = () => {
  const { products, loading } = useProducts();
  const featured = products.slice(0, 4);

  return (
    <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-6">
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-teal-50 p-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-900 md:text-4xl">Welcome to SimpleStore</h1>
        <p className="mb-4 text-slate-600">Explore products, add items to cart, and complete checkout in a simple React app.</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-800"
        >
          Shop now
        </Link>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between gap-2">
          <h2 className="text-2xl font-semibold text-slate-900">Featured Products</h2>
          <Link to="/products" className="text-sm font-medium text-teal-700 hover:text-teal-800">View all</Link>
        </div>
        <ProductGrid products={featured} loading={loading} />
      </section>
    </div>
  );
};

export default HomePage;
