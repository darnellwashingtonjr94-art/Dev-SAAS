import { auth } from '@/auth';

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-2">Welcome back, {session?.user?.name}!</h2>
        <p className="text-gray-600">
          This is your private dashboard. Your email is logged as {session?.user?.email}.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Placeholder cards for SaaS metrics */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-32"></div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-32"></div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-32"></div>
      </div>
    </div>
  );
}
