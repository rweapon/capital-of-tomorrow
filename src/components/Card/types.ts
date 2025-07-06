export interface IGradientStop {
  offset: string;
  color: string;
  opacity?: string;
}

export interface IGradientDefinition {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  stops: IGradientStop[];
}

export interface IGradientProps {
  id: string;
  gradient: IGradientDefinition;
  units?: string;
}
export interface IPartnershipTier {
  title: string;
  listItems: string[];
  price: string;
  link: string;
}

export type BackgroundType = 'solid' | 'gold-gradient' | 'overlay-gradient';
