import { Card } from './Card';

import { IPartnershipTier } from '@/types/Card.interfaces';

const partnershipTiers: IPartnershipTier[] = [
    {
        title: 'OFFICIAL PARTNER',
        listItems: [
            'Logo on the website and printed materials',
            'Roll-up in the welcome area',
            'Partner certificate',
            'Access to photo and video materials',
            'Access to the chats',
            'Brochure stand in the ball room, 3 posts in social media',
        ],
    },
    {
        title: 'COLLABORATION PARTNER',
        listItems: [
            'Everything from the Official package',
            'Own area for networking/branding',
            'Stand table with company representative and merchandising',
            '5 posts on social media and 1 vertical video about the company',
            "Company brochure added to participants' merchandise",
        ],
    },
    {
        title: 'PRIMARY PARTNER',
        listItems: [
            'Everything from the Collaboration package',
            'Logo of the company will be provided on our landing and event page forever',
            'Opening and during breaks',
            'Presentation of the grant to the participant',
            'Mention of your logo and slogan in every video on our social media channels',
            'Thank-you speech from the head of Vostochnik Events',
        ],
    },
];

export const PartnershipCards = () => {
    return (
        <div className="mx-auto flex max-w-[1440px] flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="font-akira text-center text-3xl font-extrabold text-[#f8f7f5] md:text-4xl lg:text-5xl">
                CONDITIONS OF PARTNERSHIP
            </h2>
            <div className="mt-12 w-full">
                <ul className="flex flex-wrap justify-center gap-8">
                    {partnershipTiers.map((tier, index) => (
                        <li key={index} className="shrink-0" style={{ minWidth: '360px' }}>
                            <Card
                                opacity={0.5}
                                title={tier.title}
                                listItems={tier.listItems}
                                width="360px"
                                height="450px"
                                backgroundType="overlay-gradient"
                                backgroundColor="#2D2D2D"
                                textColor="#FFFFFF"
                                buttonBackgroundType="solid"
                                buttonBackgroundColor="#E3AF64"
                                buttonTextColor="#1E1E1E"
                                borderColor="#606060"
                                shadow="0 4px 4px 0 rgba(0, 0, 0, 0.25)"
                                buttonWidth="290px"
                                buttonHeight="50px"
                                buttonFontSize="13px"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
