import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { formatPrice } from '../../shared/formatCurrency';

const initialForm = {
  fullName: '',
  email: '',
  city: '',
  address: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
};

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-3">
        <h1 className="text-3xl font-bold text-slate-900">Order placed successfully</h1>
        <p className="text-sm text-slate-600">Thanks for your order.</p>
        <Link className="inline-flex w-fit rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800" to="/">Back home</Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-3">
        <h1 className="text-3xl font-bold text-slate-900">No items to checkout</h1>
        <button className="inline-flex w-fit rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800" onClick={() => navigate('/products')}>Browse products</button>
      </div>
    );
  }

  const tax = cartTotal * 0.1;
  const total = cartTotal + tax;

  const validate = () => {
    const nextErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required';
    if (!form.email.includes('@')) nextErrors.email = 'Valid email is required';
    if (!form.city.trim()) nextErrors.city = 'City is required';
    if (!form.address.trim()) nextErrors.address = 'Address is required';
    if (!/^\d{16}$/.test(form.cardNumber)) nextErrors.cardNumber = 'Card number must be 16 digits';
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiry)) nextErrors.expiry = 'Use MM/YY format';
    if (!/^\d{3}$/.test(form.cvv)) nextErrors.cvv = 'CVV must be 3 digits';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    clearCart();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-4">
      <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <form onSubmit={handleSubmit} className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="text-xl font-semibold text-slate-900">Delivery and payment</h2>

          <label className="grid gap-1 text-sm font-medium text-slate-700">
            Full name
            <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-300" name="fullName" value={form.fullName} onChange={handleChange} />
            {errors.fullName && <small className="text-xs text-rose-600">{errors.fullName}</small>}
          </label>

          <label className="grid gap-1 text-sm font-medium text-slate-700">
            Email
            <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-300" name="email" value={form.email} onChange={handleChange} />
            {errors.email && <small className="text-xs text-rose-600">{errors.email}</small>}
          </label>

          <label className="grid gap-1 text-sm font-medium text-slate-700">
            City
            <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-300" name="city" value={form.city} onChange={handleChange} />
            {errors.city && <small className="text-xs text-rose-600">{errors.city}</small>}
          </label>

          <label className="grid gap-1 text-sm font-medium text-slate-700">
            Address
            <textarea className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-300" name="address" value={form.address} onChange={handleChange} rows="3" />
            {errors.address && <small className="text-xs text-rose-600">{errors.address}</small>}
          </label>

          <label className="grid gap-1 text-sm font-medium text-slate-700">
            Card number
            <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-300" name="cardNumber" value={form.cardNumber} onChange={handleChange} placeholder="16 digits" />
            {errors.cardNumber && <small className="text-xs text-rose-600">{errors.cardNumber}</small>}
          </label>

          <label className="grid gap-1 text-sm font-medium text-slate-700">
            Expiry (MM/YY)
            <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-300" name="expiry" value={form.expiry} onChange={handleChange} placeholder="MM/YY" />
            {errors.expiry && <small className="text-xs text-rose-600">{errors.expiry}</small>}
          </label>

          <label className="grid gap-1 text-sm font-medium text-slate-700">
            CVV
            <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-300" name="cvv" value={form.cvv} onChange={handleChange} placeholder="3 digits" />
            {errors.cvv && <small className="text-xs text-rose-600">{errors.cvv}</small>}
          </label>

          <button className="inline-flex w-fit rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800" type="submit">Place order</button>
        </form>

        <aside className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="mb-3 text-xl font-semibold text-slate-900">Summary</h2>
          {cartItems.map((item) => (
            <p key={item.id} className="flex justify-between gap-2 text-sm text-slate-700"><span>{item.title} x {item.quantity}</span><b>{formatPrice(item.price * item.quantity)}</b></p>
          ))}
          <p className="mt-3 flex justify-between gap-2 text-sm text-slate-700"><span>Subtotal</span><b>{formatPrice(cartTotal)}</b></p>
          <p className="mt-2 flex justify-between gap-2 text-sm text-slate-700"><span>Tax (10%)</span><b>{formatPrice(tax)}</b></p>
          <p className="mt-3 flex justify-between gap-2 border-t border-slate-200 pt-3 font-semibold text-slate-900"><span>Total</span><b>{formatPrice(total)}</b></p>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
