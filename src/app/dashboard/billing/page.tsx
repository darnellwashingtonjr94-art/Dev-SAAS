import { auth } from '@/auth';
import PricingCard from '@/components/pricing-card';

export default async function BillingPage() {
  const session = await auth();

  // In a real app, query your DB here to check if the user is already subscribed.
  const isSubscribed = false; 

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Billing & Subscription</h1>
      
      {isSubscribed ? (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Current Plan: Pro</h2>
          <p className="text-gray-600 mb-4">Your subscription renews on Oct 1st.</p>
          <form action="/api/stripe/portal" method="POST">
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800">
              Manage Subscription
            </button>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mt-8">
          <PricingCard 
            title="Hobby" 
            price="$0" 
            features={['Basic features', 'Community support']} 
            priceId="" 
          />
          <PricingCard 
            title="Pro" 
            price="$15/mo" 
            features={['Advanced features', 'Priority support', 'Unlimited usage']} 
            priceId="price_123abc..." // Replace with actual Stripe Price ID
            isPopular
          />
        </div>
      )}
    </div>
  );
}
