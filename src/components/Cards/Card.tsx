import React from 'react';

import { ICardProps, IGradientDefinition, IGradientProps } from '@/types/Card.interfaces';

export const GRADIENTS = {
    goldBase: {
        x1: '15.6361',
        y1: '335.861',
        x2: '280.459',
        y2: '304.323',
        stops: [
            { offset: '0%', color: '#576265' },
            { offset: '17.2%', color: '#9EA1A1' },
            { offset: '45.74%', color: '#848B8A' },
            { offset: '55.36%', color: '#576265' },
            { offset: '82.34%', color: '#576265' },
            { offset: '92.52%', color: '#757A7B' },
            { offset: '100%', color: '#576265' },
        ],
    } as IGradientDefinition,
    goldOverlay: {
        x1: '109.48',
        y1: '268.5',
        x2: '-44.6034',
        y2: '64.0731',
        stops: [
            { offset: '0%', color: 'white', opacity: '0' },
            { offset: '100%', color: 'white', opacity: '1' },
        ],
    } as IGradientDefinition,
    overlayFill: {
        x1: '0%',
        y1: '0%',
        x2: '0%',
        y2: '100%',
        stops: [
            { offset: '0%', color: '#F8F7F5', opacity: '0.02' },
            { offset: '100%', color: '#737373', opacity: '0' },
        ],
    } as IGradientDefinition,
};

const Gradient: React.FC<IGradientProps> = ({ id, gradient, units = 'userSpaceOnUse' }) => (
    <linearGradient
        id={id}
        x1={gradient.x1}
        y1={gradient.y1}
        x2={gradient.x2}
        y2={gradient.y2}
        gradientUnits={units}
    >
        {gradient.stops.map((stop, i) => (
            <stop key={i} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity} />
        ))}
    </linearGradient>
);

const NoiseFilter: React.FC<{ id: string }> = ({ id }) => (
    <filter id={id} x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
            type="fractalNoise"
            baseFrequency="0.15 0.15"
            stitchTiles="stitch"
            numOctaves="2"
            result="noise"
            seed="7519"
        />
        <feComponentTransfer in="noise" result="coloredNoise1">
            <feFuncR type="linear" slope="1" intercept="-0.2" />
            <feFuncG type="linear" slope="1" intercept="-0.2" />
            <feFuncB type="linear" slope="1" intercept="-0.2" />
            <feFuncA type="table" tableValues="0 0.05" />
        </feComponentTransfer>
        <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
        <feMerge result="effect1_noise">
            <feMergeNode in="shape" />
            <feMergeNode in="noise1Clipped" />
        </feMerge>
    </filter>
);

