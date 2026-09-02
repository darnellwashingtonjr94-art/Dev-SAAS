import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    // Ping the database to ensure connection is alive
    await db.$queryRaw`SELECT 1`;
    return NextResponse.json({ status: 'healthy', database: 'connected' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 'unhealthy', database: 'disconnected' }, { status: 503 });
  }
}
