import { AccordionItem } from '@/components/Accordion/Accordion';
import { BlobData } from '@/components/BlobsParallaxGroup/BlobsParallaxGroup';

interface BlobElement extends BlobData {
  translateX?: number;
  translateY?: number;
}

export const blobs: BlobElement[] = [
  {
    img: '/blobs/v2.svg',
    left: '-3%',
    top: '42px',
    translateX: 350,
    translateY: -200,
    blur: 80,
    zIndex: -1,
    mouseSensitivity: 3,
    ease: 2,
    baseWidth: 475,
    baseHeight: 634,
  },
  {
    img: '/blobs/v3.svg',
    left: '-7%',
    top: '-410px',
    translateX: 10,
    translateY: -200,
    blur: 80,
    zIndex: -1,
    ease: 1,
    mouseSensitivity: 4,
    baseWidth: 805,
    baseHeight: 713,
  },
  {
    img: '/blobs/v4.svg',
    right: '16.5%',
    top: '-59px',
    baseWidth: 943,
    baseHeight: 643,
    blur: 80,
    ease: 1.5,
    zIndex: -2,
    mouseSensitivity: 3,
  },
  {
    img: '/blobs/v5.svg',
    right: '-16%',
    top: '-100px',
    baseWidth: 801,
    baseHeight: 685,
    mouseSensitivity: 4,
    blur: 80,
    zIndex: -3,
    ease: 2,
  },
  {
    img: '/blobs/v6.svg',
    left: '20%',
    top: '290px',
    baseWidth: 443,
    baseHeight: 599,
    mouseSensitivity: 3,
    blur: 80,
    zIndex: -3,
    ease: 1,
  },
  {
    img: '/blobs/v7.svg',
    right: '23.3%',
    top: '1550px',
    baseWidth: 766,
    baseHeight: 269,
    mouseSensitivity: 4,
    blur: 80,
    zIndex: -1,
    ease: 2,
  },
  {
    img: '/blobs/v8.svg',
    right: '-7%',
    top: '750px',
    baseWidth: 695,
    baseHeight: 432,
    mouseSensitivity: 3,

    blur: 80,
    zIndex: -1,
  },
  {
    img: '/blobs/v9.svg',
    right: '-11.7%',
    top: '1640px',
    baseWidth: 630,
    baseHeight: 429,
    mouseSensitivity: 3.5,

    ease: 2,

    blur: 80,
    zIndex: -1,
  },
  {
    img: '/blobs/v10.svg',
    left: '-0.7%',
    top: '2030px',
    baseWidth: 568,
    baseHeight: 608,
    mouseSensitivity: 4,
    blur: 80,
    zIndex: -1,
    ease: 1,
  },
  {
    img: '/blobs/v11.svg',
    left: '-3%',
    top: '2060px',
    baseWidth: 238,
    baseHeight: 463,
    mouseSensitivity: 3,
    blur: 80,
    ease: 2,
    zIndex: -1,
  },
  {
    img: '/blobs/v12.svg',
    right: '-6.0%',
    top: '2500px',
    baseWidth: 400,
    baseHeight: 391,
    mouseSensitivity: 4,
    blur: 80,
    zIndex: -1,
  },
  {
    img: '/blobs/v13.svg',
    right: '30.7%',
    top: '2630px',
    baseWidth: 791,
    baseHeight: 488,
    mouseSensitivity: 3.4,
    blur: 80,
    zIndex: -1,
  },
  {
    img: '/blobs/v14.svg',
    right: '-30%',
    top: '3180px',
    blur: 80,
    baseWidth: 688,
    baseHeight: 620,
    mouseSensitivity: 3,
    zIndex: -1,
    ease: 1,
  },
  {
    img: '/blobs/v15.svg',
    right: '-13%',
    top: '3490px',
    baseWidth: 675,
    baseHeight: 560,
    mouseSensitivity: 2.5,
    blur: 80,
    zIndex: -2,
    ease: 2,
  },
  {
    img: '/blobs/v16.svg',
    left: '-17%',
    top: '3550px',
    baseWidth: 706,
    baseHeight: 571,
    mouseSensitivity: 4,
    blur: 80,
    zIndex: -1,
    ease: 1,
  },
  {
    img: '/blobs/v17.svg',
    left: '8%',
    top: '4250px',
    baseWidth: 460,
    baseHeight: 567,
    mouseSensitivity: 3.4,
    blur: 80,
    zIndex: -1,
  },
  {
    img: '/blobs/v18.svg',
    top: '4840px',
    left: '-5%',
    blur: 80,
    baseWidth: 747,
    baseHeight: 347,
    mouseSensitivity: 4,
    zIndex: -1,
  },
  {
    img: '/blobs/v19.svg',
    left: '-11%',
    top: '4860px',

    ease: 2,
    baseWidth: 405,
    baseHeight: 406,
    mouseSensitivity: 4,
    blur: 80,
    zIndex: -2,
  },
  {
    img: '/blobs/v20.svg',
    right: '-11%',
    top: '4840px',
    baseWidth: 628,
    baseHeight: 566,
    mouseSensitivity: 3.5,
    blur: 80,
    zIndex: -1,
    ease: 1,
  },
  {
    img: '/blobs/v21.svg',
    left: '-21.5%',
    top: '5480px',
    blur: 80,
    baseWidth: 549,
    baseHeight: 543,
    mouseSensitivity: 4,
    zIndex: -1,
  },
  {
    img: '/blobs/v22.svg',
    right: '8%',
    top: '6280px',
    baseWidth: 493,
    baseHeight: 476,
    mouseSensitivity: 3.6,
    ease: 2,

    blur: 80,
    zIndex: -1,
  },
  {
    img: '/blobs/v23.svg',
    right: '-3.4%',
    top: '6400px',
    baseWidth: 474,
    baseHeight: 564,
    mouseSensitivity: 3,
    blur: 80,

    zIndex: -1,
    ease: 1,
  },
  {
    img: '/blobs/v24.svg',
    left: '-10%',
    top: '6970px',
    baseWidth: 579,
    baseHeight: 530,
    mouseSensitivity: 4,
    blur: 80,
    zIndex: -1,
  },
  {
    img: '/blobs/v25.svg',
    right: '-20%',
    top: '7850px',

    baseWidth: 765,
    baseHeight: 493,
    mouseSensitivity: 3.3,
    blur: 80,
    zIndex: -1,
    ease: 2,
  },
  {
    img: '/blobs/v26.svg',
    left: '-7%',
    top: '7950px',
    blur: 80,
    baseWidth: 508,
    baseHeight: 506,
    mouseSensitivity: 4.3,
    zIndex: -1,
    ease: 1,
  },
];

