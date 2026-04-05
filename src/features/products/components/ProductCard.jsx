import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { useCart } from '../../cart/CartContext';
import { useWishlist } from '../../wishlist/WishlistContext';
import { formatPrice } from '../../../shared/formatCurrency';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(product.id);

  return (
    <article className="relative rounded-xl border border-slate-200 bg-white p-3">
      <button
        className="absolute right-6 top-6 rounded-lg border border-slate-200 bg-white/90 p-1.5"
        onClick={() => toggleWishlist(product)}
      >
        <FiHeart className={liked ? 'text-rose-600' : 'text-slate-600'} />
      </button>

      <Link to={`/products/${product.id}`} className="block rounded-lg bg-slate-50 p-2">
        <img src={product.thumbnail} alt={product.title} className="h-[180px] w-full rounded-md object-cover" />
      </Link>

      <div className="mt-2 grid gap-2">
        <p className="text-xs capitalize text-slate-500">{product.category}</p>
        <Link to={`/products/${product.id}`} className="line-clamp-2 text-sm font-semibold text-slate-900">{product.title}</Link>
        <p className="inline-flex items-center gap-1 text-sm text-slate-500"><FiStar /> {product.rating}</p>

        <div className="flex items-center justify-between gap-2">
          <strong>{formatPrice(product.price)}</strong>
          <button
            className="inline-flex items-center gap-1 rounded-lg bg-teal-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-teal-800"
            onClick={() => addToCart(product)}
          >
            <FiShoppingCart /> Add
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
