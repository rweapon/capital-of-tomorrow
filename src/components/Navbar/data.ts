import {
  IButtonContent,
  IEventInfo,
  IHeroContent,
  INavigationItem,
} from '@/components/Navbar/types';

export const navigationItems: INavigationItem[] = [
  { id: 'about', label: 'ABOUT US', href: '/' },
  { id: 'participate', label: 'PARTICIPATE', href: '/' },
  { id: 'event', label: 'EVENT', href: '/' },
  { id: 'partners', label: 'PARTNERS', href: '/' },
  { id: 'contact', label: 'CONTACT US', href: '/' },
];

export const heroContent: IHeroContent = {
  title: 'CAPITAL OF TOMORROW',
  description:
    'A forum for young entrepreneurs ready to dream big, take action, and grow in a community of doers.',
};

export const eventInfo: IEventInfo = {
  location: 'DUBAI',
  month: 'NOVEMBER',
  year: '2025',
};

export const buttonContent: IButtonContent = {
  label: 'APPLY NOW',
};
