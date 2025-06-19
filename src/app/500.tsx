'use client';
import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">500</h1>
      <p className="mb-8 text-xl">Server-side error occurred</p>

      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  );
}
