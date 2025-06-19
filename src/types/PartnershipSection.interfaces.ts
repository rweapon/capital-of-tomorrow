export interface IPartnerLogo {
  type: string;
  height: number;
}

export interface IAdvantageItem {
  title: string;
  text: string;
}

export interface IPartnershipContent {
  title: string;
  advantages: IAdvantageItem[];
}
