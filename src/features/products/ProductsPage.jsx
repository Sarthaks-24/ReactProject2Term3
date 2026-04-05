import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import { useProducts } from './hooks/useProducts';
import { useDebounce } from '../../shared/useDebounce';

const DEFAULT_PRICE = { label: 'All', min: 0, max: Infinity };

const ProductsPage = () => {
  const { products, categories, loading, error } = useProducts();
  const [params] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState(DEFAULT_PRICE);
  const [sortBy, setSortBy] = useState('default');

  const search = params.get('q') || '';
  const debouncedSearch = useDebounce(search, 300);

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== 'all') {
      list = list.filter((item) => item.category === selectedCategory);
    }

    if (debouncedSearch) {
      const query = debouncedSearch.toLowerCase();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }

    list = list.filter((item) => item.price >= selectedPrice.min && item.price <= selectedPrice.max);

    if (sortBy === 'priceLowHigh') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'priceHighLow') list.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [products, selectedCategory, debouncedSearch, selectedPrice, sortBy]);

  return (
    <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-5">
      <section className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Products</h1>
          <p className="text-sm text-slate-600">Browse and filter products using simple controls.</p>
        </div>
      </section>

      {error && <p className="text-sm text-rose-600">{error}</p>}

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full border px-3 py-1.5 text-sm capitalize transition ${
              selectedCategory === category
                ? 'border-teal-200 bg-teal-50 text-teal-700'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[270px_1fr]">
        <Filters
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <div>
          <p className="mb-2 text-sm text-slate-500">{filteredProducts.length} result(s)</p>
          <ProductGrid products={filteredProducts} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
