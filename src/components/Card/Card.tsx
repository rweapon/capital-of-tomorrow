'use client';
import { Link } from 'i18n/navigation';
import React from 'react';

import { GRADIENTS } from '@/components/Card/data';
import { BackgroundType, IGradientProps } from '@/components/Card/types';

export interface ICardProps {
  title: string;
  listItems: string[];
  listTextColor?: string;
  backgroundType: BackgroundType;
  backgroundColor?: string;
  textColor: string;
  buttonBackgroundType: BackgroundType;
  buttonBackgroundColor?: string;
  buttonTextColor: string;
  borderColor: string;
  shadow?: string;
  width?: string;
  height?: string;
  opacity?: number;
  buttonWidth?: string;
  buttonHeight?: string;
  buttonFontSize?: string;
  layout?: string;
  price?: string;
  buttonText?: string;
  link: string;
}

const Gradient: React.FC<IGradientProps> = ({
  id,
  gradient,
  units = 'userSpaceOnUse',
}) => (
  <linearGradient
    id={id}
    x1={gradient.x1}
    y1={gradient.y1}
    x2={gradient.x2}
    y2={gradient.y2}
    gradientUnits={units}
  >
    {gradient.stops.map((stop, i) => (
      <stop
        key={i}
        offset={stop.offset}
        stopColor={stop.color}
        stopOpacity={stop.opacity}
      />
    ))}
  </linearGradient>
);

const NoiseFilter: React.FC<{ id: string }> = ({ id }) => (
  <filter
    id={id}
    x='0'
    y='0'
    width='100%'
    height='100%'
    filterUnits='userSpaceOnUse'
  >
    <feFlood floodOpacity='0' result='BackgroundImageFix' />
    <feBlend
      mode='normal'
      in='SourceGraphic'
      in2='BackgroundImageFix'
      result='shape'
    />
    <feTurbulence
      type='fractalNoise'
      baseFrequency='0.15 0.15'
      stitchTiles='stitch'
      numOctaves='2'
      result='noise'
      seed='7519'
    />
    <feComponentTransfer in='noise' result='coloredNoise1'>
      <feFuncR type='linear' slope='1' intercept='-0.2' />
      <feFuncG type='linear' slope='1' intercept='-0.2' />
      <feFuncB type='linear' slope='1' intercept='-0.2' />
      <feFuncA type='table' tableValues='0 0.05' />
    </feComponentTransfer>
    <feComposite
      operator='in'
      in2='shape'
      in='coloredNoise1'
      result='noise1Clipped'
    />
    <feMerge result='effect1_noise'>
      <feMergeNode in='shape' />
      <feMergeNode in='noise1Clipped' />
    </feMerge>
  </filter>
);

