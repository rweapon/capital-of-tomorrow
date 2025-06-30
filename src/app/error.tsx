'use client'; // Error components must be Client Components

import { Link } from 'lucide-react';
import * as React from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main>
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <h1 className='mb-4 text-4xl font-bold'>500</h1>
        <p className='mb-8 text-xl'>Server-side error occurred</p>

        <Link href='/' className='mt-4 text-blue-500 hover:underline'>
          Return Home
        </Link>
      </div>
    </main>
  );
}
