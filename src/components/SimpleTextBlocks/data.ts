import { IBlockContent, IStyleData } from '@/components/SimpleTextBlocks/types';

export const gradientBorderStyles: IStyleData = {
  background: 'linear-gradient(to top left, #1f2937, #6b7280, #d1d5db)',
  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
  maskComposite: 'xor',
  WebkitMask:
    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
  WebkitMaskComposite: 'xor',
  padding: '2px',
};

export const blockStyles: IStyleData = {
  background: 'rgba(248, 247, 245, 0.05)',
  boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
};

export const blockContent: IBlockContent = {
  smallBlocks: [
    "You're seeking like-minded support",
    'You strive to make your business international',
    "You have an idea but don't know where to begin",
    'You crave freedom from the 9-to-5',
  ],
  largeBlocks: [
    'OUR FORUM IS DEFINITELY FOR YOU IF',
    'YOU WANT TO MASTER SELF-PRESENTATION AND BUSINESS SKILLS',
  ],
};
