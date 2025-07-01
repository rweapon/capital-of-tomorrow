'use client';

import Accordion from '@/components/Accordion';
import { PartnershipCards } from '@/components/Cards/PartnershipCards';
import { TicketCards } from '@/components/Cards/TicketCards';
import Hero from '@/components/Hero';
import SliderImage from '@/components/ImageSlider';
import MissionSection from '@/components/MissionSection';
import PartnershipSection from '@/components/PartnershipSection';
import Scroll from '@/components/Scroll';
import SimpleTextBlocks from '@/components/SimpleTextBlocks';
import Timeline from '@/components/Timeline';

import { programData, qAData } from '@/constant/data';

const Home = () => {
  return (
    <>
      <Hero />
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
      <SliderImage />
      <Accordion title='Q&A' items={qAData} />
    </>
  );
};

export default Home;
