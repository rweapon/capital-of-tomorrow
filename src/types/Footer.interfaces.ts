interface FooterLink {
    href: string;
    text: string;
    isHighlighted: boolean;
}

interface FooterSocial {
    title: string;
    terms: string;
}

interface FooterAddress {
    title: string;
    lines: string[];
}

export interface FooterData {
    links: FooterLink[];
    copyright: string;
    social: FooterSocial;
    address: FooterAddress;
    privacy: string;
}
