export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6">
        Welcome to Dev-SaaS
      </h1>
      <p className="max-w-2xl text-lg text-gray-600 mb-8">
        The boilerplate is ready. Start building your product.
      </p>
      <div className="flex gap-4">
        <a 
          href="/dashboard" 
          className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
}