export const programData: AccordionItem[] = [
  {
    title: 'Access to online course',
    content:
      'Capital of Tomorrow is a new generation forum for young entrepreneurs, startups, and those who have ever thought about creating their own business. It is a space of support, real action, and networking where ideas are transformed into projects.',
  },
  {
    title: 'Pitch session (Grant Included)',
    content:
      'For people in business, beginners, startups, freelancers, students, young professionals, social entrepreneurs, mentors, investors, and anyone who wants to make a name for themselves and develop their own business. The best idea will receive a grant and mentoring support.',
  },
  {
    title: 'Penal talk',
    content:
      'Yes, each participant has the opportunity to present their idea on the Global Pitch stage. You will hear success stories and approaches to realizing various international businesses from experienced business people.',
  },
  {
    title: 'Group workshops',
    content:
      'We will devide you into groups and give an opportunity to pump up your business mindset by working on improving projects.',
  },
  {
    title: 'Informal networking during exploring new culture.',
    content:
      'No, it is enough to have an idea or a desire to start a business. The forum is for those who are just starting out.',
  },
  {
    title: 'Awarding ceremony.',
    content:
      'Participants will be able to sign up for a consultation on the development of ideas and projects after the forum if they wish to do so.',
  },
  {
    title: 'Counseling.',
    content:
      'Participants will be able to sign up for a consultation on the development of ideas and projects after the forum if they wish to do so.',
  },
];

export const qAData: AccordionItem[] = [
  {
    title: 'What is Capital of Tomorrow?',
    content:
      'Capital of Tomorrow is a new generation forum for young entrepreneurs, startups, and those who want to create their own business. It is a space of support, real action, and networking where ideas are transformed into projects.',
  },
  {
    title: 'Who is this forum for?',
    content:
      'For beginners in business, startups, freelancers, students, young professionals, social entrepreneurs, mentors, investors, and anyone who wants to make a name for themselves and develop their own business.',
  },
  {
    title: 'Can I present my project?',
    content:
      'Yes, each participant has the opportunity to present their idea on the Pitch stage. The best idea will receive a grant and mentoring support.',
  },
  {
    title: 'How to become a partner?',
    content:
      'We are open to partnerships and invite companies, investors, and foundations to join us. Contact us to receive a partnership package.',
  },
  {
    title: 'Do I need to have a ready-made business to participate?',
    content:
      'No, it is enough to have an idea or a desire to start a business. The forum is for those who are just starting out.',
  },
  {
    title: 'What language will the forum be held in?',
    content: 'The main language is English.',
  },
  {
    title: 'Will I receive a certificate?',
    content:
      'Yes, all participants will receive a certificate of participation.',
  },
  {
    title: 'How does the grant idea competition work?',
    content:
      'Participants present their idea to the jury. The jury takes into account innovation, benefit, and potential for implementation.',
  },
  {
    title: 'What happens if my visa is refused? Am I eligible for a refund?',
    content:
      'Please note that there is no refund for payments made. However, the organisation provides an opportunity to receive an electronic voucher that can be used to participate in one of the following events.\n\nFor participants with a self-funded package:\n\nIn case of visa refusal, you will receive an electronic voucher for participation in a future event. The cost of issuing the invitation and VAT will be deducted from the payment amount. The remaining amount will be provided in the form of a voucher.\n\nIf you ordered only an exclusive invitation letter:\n\nIn this case, no refund or voucher will be issued, as this service is non-refundable once it is issued.',
  },
  {
    title: 'What if I do not have a passport?',
    content:
      'Applicants are strongly advised to hold a valid passport for travel. However, you may apply by uploading your National/Student ID in the passport section and ensure your passport is secured before the event date.',
  },
];

export const PHOTO_KEY = 'uploaded_photo';
export const PASSPORT_KEY = 'uploaded_passport';
