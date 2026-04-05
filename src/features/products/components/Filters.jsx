const PRICE_OPTIONS = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under Rs. 5,000', min: 0, max: 60 },
  { label: 'Rs. 5,000 - Rs. 20,000', min: 60, max: 240 },
  { label: 'Rs. 20,000+', min: 240, max: Infinity },
];

const SORT_OPTIONS = [
  { label: 'Default', value: 'default' },
  { label: 'Price low to high', value: 'priceLowHigh' },
  { label: 'Price high to low', value: 'priceHighLow' },
  { label: 'Rating', value: 'rating' },
];

const Filters = ({ selectedPrice, setSelectedPrice, sortBy, setSortBy }) => {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="text-lg font-semibold text-slate-900">Filters</h3>

      <label className="mb-1 mt-4 block text-sm font-medium text-slate-700" htmlFor="sort-select">Sort by</label>
      <select
        id="sort-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-teal-300"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>

      <p className="mb-2 mt-4 block text-sm font-medium text-slate-700">Price range</p>
      <div className="grid gap-2">
        {PRICE_OPTIONS.map((option) => (
          <label key={option.label} className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="radio"
              name="price"
              checked={selectedPrice.label === option.label}
              onChange={() => setSelectedPrice(option)}
              className="h-4 w-4 accent-teal-700"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Filters;
