import * as React from 'react';

import { cn } from '@/lib/utils';

interface TextAreaProps extends React.ComponentProps<'textarea'> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, title, id, error, ...props }, ref) => {
    return (
      <div className='flex flex-col gap-4'>
        {title && (
          <label
            htmlFor={id}
            className='font-mont text-xl text-primary-foreground'
          >
            {title}
          </label>
        )}
        <textarea
          className={cn(
            'flex min-h-52 w-full rounded-2xl bg-primary-foreground px-4 py-3 text-base shadow-inner transition-colors font-mont first-letter:placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-lg hover:bg-primary-foreground/80',
            className
          )}
          id={id}
          ref={ref}
          {...props}
        />
        {error && <p className='font-mont text-red-500 text-sm'>{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
