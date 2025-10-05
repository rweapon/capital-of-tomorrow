'use client';

import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import { imagePrefix } from '@/constant/env';

export interface BlobData {
  img: string;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  blur?: number;
  zIndex?: number;
  ease?: number;
  mouseSensitivity?: number;
  baseWidth?: number;
  baseHeight?: number;
}

interface BlobsParallaxGroupProps {
  blobs: BlobData[];
}

const REFERENCE_WIDTH = 1440;

export const BlobsParallaxGroup: React.FC<BlobsParallaxGroupProps> = ({
  blobs,
}) => {
  const blobRefs = useRef<Record<string, HTMLImageElement | null>>({});
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [windowSize, setWindowSize] = useState({
    width: 1440,
    height: 800,
  });
  const mousePositionRef = useRef({ x: 0.5, y: 0.5 });
  const animationRef = useRef<number | null>(null);

  // Функция для определения blur в зависимости от ширины экрана
  const getBlurValue = (width: number): number => {
    if (width <= 680) return 40;
    if (width <= 880) return 60;
    if (width >= 880) return 60;
    if (width >= 1024) return 80;
    return 0; // или значение по умолчанию для больших экранов
  };

  useEffect(() => {
    setIsMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const calculateImageSize = (blob: BlobData) => {
    const scaleFactor = windowSize.width / REFERENCE_WIDTH;

    if (blob.baseWidth && blob.baseHeight) {
      return {
        width: blob.baseWidth * scaleFactor,
        height: blob.baseHeight * scaleFactor,
      };
    }

    const defaultSize = windowSize.width * 0.1;
    return { width: defaultSize, height: defaultSize };
  };

  const updateElementsPosition = () => {
    Object.entries(blobRefs.current).forEach(([imgName, imgElement]) => {
      if (!imgElement) return;

      const blobConfig = blobs.find((b) => b.img === imgName);
      if (!blobConfig) return;

      const ease = blobConfig.ease ?? 0.5;
      const sensitivity = blobConfig.mouseSensitivity ?? 0.5;

      const mouseOffsetX =
        (mousePositionRef.current.x - 0.5) * 50 * sensitivity * ease;
      const mouseOffsetY =
        (mousePositionRef.current.y - 0.5) * 50 * sensitivity * ease;

      gsap.to(imgElement, {
        x: mouseOffsetX,
        y: mouseOffsetY,
        duration: 0.8,
        ease: 'power2.out',
      });
    });
  };

  useEffect(() => {
    if (!isMounted) return;

    const updateMousePosition = () => {
      mousePositionRef.current.x +=
        (mousePosition.x - mousePositionRef.current.x) * 0.1;
      mousePositionRef.current.y +=
        (mousePosition.y - mousePositionRef.current.y) * 0.1;
      updateElementsPosition();
      animationRef.current = requestAnimationFrame(updateMousePosition);
    };

    animationRef.current = requestAnimationFrame(updateMousePosition);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mousePosition, windowSize, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMounted]);

  if (!isMounted) {
    return (
      <>
        <div className='absolute z-[-1] overflow-hidden'>
          {blobs.map((blob) => {
            const positionStyles: React.CSSProperties = {
              position: 'absolute',
              filter: `blur(${getBlurValue(windowSize.width)}px)`,
              zIndex: blob.zIndex ?? -1,
            };

            if (blob.left !== undefined) positionStyles.left = blob.left;
            if (blob.top !== undefined) positionStyles.top = blob.top;
            if (blob.right !== undefined) positionStyles.right = blob.right;
            if (blob.bottom !== undefined) positionStyles.bottom = blob.bottom;

            return (
              <div
                key={blob.img}
                style={positionStyles}
                className='transition-all duration-300 ease-out'
              />
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <div className='absolute z-[-1] size-full overflow-hidden'>
        {blobs.map((blob) => {
          const { width, height } = calculateImageSize(blob);
          const positionStyles: React.CSSProperties = {
            position: 'absolute',
            width: `${width}px`,
            height: `${height}px`,
            filter: `blur(${getBlurValue(windowSize.width)}px)`,
            willChange: 'transform',
            zIndex: blob.zIndex ?? -1,
          };

          if (blob.left !== undefined) positionStyles.left = blob.left;
          if (blob.top !== undefined) positionStyles.top = blob.top;
          if (blob.right !== undefined) positionStyles.right = blob.right;
          if (blob.bottom !== undefined) positionStyles.bottom = blob.bottom;

          return (
            <Image
              key={blob.img}
              ref={(el) => {
                if (el) blobRefs.current[blob.img] = el;
              }}
              src={`${imagePrefix}${blob.img}`}
              alt=''
              style={positionStyles}
              width={width}
              height={height}
              draggable={false}
              className='transition-all duration-300 ease-out'
            />
          );
        })}
      </div>
    </>
  );
};
