import { IGradientDefinition } from '@/components/Cards/types';

export const GRADIENTS: Record<string, IGradientDefinition> = {
  goldBase: {
    x1: '15.6361',
    y1: '335.861',
    x2: '280.459',
    y2: '304.323',
    stops: [
      { offset: '0%', color: '#576265' },
      { offset: '17.2%', color: '#9EA1A1' },
      { offset: '45.74%', color: '#848B8A' },
      { offset: '55.36%', color: '#576265' },
      { offset: '82.34%', color: '#576265' },
      { offset: '92.52%', color: '#757A7B' },
      { offset: '100%', color: '#576265' },
    ],
  },
  goldOverlay: {
    x1: '109.48',
    y1: '268.5',
    x2: '-44.6034',
    y2: '64.0731',
    stops: [
      { offset: '0%', color: 'white', opacity: '0' },
      { offset: '100%', color: 'white', opacity: '1' },
    ],
  },
  overlayFill: {
    x1: '0%',
    y1: '0%',
    x2: '0%',
    y2: '100%',
    stops: [
      { offset: '0%', color: '#F8F7F5', opacity: '0.02' },
      { offset: '100%', color: '#737373', opacity: '0' },
    ],
  },
};
