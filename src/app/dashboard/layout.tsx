import { ReactNode } from 'react';
import UserNav from '@/components/user-nav';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Dev-SaaS</h2>
        <nav className="space-y-4 text-sm font-medium">
          <a href="/dashboard" className="block text-gray-300 hover:text-white">Overview</a>
          <a href="/dashboard/billing" className="block text-gray-300 hover:text-white">Billing</a>
          <a href="/dashboard/settings" className="block text-gray-300 hover:text-white">Settings</a>
        </nav>
      </aside>
      <main className="flex-1">
        <header className="bg-white shadow-sm h-16 flex items-center justify-end px-6 border-b">
          <UserNav />
        </header>
        <div className="p-8 max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
