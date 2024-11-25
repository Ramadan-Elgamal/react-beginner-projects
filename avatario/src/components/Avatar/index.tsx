import React from 'react';
import { SolidBackground } from './backgrounds/SolidBackground';
import { PatternBackground } from './backgrounds/PatternBackground';
import { AnimatedBackground } from './backgrounds/AnimatedBackground';
import { ImageBackground } from './backgrounds/ImageBackground';
import { Face } from './parts/Face';
import { Clothing } from './parts/Clothing';

interface AvatarProps {
  bgColor: string;
  faceColor: string;
  clothingColor: string;
  style: 'circle' | 'square';
  faceStyle: 'default' | 'cute' | 'cool' | 'sleepy';
  clothingStyle: 'tshirt' | 'hoodie' | 'formal' | 'tank';
  backgroundStyle: {
    type: 'solid' | 'pattern' | 'animated' | 'image';
    variant?: 'dots' | 'lines' | 'grid' | 'pulse' | 'wave' | 'rotate';
    imageUrl?: string;
  };
}

export function Avatar({ 
  bgColor, 
  faceColor, 
  clothingColor, 
  style,
  faceStyle,
  clothingStyle,
  backgroundStyle 
}: AvatarProps) {
  const renderBackground = () => {
    switch (backgroundStyle.type) {
      case 'solid':
        return <SolidBackground color={bgColor} style={style} />;
      case 'pattern':
        return (
          <PatternBackground 
            color={bgColor} 
            style={style} 
            pattern={backgroundStyle.variant as 'dots' | 'lines' | 'grid'} 
          />
        );
      case 'animated':
        return (
          <AnimatedBackground 
            color={bgColor} 
            style={style} 
            animation={backgroundStyle.variant as 'pulse' | 'wave' | 'rotate'} 
          />
        );
      case 'image':
        return backgroundStyle.imageUrl ? (
          <ImageBackground 
            imageUrl={backgroundStyle.imageUrl} 
            style={style} 
          />
        ) : null;
    }
  };
  
  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      {renderBackground()}
      <Clothing style={clothingStyle} color={clothingColor} />
      <Face style={faceStyle} color={faceColor} />
    </svg>
  );
}