'use client';
import React, { useEffect, useRef } from 'react';

export const LandingPlanet = () => {
  const planet = useRef<HTMLDivElement>(null);
  const sparkContainer = useRef<HTMLDivElement>(null);

  const generateSparks = () => {
    if (!sparkContainer.current) return;
    for (let i = 0; i < 350; i++) {
      const colors = [
        'rgba(255, 255, 255, 0.95)', // Bright White
        'rgba(216, 180, 254, 0.9)', // Light Purple
        'rgba(168, 85, 247, 1)', // Vivid Violet
        'rgba(147, 51, 234, 0.9)', // Deep Purple
      ];

      const spark = document.createElement('div');
      spark.classList.add('spark');

      // Random properties
      const size = Math.random() * 2.5 + 0.5;
      const left = Math.random() * 120 - 10;
      const top = Math.random() * 80 + 10;

      const duration = Math.random() * 4 + 2;

      const color = colors[Math.floor(Math.random() * colors.length)];

      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      spark.style.left = `${left}%`;
      spark.style.top = `${top}%`;
      spark.style.backgroundColor = color;
      spark.style.boxShadow = `0 0 ${size * 3}px ${color}`;
      spark.style.animationDelay = `-${Math.random() * 5}s`;
      spark.style.animationDuration = `${duration}s`;

      sparkContainer.current.appendChild(spark);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!planet.current) return;

      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        planet.current.style.transform = `translate(-50%, ${
          scrollY * 0.6
        }px) scale(${1 - scrollY * 0.0002})`;
      }
    });
    generateSparks();
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#050505] -z-10'>
      <div className='planet-container' ref={planet}>
        <div className='planet-body'></div>
        <div className='planet-glow-flow'></div>
        <div className='planet-double-glow'></div>
        <div className='planet-ambient'></div>
        <div className='planet-steam'></div>
        <div className='planet-sparks' ref={sparkContainer}></div>
        <svg className='svg-filters'>
          <defs>
            <filter id='steam-filter'>
              <feTurbulence
                type='fractalNoise'
                baseFrequency='0.025'
                numOctaves='4'
                result='fog'
              />
              <feDisplacementMap
                in='SourceGraphic'
                in2='fog'
                scale='40'
                xChannelSelector='R'
                yChannelSelector='G'
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};
