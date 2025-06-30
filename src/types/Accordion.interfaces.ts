import { ReactNode } from 'react';

export type AccordionItem = {
  title: string;
  content: string;
};

export interface IAccordionProps {
  title: string;
  items: AccordionItem[];
  extraContent?: ReactNode;
}
