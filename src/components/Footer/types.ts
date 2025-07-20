import { INavigationItem } from '@/components/Navbar/types';

type FooterCol<T> = {
  title: string;
  data: T;
};

export default interface IFooterData {
  navigation: FooterCol<INavigationItem[]>;
  contacts: FooterCol<INavigationItem[]>;
  information: FooterCol<string[]>;
}
