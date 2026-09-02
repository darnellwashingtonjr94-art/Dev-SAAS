import { auth, signOut } from '@/auth';

export default async function UserNav() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-700">
        {session.user.email}
      </span>
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/' });
        }}
      >
        <button
          type="submit"
          className="text-sm font-semibold text-red-600 hover:text-red-500"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}