export const Card: React.FC<ICardProps> = ({
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
}) => {
    const numericWidth = Number.parseInt(width);
    const numericHeight = Number.parseInt(height);
    const r = 20;
    const circleR = 22;
    const y = numericHeight - 30 - 85 - 60 + 0.5;
    const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

    const path = `M ${r},0 H ${numericWidth - r} A ${r},${r} 0 0 1 ${numericWidth},${r} V ${y - circleR} A ${circleR},${circleR} 0 0 0 ${numericWidth - circleR},${y} A ${circleR},${circleR} 0 0 0 ${numericWidth},${y + circleR} V ${numericHeight - r} A ${r},${r} 0 0 1 ${numericWidth - r},${numericHeight} H ${r} A ${r},${r} 0 0 1 0,${numericHeight - r} V ${y + circleR} A ${circleR},${circleR} 0 0 0 ${circleR},${y} A ${circleR},${circleR} 0 0 0 0,${y - circleR} V ${r} A ${r},${r} 0 0 1 ${r},0 Z`;

    const renderDottedLine = () => {
        const commonProps = {
            x1: circleR,
            y1: y,
            x2: numericWidth - circleR,
            y2: y,
            strokeDasharray: '4,4',
            opacity: '0.7',
        };

        switch (backgroundType) {
            case 'gold-gradient':
                return <line {...commonProps} stroke="#1e1e1e" strokeWidth="1" />;
            case 'solid':
                return (
                    <g>
                        <line {...commonProps} stroke="#1e1e1e" strokeWidth="3" opacity="1" />
                        <line {...commonProps} stroke="#D4AF37" strokeWidth="1" opacity="1" />
                    </g>
                );
            default:
                return <line {...commonProps} stroke="#7c7676" strokeWidth="1" />;
        }
    };

    const renderBackground = () => {
        switch (backgroundType) {
            case 'gold-gradient':
                return (
                    <>
                        <defs>
                            <Gradient id={`goldBase-${gradientId}`} gradient={GRADIENTS.goldBase} />
                            <Gradient
                                id={`goldOverlay-${gradientId}`}
                                gradient={GRADIENTS.goldOverlay}
                            />
                        </defs>
                        <path d={path} fill="#C1A875" stroke={borderColor} strokeWidth="1" />
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
                        <path d={path} fill="#C1A875" style={{ mixBlendMode: 'color' }} />
                    </>
                );
            case 'overlay-gradient':
                return (
                    <>
                        <defs>
                            <Gradient
                                id={`overlayFill-${gradientId}`}
                                gradient={GRADIENTS.overlayFill}
                                units="objectBoundingBox"
                            />
                            <NoiseFilter id={`noise-${gradientId}`} />
                        </defs>
                        <g filter={`url(#noise-${gradientId})`}>
                            <path d={path} fill="#2a2a2a" stroke="#505050" strokeWidth="1" />
                            <path d={path} fill={`url(#overlayFill-${gradientId})`} />
                        </g>
                    </>
                );
            default:
                return (
                    <path d={path} fill={backgroundColor} stroke={borderColor} strokeWidth="1" />
                );
        }
    };

    const renderButton = () => {
        const buttonProps = {
            className: 'font-mont rounded-[12px] font-bold text-xl transition-all duration-200 hover:scale-105',
            style: {
                color: buttonTextColor,
                cursor: 'pointer',
                border: 'none',
                width: buttonWidth,
                height: buttonHeight,

            },
            children: 'Get started',
        };

        if (buttonBackgroundType === 'gold-gradient') {
            return (
                <div
                    className="relative overflow-hidden rounded-[12px] hover:scale-105 transition-all duration-200"
                    style={{ width: buttonWidth, height: buttonHeight }}
                >
                    <div className="absolute inset-0 bg-[#C1A875]" />
                    <svg className="absolute inset-0 size-full">
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
                            width="100%"
                            height="100%"
                            fill={`url(#btnGoldBase-${gradientId})`}
                            style={{ mixBlendMode: 'normal' }}
                        />
                        <rect
                            width="100%"
                            height="100%"
                            fill={`url(#btnGoldOverlay-${gradientId})`}
                            style={{ mixBlendMode: 'overlay' }}
                        />
                        <rect
                            width="100%"
                            height="100%"
                            fill="#C1A875"
                            style={{ mixBlendMode: 'color' }}
                        />
                    </svg>
                    <button
                        {...buttonProps}
                        className="font-mont  relative z-10 size-full bg-transparent text-xl font-bold"
                    />
                </div>
            );
        }

        return (
            <button
                {...buttonProps}

                style={{ ...buttonProps.style, background: buttonBackgroundColor }}

            />
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

    return (
        <div
            className="relative mx-auto"
            style={{
                width: '100%',
                height,
                filter: `drop-shadow(${shadow})`,
            }}
        >
            <svg
                className="absolute inset-0"
                width="100%"
                style={{ opacity }}
                height={numericHeight}
                preserveAspectRatio="none"
            >
                {renderBackground()}
                {renderDottedLine()}
            </svg>

            <div
                className="absolute inset-0 flex flex-col justify-between"
                style={{
                    clipPath: `path('${path}')`,
                    width: '100%',
                }}
            >
                <div>
                    <header className="h-24 px-3 pt-7">
                        <h2
                            className="font-akira text-center text-[20px] font-bold uppercase leading-tight tracking-tight"
                            style={textStyle}
                        >
                            {title}
                        </h2>
                    </header>
                    <ul
                        style={{
                            fontSize: buttonFontSize || '16px',
                        }}
                        className="font-mont max-h-[280px] overflow-y-auto px-4 text-base leading-[1.2]"
                    >
                        {listItems.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    className="mr-2 mt-1 shrink-0"
                                    style={{ fill: isGoldGradientText ? '#E3AF64' : textColor }}
                                >
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                                <span
                                    style={textStyle}
                                    dangerouslySetInnerHTML={{ __html: item }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-[30px] mt-auto flex justify-center">{renderButton()}</div>
            </div>
        </div>
    );
};
