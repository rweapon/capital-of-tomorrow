import Card, { ICardProps } from './Card';

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
    opacity: 0.3,
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
    backgroundColor: '#2D2D2D', // Основной цвет фона
    textColor: '#FFFFFF',
    listTextColor: '#fffc',
    buttonBackgroundType: 'solid',
    buttonBackgroundColor: '#E3AF64',
    buttonTextColor: '#1e1e1e',
    borderColor: '#c7c1c1',
  },
  {
    title: 'INVITATION LETTER',
    opacity: 0.3,
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
    borderColor: '#c7c1c1',
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
    textColor: 'linear-gradient(90deg, #C1A875 0%, #D4AF37 100%)',
    buttonBackgroundType: 'gold-gradient',
    buttonTextColor: '#1e1e1e',
    borderColor: '#D4AF37',
    shadow: '0 8px 32px rgba(212, 175, 55, 0.3)',
  },
];

export const TicketCards = () => {
  return (
    <div className='relative mx-auto max-w-[1440px] overflow-hidden px-4 py-8 sm:px-6 lg:px-8'>
      <h2 className='font-akira mb-8 text-center text-2xl leading-snug text-[#f8f7f5] sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl'>
        Explore Flexible Participation Categories
      </h2>

      <div className='hidden w-full flex-wrap justify-center gap-8 px-4 md:flex'>
        {tickets.map((ticket) => (
          <Card key={ticket.title} {...ticket} width='280px' height='540px' />
        ))}
      </div>

      <div className='relative flex h-[560px] w-full justify-center md:hidden'>
        <div className='relative z-10'>
          <Card {...tickets[0]} width='280px' height='540px' />
        </div>

        <div className='absolute left-1/2 top-0 z-0 -translate-x-[160%] translate-y-[-7px] rotate-[5deg]'>
          <Card {...tickets[1]} width='280px' height='540px' />
        </div>

        <div className='absolute left-1/2 top-0 z-0 translate-x-[60%] translate-y-[-7px] rotate-[-5deg]'>
          <Card {...tickets[2]} width='280px' height='540px' />
        </div>
      </div>
    </div>
  );
};
