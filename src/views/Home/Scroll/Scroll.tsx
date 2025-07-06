'use client';
import { useEffect, useRef } from 'react';

export function Scroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const scrollSpeedRef = useRef(2); // Скорость прокрутки (можно настроить)

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    // Дублируем текст для бесшовной прокрутки
    text.innerHTML = text.innerHTML + ' ' + text.innerHTML;

    // Начинаем с позиции, где виден только дублированный текст (правая часть)
    positionRef.current = text.scrollWidth / 2;

    const animate = () => {
      positionRef.current -= scrollSpeedRef.current; // Уменьшаем позицию для движения справа налево

      // Сбрасываем позицию, когда прокрутили всю ширину текста
      if (positionRef.current <= 0) {
        positionRef.current = text.scrollWidth / 2;
      }

      text.style.transform = `translateX(-${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='width-120vh relative overflow-hidden border-y-2 border-[#F8F7F5]/50 leading-[20px]'
    >
      <div
        ref={textRef}
        className='font-akira sm:leading-20 whitespace-nowrap py-[2px] text-[20px] font-bold text-white will-change-transform sm:py-2 sm:text-5xl'
      >
        grant grant grant grant grant grant grant grant grant grant grant grant
        grant grant grant grant grant grant grant grant grant grant grant grant
        grant grant
      </div>
    </div>
  );
}
