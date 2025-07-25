import * as React from 'react';

import { cn } from '@/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, title, id, error, ...props }, ref) => {
    return (
      <div className='flex flex-col gap-3 sm:gap-4'>
        {title && (
          <label
            htmlFor={id}
            className='font-mont text-lg md:text-xl text-primary-foreground'
          >
            {title}
          </label>
        )}
        <input
          type={type}
          className={cn(
            type !== 'file'
              ? 'flex h-11 w-full rounded-2xl bg-primary-foreground  px-3 py-1 text-base transition-colors font-mont placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-lg shadow-inner hover:bg-primary-foreground/80'
              : 'hidden',

            className
          )}
          id={id}
          ref={ref}
          {...props}
        />

        {type === 'file' && (
          <label
            htmlFor={id}
            className='w-48 flex items-center justify-center bg-secondary rounded-2xl text-lg font-mont font-semibold text-primary  input-shadow select-none cursor-pointer px-8 py-1 hover:bg-secondary/80 transition-colors'
          >
            Choose a file
          </label>
        )}
        {error && <p className='font-mont text-red-500 text-sm'>{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
