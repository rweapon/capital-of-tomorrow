import React from 'react';

import { Checkbox } from '@/components/Сheckbox/Сheckbox';

const StepThree = () => {
  return (
    <div className='flex flex-col items-start gap-6 text-primary-foreground text-2xl font-mont'>
      <div className='flex gap-6'>
        <Checkbox id='delaration' />
        <label htmlFor='delaration'>
          Declaration: I declare that the information provided in this
          application is true and accurate to the best of my knowledge. I hereby
          consent & agree to abide by the aforementioned terms and conditions. I
          understand that any false information may result in disqualification
          from the scholarship.
        </label>
      </div>
      <ul className='font-inherit list-disc *:mb-2'>
        <li>
          The application fee is mandatory, non-refundable under any
          circumstances, and applies to this category as it covers the
          associated costs of event participation as a self-funded delegate.
          Incomplete applications will not be considered for evaluation or
          selection.
        </li>
        <li>
          After submission, applicants will be notified via email and must
          confirm their participation within the specified timeframe. Failure to
          confirm within the given period may result in the forfeiture of the
          opportunity.
        </li>
        <li>
          By submitting an application, participants grant the organisers of
          Capital of Tomorrow 2025 the right to use their name, biography, and
          submitted materials for promotional purposes related to the event.
        </li>
        <li>
          Personal information provided in the application will be used solely
          for the purpose of evaluation and event organisation. The organisers
          will handle personal data in compliance with applicable data
          protection laws and regulations.
        </li>
        <li>
          Delegate selection will be conducted by an independent panel of
          judges, including high-profile board members from European countries.
          All selection outcomes are final and non-negotiable.
        </li>
        <li>
          Vostocnik Solution is not liable for any loss, injury, damage, or
          theft during the event.
        </li>
        <li>
          Attendees are responsible for their personal belongings and must
          adhere to safety regulations and instructions. The organising team
          will be available to provide assistance when needed.
        </li>
        <li>
          By participating, attendees agree not to pursue legal action against
          the organisation regarding application fee refunds.
        </li>
        <li>
          Participants also commit to refraining from any oral, visual, or
          auditory defamation of the organisation, particularly if they disagree
          with their assigned category. Any violation of this provision will
          lead to legal consequences.
        </li>
        <li>
          By submitting an application, participants acknowledge that they have
          read, understood, and agreed to these terms and conditions.
        </li>
      </ul>
    </div>
  );
};

export default StepThree;
