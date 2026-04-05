import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import { useWishlist } from './WishlistContext';
import { useCart } from '../cart/CartContext';
import { formatPrice } from '../../shared/formatCurrency';

const WishlistPage = () => {
  const { wishlistItems, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-3">
        <h1 className="text-3xl font-bold text-slate-900">Wishlist is empty</h1>
        <p className="text-sm text-slate-600">Save products you want to buy later.</p>
        <Link className="inline-flex w-fit rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800" to="/products">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-4">
      <h1 className="text-3xl font-bold text-slate-900">Wishlist</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {wishlistItems.map((item) => (
          <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-3">
            <img src={item.thumbnail} alt={item.title} className="h-[180px] w-full rounded-md object-cover" />
            <div className="mt-2 grid gap-2">
              <p className="text-xs capitalize text-slate-500">{item.category}</p>
              <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">{item.title}</h3>
              <strong>{formatPrice(item.price)}</strong>
              <div className="flex items-center justify-between gap-2">
                <button className="inline-flex rounded-lg bg-teal-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-teal-800" onClick={() => addToCart(item)}>Add to cart</button>
                <button className="inline-flex rounded border border-slate-200 p-1.5 text-slate-600 hover:bg-slate-100" onClick={() => toggleWishlist(item)}><FiTrash2 /></button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
