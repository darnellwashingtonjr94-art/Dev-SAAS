import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: Request) {
  // Secure the route: Vercel sends a specific authorization header with cron requests
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // Example task: Delete users who haven't verified their email in 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const result = await db.user.deleteMany({
      where: {
        emailVerified: null,
        createdAt: { lt: thirtyDaysAgo },
      },
    });

    return NextResponse.json({ success: true, deletedCount: result.count });
  } catch (error) {
    console.error('CRON_ERROR', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
