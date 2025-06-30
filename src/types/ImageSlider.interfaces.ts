export interface ISlide {
  id: number;
  src: string;
  alt: string;
}

export interface ISliderStyles {
  container: React.CSSProperties;
  swiper: React.CSSProperties;
  slide: (isActive: boolean) => React.CSSProperties;
  slideButton: React.CSSProperties;
}
