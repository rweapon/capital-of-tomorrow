'use client';
import Card from './Card';

import { ICardProps } from '@/types/Card.interfaces';

const goldGradient = `linear-gradient(82deg, #c1a875 0%, #B8860B 10%, #D4AF37 25%, #DAA520 46%, #B8860B 55%, #CD853F 82%, #DEB887 93%, #B8860B 100%)`;

const tickets: ICardProps[] = [
  {
    title: 'FULLY AND PARTLY FUNDED',
    listItems: [
      'Everything from self-funded +',
      'Accommodation and meals are provided both for <strong>fully</strong> and <strong>partly</strong> funded',
      'Reimbursement of flight expenses for <strong>fully funded</strong> in amount of no more 250 USD',
      'Priority on the pitch stage',
      'Opportunity to perform on the global stage',
    ],
    backgroundType: 'gold-gradient',
    backgroundColor: '#C1A875',
    textColor: '#1e1e1e',
    buttonBackgroundType: 'solid',
    buttonBackgroundColor: '#1e1e1e',
    buttonTextColor: '#D4AF37',
    borderColor: '#1e1e1e',
    shadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
  },
  {
    title: 'SELF FUNDED',
    opacity: 0.5,
    listItems: [
      'Participation in the forum',
      'Twin accommodation',
      'Breakfasts and dinners',
      'Certificate, merch',
      'Visa support',
      'Idea presentation',
      'Networking with mentors',
    ],
    backgroundType: 'overlay-gradient',
    backgroundColor: '#2D2D2D',
    textColor: '#FFFFFF',
    listTextColor: '#fffc',
    buttonBackgroundType: 'solid',
    buttonBackgroundColor: '#E3AF64',
    buttonTextColor: '#1e1e1e',
    borderColor: '#404040',
  },
  {
    title: 'INVITATION LETTER',
    opacity: 0.5,
    listItems: [
      'Official invitation',
      'Confirmation of participation for the embassy',
      'Visa support',
      'Travel planning recommendations',
      '! <strong>No accommodations and meals</strong>',
    ],
    backgroundType: 'overlay-gradient',
    backgroundColor: '#2D2D2D',
    textColor: '#FFFFFF',
    listTextColor: '#fffc',
    buttonBackgroundType: 'solid',
    buttonBackgroundColor: '#E3AF64',
    buttonTextColor: '#1e1e1e',
    borderColor: '#404040',
  },
  {
    title: 'VIP',
    listItems: [
      'All self-funded +',
      'Single room (superior)',
      'Priority registration',
      'Airport VIP transfer',
      'Individual consultations',
      'Premium merch',
      'All-stage support',
      'Expert consultations for six months after the forum',
    ],
    backgroundType: 'solid',
    backgroundColor: '#1A1A1A',
    textColor: goldGradient,
    buttonBackgroundType: 'gold-gradient',
    buttonTextColor: '#1e1e1e',
    borderColor: '#D4AF37',
    shadow: '0 8px 32px rgba(212, 175, 55, 0.3)',
  },
];

export const TicketCards = () => {
  return (
    <div className='mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20'>
      <h2 className='font-akira mb-8 text-center text-2xl leading-snug text-[#f8f7f5] sm:mx-20 sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl'>
        Explore Flexible Participation Categories
      </h2>

      <div className='flex w-full flex-wrap justify-center gap-5 '>
        {tickets.map((ticket) => (
          <Card key={ticket.title} {...ticket} width='273px' height='540px' />
        ))}
      </div>
    </div>
  );
};
