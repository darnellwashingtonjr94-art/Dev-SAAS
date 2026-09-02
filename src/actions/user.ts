'use server';

import { auth } from '@/auth';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function updateProfile(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Unauthorized');

  const name = formData.get('name') as string;

  if (typeof name !== 'string' || name.length < 2) {
    throw new Error('Name is required and must be at least 2 characters');
  }

  await db.user.update({
    where: { id: session.user.id },
    data: { name },
  });

  revalidatePath('/dashboard/settings');
  return { success: true };
}
