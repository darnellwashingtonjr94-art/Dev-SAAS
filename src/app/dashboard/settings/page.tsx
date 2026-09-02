import { auth } from '@/auth';
import { updateProfile } from '@/actions/user';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Account Settings</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
        <form action={updateProfile} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (Read Only)</label>
            <Input id="email" type="email" value={session?.user?.email || ''} disabled />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
            <Input id="name" name="name" type="text" defaultValue={session?.user?.name || ''} required />
          </div>
          <div className="pt-2">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
