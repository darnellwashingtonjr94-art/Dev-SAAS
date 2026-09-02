import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16', // Keep this pinned to your required version
  typescript: true,
  appInfo: {
    name: 'Dev-SaaS',
    version: '0.1.0',
  },
});
