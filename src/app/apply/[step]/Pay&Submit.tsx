'use client';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components';

const PayAndSubmit = () => {
  return (
    <Link href='/'>
      <Button
        className='font-semibold !text-xl p-3 md:p-5 lg:py-5 lg:px-14'
        onClick={() => alert('Thank you for applying!')}
      >
        Pay & submit
      </Button>
    </Link>
  );
};

export default PayAndSubmit;
