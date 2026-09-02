import type { Metadata } from 'next';
import './globals.css'; // Assuming Tailwind is configured here

export const metadata: Metadata = {
  title: 'Dev SaaS',
  description: 'A scalable developer tool SaaS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
