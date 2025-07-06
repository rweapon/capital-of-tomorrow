'use client';

import {
  Accordion,
  ImageSlider,
  MissionSection,
  SimpleTextBlocks,
  Timeline,
} from '@/components';

import { programData, qAData } from '@/constant/data';
import { PartnershipCards, TicketCards } from '@/views/Home/Cards';
import HomeHero from '@/views/Home/Hero';
import PartnershipSection from '@/views/Home/PartnershipSection';
import Scroll from '@/views/Home/Scroll';

const Home = () => {
  return (
    <>
      <HomeHero />
      <Scroll />
      <MissionSection />
      <Accordion
        title='PROGRAM OF THE FORUM'
        items={programData}
        extraContent={<SimpleTextBlocks />}
      />
      <Timeline />
      <TicketCards />
      <Scroll />
      <PartnershipSection />
      <PartnershipCards />
      <ImageSlider />
      <Accordion title='Q&A' items={qAData} />
    </>
  );
};

export default Home;
