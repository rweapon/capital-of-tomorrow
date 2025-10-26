import Image from 'next/image';
import React from 'react';

import { Switch } from '@/components/ui/switch';

import { imagePrefix } from '@/constant/env';

type LanguageSwitcherProps = {
  checked: boolean;
  onChangeLanguage: (value: boolean) => void;
};

export const LanguageSwitcher = ({
  checked,
  onChangeLanguage,
}: LanguageSwitcherProps) => {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src={`${imagePrefix}/GB.png`}
        alt='English'
        width={142}
        height={102}
        className='h-auto max-w-7'
      />
      <Switch checked={checked} onCheckedChange={onChangeLanguage} />
      <Image
        src={`${imagePrefix}/RU.png`}
        alt='Russian'
        width={142}
        height={102}
        className='h-auto max-w-7'
      />
    </div>
  );
};
