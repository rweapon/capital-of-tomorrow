import React from 'react';

export interface IMissionContent {
  title: string;
  description: string[];
}

export interface IMissionGoals {
  items: string[];
}

const missionContent: IMissionContent = {
  title: 'OUR MISSION',
  description: [
    "Capital of Tomorrow is not just a typical business event - it's an event where young entrepreneurs can develop pitching and public speaking skills, acquire knowledge of and experience new approaches to international business, as well as find partners and investors. As part of this project, experienced entrepreneurs can become mentors and try their hand at business instruction, invest in bright and bold young projects and see young people’s fresh vision of domestic and international business. In addition, they will have an opportunity to present their projects and engage young audience, which will be done on the international level and face no limits.",
    'Those who are on the verge of creating their own business and wish to get away from the hackneyed recruitment are offered a unique opportunity to touch the world of entrepreneurship and come to realize that nothing is impossible.',
  ],
};

const missionGoals = [
  'Learn to think big',
  'Open access for global networking',
  'Support the best projects',
  'Create a community of like-minded people',
];

export const MissionSection: React.FC = () => {
  return (
    <div className='flex w-full items-center justify-center px-4 sm:px-6 md:px-8 xl:px-24'>
      <div
        className='relative w-full max-w-[1440px] overflow-hidden rounded-2xl md:rounded-3xl'
        style={{
          background: 'rgba(248, 247, 245, 0.05)',
          backdropFilter: 'blur(9.6px)',
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        }}
      >
        <div
          className='pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl'
          style={{
            background:
              'linear-gradient(to top left, #1f2937, #6b7280, #d1d5db)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            padding: '2px',
          }}
        />
        <div className='relative flex flex-row  sm:min-h-[450px] md:min-h-[300px]'>
          <div className=' min-h-auto w-full lg:min-w-[374px] xl:min-w-[488px]'>
            <div className='clip-image h-64 sm:h-72 lg:h-auto lg:min-w-[374px] xl:min-w-[488px]' />
          </div>

          <div className='flex w-full flex-col p-5 text-white md:p-14 lg:pb-8 lg:pl-14 lg:pr-[83px] lg:pt-12'>
            <h1 className='font-akira mb-2 text-[14px] font-extrabold sm:mb-4 sm:text-3xl md:mb-5 md:text-[40px]'>
              {missionContent.title}
            </h1>
            <p className='font-mont sm:font-monda text-think line-clamp-[9] text-sm font-normal leading-[13px] text-[#F8F7F5E5]/70 sm:line-clamp-[none]  sm:space-y-5 md:text-base'>
              {missionContent.description[0]}
              <br /> {missionContent.description[1]}
            </p>
          </div>
        </div>

        <div className='hidden w-full px-5 pb-6 sm:block sm:px-6 sm:pb-8 md:px-20 md:pb-12 md:pt-0'>
          <div className='py-6 sm:py-7 md:py-8 md:pt-0'>
            <div className='h-px w-full bg-white/20' />
          </div>
          <div className='flex flex-col justify-between sm:flex-row'>
            {missionGoals.map((goal, index) => (
              <h2
                key={index}
                className='font-mont xs:text-sm xs:text-left text-start text-xs font-bold text-white/80 sm:text-base'
              >
                {goal}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
