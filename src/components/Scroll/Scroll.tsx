'use client';
import { useEffect, useRef, useState } from 'react';

export function Scroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const text = textRef.current;
    if (!containerRef.current || !text) return;

    text.innerHTML = text.innerHTML + ' ' + text.innerHTML;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollSpeed = 0.5;

      text.style.transform = `translateX(-${scrollY * scrollSpeed}px)`;

      if (scrollY * scrollSpeed > text.scrollWidth / 2) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isClient) return null;

  return (
    <div
      ref={containerRef}
      className='width-120vh relative overflow-hidden border-y-2 border-[#F8F7F5]/50 '
    >
      <div
        ref={textRef}
        className=' font-akira leading-20 whitespace-nowrap py-2 text-5xl font-bold text-white will-change-transform'
      >
        grant grant grant grant grant grant grant grant grant grant grant grant
        grant grant grant grant grant grant grant grant grant grant grant grant
        grant grant
      </div>
    </div>
  );
}
