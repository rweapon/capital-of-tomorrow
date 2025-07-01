export interface IStyleData {
  background: string;
  mask?: string;
  maskComposite?: string;
  WebkitMask?: string;
  WebkitMaskComposite?: string;
  padding?: string;
  boxShadow?: string;
}

export interface IBlockContent {
  smallBlocks: string[];
  largeBlocks: string[];
}

export interface IBlockProps {
  text: string;
  size?: 'small' | 'large';
  className?: string;
}
