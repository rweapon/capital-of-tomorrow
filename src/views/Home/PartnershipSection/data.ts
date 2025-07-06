import {
  IPartnerLogo,
  IPartnershipContent,
} from '@/views/Home/PartnershipSection/types';

export const partnerLogos: IPartnerLogo[] = [
  { type: 'ad__dad', height: 44 },
  { type: 'club', height: 44 },
  { type: 'ad__dad', height: 44 },
  { type: 'club', height: 44 },
  { type: 'ad__dad', height: 44 },
  { type: 'club', height: 44 },
  { type: 'ad__dad', height: 44 },
];

export const partnershipContent: IPartnershipContent = {
  title: 'PARTNERSHIP ADVANTAGES',
  advantages: [
    {
      title: 'Increased brand awareness.',
      text: 'Your brand will gain visibility in front of the target audience through all communication channels of the event - from social media to offline space.',
    },
    {
      title: 'Access to the audience of young entrepreneurs and startups.',
      text: 'This is a chance to interact directly with ambitious founders, innovators, and future business leaders - those who are shaping the next generation economy.',
    },
    {
      title: 'Stand out among colleagues and competitors.',
      text: 'Participation in the forums program gives you the opportunity to declare yourself as a brand that supports development, innovation, and progress.',
    },
    {
      title: 'Direct interaction with participants.',
      text: 'You will be able to present your products, get feedback, network and find new customers or partners.',
    },
  ],
};
