import { Link, useNavigate } from 'react-router-dom';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from './CartContext';
import { formatPrice } from '../../shared/formatCurrency';

const CartPage = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-3">
        <h1 className="text-3xl font-bold text-slate-900">Your cart is empty</h1>
        <p className="text-sm text-slate-600">Add products to continue.</p>
        <Link to="/products" className="inline-flex w-fit rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800">Go to products</Link>
      </div>
    );
  }

  const tax = cartTotal * 0.1;
  const grandTotal = cartTotal + tax;

  return (
    <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-4">
      <h1 className="text-3xl font-bold text-slate-900">Cart</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <section className="rounded-xl border border-slate-200 bg-white p-4">
          {cartItems.map((item) => (
            <article key={item.id} className="grid grid-cols-[90px_1fr_auto] gap-3 border-b border-slate-200 py-3 last:border-b-0">
              <img src={item.thumbnail} alt={item.title} className="h-[90px] w-[90px] rounded-md object-cover" />
              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{formatPrice(item.price)}</p>
                <div className="mt-2 inline-flex items-center gap-2">
                  <button className="rounded border border-slate-200 p-1" onClick={() => updateQuantity(item.id, item.quantity - 1)}><FiMinus /></button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button className="rounded border border-slate-200 p-1" onClick={() => updateQuantity(item.id, item.quantity + 1)}><FiPlus /></button>
                </div>
              </div>
              <div className="text-right">
                <strong className="block">{formatPrice(item.price * item.quantity)}</strong>
                <button className="mt-2 inline-flex rounded border border-slate-200 p-1.5 text-slate-600 hover:bg-slate-100" onClick={() => removeFromCart(item.id)}><FiTrash2 /></button>
              </div>
            </article>
          ))}
        </section>

        <aside className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="mb-3 text-xl font-semibold text-slate-900">Order summary</h2>
          <p className="flex justify-between text-sm text-slate-700"><span>Subtotal</span><b>{formatPrice(cartTotal)}</b></p>
          <p className="mt-2 flex justify-between text-sm text-slate-700"><span>Tax (10%)</span><b>{formatPrice(tax)}</b></p>
          <p className="mt-3 flex justify-between border-t border-slate-200 pt-3 font-semibold text-slate-900"><span>Total</span><b>{formatPrice(grandTotal)}</b></p>
          <button className="mt-4 inline-flex w-full justify-center rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800" onClick={() => navigate('/checkout')}>Continue</button>
        </aside>
      </div>
    </div>
  );
};

export default CartPage;
