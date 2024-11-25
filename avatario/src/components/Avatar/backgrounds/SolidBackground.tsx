import React from 'react';

interface SolidBackgroundProps {
  color: string;
  style: 'circle' | 'square';
}

export function SolidBackground({ color, style }: SolidBackgroundProps) {
  return style === 'circle' ? (
    <circle cx="100" cy="100" r="100" fill={color} />
  ) : (
    <rect width="200" height="200" fill={color} />
  );
}