import Link from 'next/link';

import { Button } from '@/components/Button/button';
import { navigationItems } from '@/components/Navbar/data';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const MobileMenu = ({ className }: { className?: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className} />
      </DialogTrigger>
      <DialogContent className='w-full h-full m-0 p-5 bg-primary border-none max-w-full max-h-full'>
        <DialogHeader>
          <DialogTitle className='invisible'>Mobile Menu</DialogTitle>
          <DialogDescription></DialogDescription>
          <DialogClose asChild>
            <Button className='cross-button' />
          </DialogClose>
        </DialogHeader>
        <ul className='flex flex-col size-full items-center justify-between gap-px xl:gap-8'>
          {navigationItems.map((item) => (
            <li
              className='font-monda flex size-full active:text-opacity-70 hover:text-opacity-70'
              key={item.id}
            >
              <DialogClose asChild>
                <Link
                  href={item.href}
                  className='flex size-full items-center justify-center text-center text-xl font-bold text-primary-foreground'
                >
                  {item.label}
                </Link>
              </DialogClose>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};
