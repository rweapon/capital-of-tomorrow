interface FooterLink {
  href: string;
  text: string;
  target: string;
}

interface FooterAddress {
  title: string;
  lines: string[];
}

export default interface IFooterData {
  links: FooterLink[];
  copyright: string;
  address: FooterAddress;
}
