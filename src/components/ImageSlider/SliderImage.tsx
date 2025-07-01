'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';

import { basePath, imagePrefix } from '@/constant/env';

export const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);
  const isTransitioningRef = useRef(false);

  const slides = [
    { id: 1, src: '1.png', alt: 'Slide 1' },
    { id: 2, src: '2.png', alt: 'Slide 2' },
    { id: 3, src: '3.png', alt: 'Slide 3' },
    { id: 4, src: '4.png', alt: 'Slide 4' },
    { id: 5, src: '5.png', alt: 'Slide 5' },
  ];

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!swiperInstance || isHoveredRef.current || isTransitioningRef.current)
        return;

      isTransitioningRef.current = true;

      const nextIndex = (activeIndex + 1) % slides.length;
      swiperInstance.slideTo(nextIndex, 800, false); // Явно указываем скорость анимации

      // Сбрасываем флаг после завершения анимации
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 800);
    }, 3000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex, swiperInstance]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    startAutoPlay();
  };

  const styles = {
    container: {
      padding: '56px 0',
      overflow: 'hidden',
    },
    swiper: {
      overflow: 'visible',
      padding: '0 calc((100% - min(100%, 1200px)) / 2)',
    },
    slide: (isActive: boolean) => ({
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

  return (
    <div
      className='relative hidden w-full sm:block'
      style={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        initialSlide={0}
        slidesPerView='auto'
        slidesOffsetBefore={400}
        slidesOffsetAfter={400}
        loop={false}
        speed={800}
        resistance={false} // Отключаем сопротивление для более точной прокрутки
        resistanceRatio={0} // Полностью отключаем эффект "оттягивания"
        breakpoints={{
          0: { slidesOffsetBefore: 20, slidesOffsetAfter: 20 },
          640: { slidesOffsetBefore: 100, slidesOffsetAfter: 100 },
          1024: { slidesOffsetBefore: 200, slidesOffsetAfter: 200 },
          1440: { slidesOffsetBefore: 400, slidesOffsetAfter: 400 }, // Увеличил для больших экранов
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
              onClick={() => swiperInstance?.slideTo(index)}
              style={styles.slideButton}
              aria-label={`View slide ${index + 1}: ${slide.alt}`}
            >
              <Image
                src={`${basePath}${imagePrefix}/${slide.src}`}
                alt={slide.alt}
                width={300}
                height={300}
                style={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                  borderRadius: '10%',
                }}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
