import { notFound } from 'next/navigation';

import ApplyClient from '@/app/[locale]/apply/[step]/ApplyClient';

type Props = {
  params: { step: string };
};

export function generateStaticParams() {
  return [{ step: '1' }, { step: '2' }, { step: '3' }, { step: '4' }];
}

const ApplyPage = ({ params }: Props) => {
  const numStep = parseInt(params.step);

  // Validate step on server side
  if (![1, 2, 3, 4].includes(numStep)) {
    notFound();
  }

  return <ApplyClient numStep={numStep} />;
};

export default ApplyPage;
