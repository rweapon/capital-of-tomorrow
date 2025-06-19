import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <p className="mb-8 text-xl">Page Not Found</p>

      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  );
}
