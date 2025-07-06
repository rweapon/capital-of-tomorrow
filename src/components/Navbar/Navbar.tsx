import Link from 'next/link';

import { navigationItems } from '@/components/Navbar/data';

export const Navbar = () => {
  return (
    <header className='relative justify-betwen flex w-full flex-col items-center lg:px-12 xl:px-24'>
      <nav className='h-16 w-full border-b border-[#F8F7F5]/50 '>
        <ul className='shrink-1 flex size-full items-center justify-between gap-x-px xl:gap-x-8'>
          {navigationItems.map((item) => (
            <li className='font-monda flex size-full' key={item.id}>
              <Link
                href={item.href}
                className='flex size-full items-center justify-center text-center text-xs font-bold tracking-[-0.96px] text-[#f8f7f5] hover:text-blue-500 xl:text-base'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