const Card: React.FC<ICardProps> = ({
  title,
  listItems,
  backgroundType,
  backgroundColor = '#3A3A3A',
  textColor,
  buttonBackgroundType,
  buttonBackgroundColor = '#E3AF64',
  buttonTextColor,
  borderColor,
  opacity = 1,
  shadow = '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
  width = '280px',
  height = '540px',
  buttonWidth = '220px',
  buttonHeight = '85px',
  buttonFontSize,
  layout = 'default',
  price,
  listTextColor,
  buttonText = 'Get started',
  link,
}) => {
  const numericWidth = parseInt(width);
  const numericHeight = parseInt(height);
  const r = 20;
  const circleR = 22;
  const y = layout === 'partnership' ? 256 : numericHeight - 30 - 85 - 60 + 0.5;
  const gradientId = React.useId();

  const path = `M ${r},0 H ${
    numericWidth - r
  } A ${r},${r} 0 0 1 ${numericWidth},${r} V ${
    y - circleR
  } A ${circleR},${circleR} 0 0 0 ${
    numericWidth - circleR
  },${y} A ${circleR},${circleR} 0 0 0 ${numericWidth},${y + circleR} V ${
    numericHeight - r
  } A ${r},${r} 0 0 1 ${
    numericWidth - r
  },${numericHeight} H ${r} A ${r},${r} 0 0 1 0,${numericHeight - r} V ${
    y + circleR
  } A ${circleR},${circleR} 0 0 0 ${circleR},${y} A ${circleR},${circleR} 0 0 0 0,${
    y - circleR
  } V ${r} A ${r},${r} 0 0 1 ${r},0 Z`;

  const renderDottedLine = () => {
    const commonProps = {
      x1: circleR,
      y1: y,
      x2: numericWidth - circleR,
      y2: y,
      strokeDasharray: '4,4',
      opacity: '0.7',
    };

    if (backgroundType === 'gold-gradient') {
      return <line {...commonProps} stroke='#1e1e1e' strokeWidth='1' />;
    } else if (backgroundType === 'solid') {
      return (
        <g>
          <line {...commonProps} stroke='#1e1e1e' strokeWidth='3' opacity='1' />
          <line {...commonProps} stroke='#D4AF37' strokeWidth='1' opacity='1' />
        </g>
      );
    }
    return <line {...commonProps} stroke='#7c7676' strokeWidth='1' />;
  };

  const renderBackground = () => {
    switch (backgroundType) {
      case 'gold-gradient':
        return (
          <>
            <defs>
              <Gradient
                id={`goldBase-${gradientId}`}
                gradient={GRADIENTS.goldBase}
              />
              <Gradient
                id={`goldOverlay-${gradientId}`}
                gradient={GRADIENTS.goldOverlay}
              />
              <NoiseFilter id={`noise-${gradientId}`} />
            </defs>
            <g filter={`url(#noise-${gradientId})`}>
              <path
                d={path}
                fill='#C1A875'
                stroke={borderColor}
                strokeWidth='1'
              />
              <path
                d={path}
                fill={`url(#goldBase-${gradientId})`}
                style={{ mixBlendMode: 'normal' }}
              />
              <path
                d={path}
                fill={`url(#goldOverlay-${gradientId})`}
                style={{ mixBlendMode: 'overlay' }}
              />
              <path d={path} fill='#C1A875' style={{ mixBlendMode: 'color' }} />
            </g>
          </>
        );
      case 'overlay-gradient':
        return (
          <>
            <defs>
              <Gradient
                id={`overlayFill-${gradientId}`}
                gradient={GRADIENTS.overlayFill}
                units='objectBoundingBox'
              />
              <NoiseFilter id={`noise-${gradientId}`} />
            </defs>
            <g filter={`url(#noise-${gradientId})`}>
              <path
                d={path}
                fill={backgroundColor || '#2a2a2a'}
                stroke='#505050'
                strokeWidth='1'
              />
              <path d={path} fill={`url(#overlayFill-${gradientId})`} />
            </g>
          </>
        );
      default:
        return (
          <path
            d={path}
            fill={backgroundColor}
            stroke={borderColor}
            strokeWidth='1'
          />
        );
    }
  };

  const renderButton = () => {
    const buttonStyle = {
      color: buttonTextColor,
      width: buttonWidth,
      height: buttonHeight,
      fontSize: layout === 'partnership' ? '16px' : '20px',
    };

    const borderRadiusClass =
      layout === 'partnership' ? 'rounded-[35px]' : 'rounded-[12px]';

    if (buttonBackgroundType === 'gold-gradient') {
      return (
        <div
          className='relative overflow-hidden rounded-[12px] transition-all duration-200 hover:scale-105'
          style={{ width: buttonWidth, height: buttonHeight }}
        >
          <div className='absolute inset-0 bg-[#C1A875]' />
          <svg className='absolute inset-0 size-full'>
            <defs>
              <Gradient
                id={`btnGoldBase-${gradientId}`}
                gradient={{
                  ...GRADIENTS.goldBase,
                  y1: buttonHeight.replace('px', ''),
                  y2: '0',
                  x2: buttonWidth.replace('px', ''),
                }}
              />
              <Gradient
                id={`btnGoldOverlay-${gradientId}`}
                gradient={{
                  ...GRADIENTS.goldOverlay,
                  y1: `${parseInt(buttonHeight.replace('px', '')) * 0.7}`,
                  y2: `${parseInt(buttonHeight.replace('px', '')) * 0.25}`,
                }}
              />
            </defs>
            <rect
              width='100%'
              height='100%'
              fill={`url(#btnGoldBase-${gradientId})`}
              style={{ mixBlendMode: 'normal' }}
            />
            <rect
              width='100%'
              height='100%'
              fill={`url(#btnGoldOverlay-${gradientId})`}
              style={{ mixBlendMode: 'overlay' }}
            />
            <rect
              width='100%'
              height='100%'
              fill='#C1A875'
              style={{ mixBlendMode: 'color' }}
            />
          </svg>
          <Link as={link} href={link}>
            <button
              className={`font-mont  relative z-10 size-full bg-transparent font-bold ${borderRadiusClass} transition-all duration-200 hover:scale-105`}
              style={buttonStyle}
            >
              {buttonText}
            </button>
          </Link>
        </div>
      );
    }

    return (
      <Link as={link} href={link}>
        <button
          className={`font-mont font-bold  ${borderRadiusClass} transition-all duration-200 hover:scale-105`}
          style={{ ...buttonStyle, background: buttonBackgroundColor }}
        >
          {buttonText}
        </button>
      </Link>
    );
  };

  const isGoldGradientText = textColor.includes('linear-gradient');
  const textStyle = isGoldGradientText
    ? {
        background: textColor,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
    : { color: textColor };

  const renderContent = () => {
    const listTextStyle = {
      ...(listTextColor ? { color: listTextColor } : textStyle),
    };
    if (layout === 'partnership') {
      return (
        <>
          <header className='flex min-h-[256px] flex-col justify-between px-[34px] py-8'>
            <h2
              className='font-akira text-center text-[18px] font-bold uppercase leading-tight tracking-tight'
              style={textStyle}
            >
              {title}
            </h2>

            {price && (
              <div className='-ml-24 text-center leading-[34px]'>
                <span
                  className='align-super text-2xl font-bold text-[#E3AF64]'
                  style={{ verticalAlign: '20px' }}
                >
                  £
                </span>
                <span
                  className='font-akira text-[48px] font-[800]'
                  style={textStyle}
                >
                  {price}
                </span>
              </div>
            )}

            <div className='flex justify-center'>{renderButton()}</div>
          </header>

          <div className='flex-1 px-6 py-8'>
            <ul className='font-mont text-[13px] leading-none '>
              {listItems.map((item, index) => (
                <li key={index} className='flex items-start'>
                  <span className='mr-3 mt-1 text-xs leading-none text-[#E3AF64]'>
                    •
                  </span>
                  <span
                    style={{ color: '#fffc' }}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    }

    return (
      <>
        <header className='h-24 px-3 pt-7'>
          <h2
            className='font-akira text-center text-[20px] font-bold uppercase leading-tight tracking-tight'
            style={textStyle}
          >
            {title}
          </h2>
        </header>
        <ul
          style={{ fontSize: buttonFontSize || '16px' }}
          className='font-mont max-h-[280px] overflow-y-auto px-4 text-base leading-[1.3]'
        >
          {listItems.map((item, index) => (
            <li key={index} className='flex items-start'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                className='mr-2 mt-1 shrink-0'
                style={{ fill: isGoldGradientText ? '#E3AF64' : textColor }}
              >
                <circle cx='12' cy='12' r='4' />
              </svg>
              <span
                style={listTextStyle}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </li>
          ))}
        </ul>
        <div className='mb-[30px] mt-auto flex justify-center'>
          {renderButton()}
        </div>
      </>
    );
  };

  return (
    <div
      className='relative '
      style={{ width, height, filter: `drop-shadow(${shadow})` }}
    >
      <svg
        className='absolute inset-0'
        width='100%'
        height='100%'
        style={{ opacity }}
        preserveAspectRatio='none'
      >
        {renderBackground()}
        {renderDottedLine()}
      </svg>

      <div
        className='absolute inset-0 flex flex-col'
        style={{ clipPath: `path('${path}')` }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default Card;
