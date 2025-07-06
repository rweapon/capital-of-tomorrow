import React from 'react';

import {
  blockContent,
  blockStyles,
  gradientBorderStyles,
} from '@/components/SimpleTextBlocks/data';
import { IBlockProps } from '@/components/SimpleTextBlocks/types';

function Block({ text, size = 'small', className = '' }: IBlockProps) {
  const isLarge = size === 'large';
  const textClasses = isLarge
    ? 'text-white font-akira font-bold text-center leading-tight text-lg md:text-xl xl:text-2xl'
    : 'text-white font-mont text-center leading-tight text-sm';

  return (
    <div className={`group relative cursor-pointer ${className}`}>
      <div
        className='pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 group-hover:opacity-0'
        style={gradientBorderStyles}
      />
      <div
        className='absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        style={{
          background: `
            linear-gradient(45deg, 
              #1f2937 0%, 
              #6b7280 25%, 
              #d1d5db 50%, 
              #6b7280 75%, 
              #1f2937 100%
            )
          `,
          backgroundSize: '400% 400%',
          animation: 'gradient-flow 3s ease infinite',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '2px',
        }}
      />
      <div
        className='relative z-10 flex size-full items-center justify-center rounded-3xl p-4'
        style={blockStyles}
      >
        {isLarge ? (
          <h2 className={textClasses}>{text}</h2>
        ) : (
          <p className={textClasses}>{text}</p>
        )}
      </div>
    </div>
  );
}

export function SimpleTextBlocks() {
  return (
    <div className='w-full'>
      <div className='mx-auto max-w-7xl space-y-4 md:space-y-6 xl:space-y-0'>
        <div className='hidden items-center gap-2.5 xl:flex'>
          <Block
            text={blockContent.largeBlocks[0]}
            size='large'
            className='h-[201px] w-[409px]'
          />

          <div className='grid max-w-[480px] flex-1 grid-cols-2 gap-2.5'>
            {blockContent.smallBlocks.map((text, index) => (
              <Block key={index} text={text} className='h-24 w-full' />
            ))}
          </div>

          <Block
            text={blockContent.largeBlocks[1]}
            size='large'
            className='h-[201px] w-[409px]'
          />
        </div>

        <div className='hidden lg:block xl:hidden'>
          <div className='grid grid-cols-2 gap-2.5'>
            {blockContent.largeBlocks.map((text, index) => (
              <Block key={index} text={text} size='large' className='h-40' />
            ))}
          </div>

          <div className='mt-2.5 grid grid-cols-2 gap-2.5'>
            {blockContent.smallBlocks.map((text, index) => (
              <Block key={index} text={text} className='h-20' />
            ))}
          </div>
        </div>

        <div className='hidden md:block lg:hidden'>
          <div className='grid grid-cols-2 gap-2.5'>
            {blockContent.largeBlocks.map((text, index) => (
              <Block key={index} text={text} size='large' className='h-36' />
            ))}
          </div>

          <div className='mt-2.5 grid grid-cols-2 gap-2.5'>
            {blockContent.smallBlocks.map((text, index) => (
              <Block key={index} text={text} className='h-20' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
