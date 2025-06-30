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
}
type BackgroundType = 'solid' | 'gold-gradient' | 'overlay-gradient';

export interface ICardProps {
  title: string;
  listItems: string[];
  listTextColor?: string;
  backgroundType: BackgroundType;
  backgroundColor?: string;
  textColor: string;
  buttonBackgroundType: BackgroundType;
  buttonBackgroundColor?: string;
  buttonTextColor: string;
  borderColor: string;
  shadow?: string;
  width?: string;
  height?: string;
  opacity?: number;
  buttonWidth?: string;
  buttonHeight?: string;
  buttonFontSize?: string;
  layout?: string;
  price?: string;
  buttonText?: string;
}
