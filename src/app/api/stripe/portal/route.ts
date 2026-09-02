import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { stripe } from '@/lib/stripe';
import { db } from '@/lib/db';

export async function POST() {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // You would typically store the stripeCustomerId on the User model
    const user = await db.user.findUnique({
      where: { id: session.user.id },
      select: { stripeCustomerId: true }, // Ensure this exists in schema.prisma
    });

    if (!user?.stripeCustomerId) {
      return new NextResponse('No active subscription found', { status: 400 });
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing`,
    });

    return NextResponse.json({ url: portalSession.url });
  } catch (error) {
    console.error('STRIPE_PORTAL_ERROR', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
