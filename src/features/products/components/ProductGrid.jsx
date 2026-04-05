import ProductCard from './ProductCard';

const ProductGrid = ({ products, loading }) => {
  if (loading) {
    return <p className="text-sm text-slate-500">Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className="text-sm text-slate-500">No products found. Try another filter.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
