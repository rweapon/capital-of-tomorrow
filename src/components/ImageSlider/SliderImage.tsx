'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';

import { ISlide, ISliderStyles } from '@/types/ImageSlider.interfaces';

export const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const slides: ISlide[] = [
    { id: 1, src: '/1.png', alt: 'Slide 1' },
    { id: 2, src: '/2.png', alt: 'Slide 2' },
    { id: 3, src: '/3.png', alt: 'Slide 3' },
    { id: 4, src: '/4.png', alt: 'Slide 4' },
    { id: 5, src: '/5.png', alt: 'Slide 5' },
  ];

  const styles: ISliderStyles = {
    container: {
      padding: '56px 0',
      overflow: 'hidden',
    },
    swiper: {
      overflow: 'visible',
      padding: '0 calc((100% - min(100%, 1200px)) / 2)',
    },
    slide: (isActive) => ({
      width: '300px',
      height: '300px',
      transition: 'all 0.3s ease',
      transform: isActive ? 'translateY(-56px)' : 'translateY(0)',
      opacity: isActive ? 1 : 0.4,
      zIndex: isActive ? 10 : 1,
      marginTop: isActive ? '0' : '20px',
      marginRight: '24px',
      marginLeft: '24px',
    }),
    slideButton: {
      height: '100%',
      width: '300px',
      minWidth: '300px',
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
    },
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSlideClick = (index: number) => {
    setActiveIndex(index);
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSlideClick(index);
    }
  };

  return (
    <div className='relative w-full' style={styles.container}>
      <Swiper
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        initialSlide={0}
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}
        slidesPerView='auto'
        breakpoints={{
          0: {
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20,
          },
          640: {
            slidesOffsetBefore: 100,
            slidesOffsetAfter: 100,
          },
          1024: {
            slidesOffsetBefore: 200,
            slidesOffsetAfter: 200,
          },
          1440: {
            slidesOffsetBefore: 280,
            slidesOffsetAfter: 280,
          },
        }}
        style={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            style={styles.slide(activeIndex === index)}
          >
            <button
              className='relative size-full overflow-hidden rounded-lg shadow-lg'
              onClick={() => handleSlideClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={styles.slideButton}
              aria-label={`View slide ${index + 1}: ${slide.alt}`}
              type='button'
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                className='size-full object-cover'
                width={300}
                height={300}
                style={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '300px',
                }}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
