import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../cart/CartContext';
import { useWishlist } from '../wishlist/WishlistContext';
import { productAPI } from '../../shared/api';
import { formatPrice } from '../../shared/formatCurrency';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const response = await productAPI.getProductById(id);
        setProduct(response.data);
      } catch (err) {
        console.error('Could not load product details', err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <div className="mx-auto w-[min(1100px,calc(100%-2rem))]"><p className="text-sm text-slate-500">Loading product...</p></div>;
  if (!product) return <div className="mx-auto w-[min(1100px,calc(100%-2rem))]"><p className="text-sm text-slate-500">Product not found.</p></div>;

  const liked = isInWishlist(product.id);

  return (
    <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-5">
      <button
        className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
        onClick={() => navigate(-1)}
      >
        <FiArrowLeft /> Back
      </button>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="rounded-xl border border-slate-200 bg-white p-2">
            <img
              src={product.images[activeImage] || product.thumbnail}
              alt={product.title}
              className="h-[320px] w-full rounded-lg object-contain"
            />
          </div>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveImage(index)}
                className={`rounded-lg border p-1 ${
                  activeImage === index ? 'border-teal-300' : 'border-slate-200'
                }`}
              >
                <img src={image} alt={`${product.title} ${index + 1}`} className="h-16 w-full rounded object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="mb-1 text-xs capitalize text-slate-500">{product.category}</p>
          <h1 className="text-2xl font-bold text-slate-900">{product.title}</h1>
          <p className="my-3 text-2xl font-bold text-teal-700">{formatPrice(product.price)}</p>
          <p className="text-sm text-slate-600">{product.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800"
              onClick={() => addToCart(product)}
            >
              <FiShoppingCart /> Add to cart
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
              onClick={() => toggleWishlist(product)}
            >
              <FiHeart className={liked ? 'text-rose-600' : ''} /> {liked ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
