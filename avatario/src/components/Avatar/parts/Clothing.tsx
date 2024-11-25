import React from 'react';

interface ClothingProps {
  color: string;
  style: 'tshirt' | 'hoodie' | 'formal' | 'tank';
}

export function Clothing({ color, style }: ClothingProps) {
  const renderClothing = () => {
    switch (style) {
      case 'tshirt':
        return (
          <path
            d="M60 140 C60 180, 140 180, 140 140 L140 120 C140 120, 100 130, 60 120 Z"
            fill={color}
          />
        );
      case 'hoodie':
        return (
          <>
            <path
              d="M60 140 C60 180, 140 180, 140 140 L140 120 C140 120, 100 130, 60 120 Z"
              fill={color}
            />
            <path
              d="M55 120 C55 110, 145 110, 145 120 L140 125 C140 125, 100 135, 60 125 L55 120"
              fill={color}
              opacity="0.8"
            />
            <path
              d="M85 120 C85 115, 115 115, 115 120"
              fill="none"
              stroke={color}
              strokeWidth="4"
            />
          </>
        );
      case 'formal':
        return (
          <>
            <path
              d="M60 140 C60 180, 140 180, 140 140 L140 120 L100 130 L60 120 Z"
              fill={color}
            />
            <path
              d="M95 130 L105 130 L105 150 L95 150 Z"
              fill="white"
            />
            <path
              d="M98 130 L102 130 L100 140"
              fill={color}
              stroke={color}
              strokeWidth="1"
            />
          </>
        );
      case 'tank':
        return (
          <path
            d="M70 140 C70 180, 130 180, 130 140 L130 110 C130 110, 100 120, 70 110 Z"
            fill={color}
          />
        );
    }
  };

  return <g>{renderClothing()}</g>;
}