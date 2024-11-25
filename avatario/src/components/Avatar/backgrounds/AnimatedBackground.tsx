import React from 'react';

interface AnimatedBackgroundProps {
  color: string;
  style: 'circle' | 'square';
  animation: 'pulse' | 'wave' | 'rotate';
}

export function AnimatedBackground({ color, style, animation }: AnimatedBackgroundProps) {
  const getAnimation = () => {
    switch (animation) {
      case 'pulse':
        return `
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `;
      case 'wave':
        return `
          @keyframes wave {
            0% { transform: translateY(0); }
            50% { transform: translateY(5px); }
            100% { transform: translateY(0); }
          }
        `;
      case 'rotate':
        return `
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `;
    }
  };

  const getAnimationClass = () => {
    switch (animation) {
      case 'pulse':
        return 'animate-[pulse_2s_ease-in-out_infinite]';
      case 'wave':
        return 'animate-[wave_3s_ease-in-out_infinite]';
      case 'rotate':
        return 'animate-[rotate_10s_linear_infinite]';
    }
  };

  return (
    <g className={getAnimationClass()}>
      {style === 'circle' ? (
        <circle cx="100" cy="100" r="100" fill={color} />
      ) : (
        <rect width="200" height="200" fill={color} />
      )}
      <style>{getAnimation()}</style>
    </g>
  );
}