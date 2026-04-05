export const formatPrice = (priceUSD) => {
  const priceInr = Math.round(priceUSD * 83);
  return `Rs. ${priceInr.toLocaleString('en-IN')}`;
};

export default formatPrice;
