interface FooterLink {
  href: string;
  text: string;
}

interface FooterSocial {
  title: string;
  terms: string;
}

interface FooterAddress {
  title: string;
  lines: string[];
}

export default interface IFooterData {
  links: FooterLink[];
  copyright: string;
  social: FooterSocial;
  address: FooterAddress;
  privacy: string;
}
