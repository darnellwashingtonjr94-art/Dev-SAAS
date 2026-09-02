'use client';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  priceId: string;
  isPopular?: boolean;
}

export default function PricingCard({ title, price, features, priceId, isPopular }: PricingCardProps) {
  const handleCheckout = async () => {
    if (!priceId) return; // Free plan logic
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      body: JSON.stringify({ priceId }),
      headers: { 'Content-Type': 'application/json' },
    });
    const { url } = await res.json();
    if (url) window.location.href = url;
  };

  return (
    <div className={`relative flex flex-col p-6 bg-white rounded-xl shadow-sm border ${isPopular ? 'border-blue-600' : 'border-gray-200'}`}>
      {isPopular && <span className="absolute top-0 right-6 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-full">Most Popular</span>}
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4 text-4xl font-extrabold">{price}</div>
      <ul className="mt-6 space-y-4 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-600 text-sm">
            <span className="mr-3 text-green-500">✓</span> {feature}
          </li>
        ))}
      </ul>
      <button 
        onClick={handleCheckout}
        className={`mt-8 w-full py-3 rounded-md font-semibold text-sm transition-colors ${
          isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {priceId ? 'Upgrade Now' : 'Get Started'}
      </button>
    </div>
  );
}
