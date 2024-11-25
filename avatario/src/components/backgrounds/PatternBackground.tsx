import React from 'react';

interface PatternBackgroundProps {
  color: string;
  style: 'circle' | 'square';
  pattern: 'dots' | 'lines' | 'grid';
}

export function PatternBackground({ color, style, pattern }: PatternBackgroundProps) {
  const patternId = `pattern-${pattern}`;
  const maskId = `mask-${style}`;
  
  const getPattern = () => {
    switch (pattern) {
      case 'dots':
        return (
          <pattern id={patternId} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill={color} />
            <circle cx="10" cy="10" r="3" fill="rgba(255,255,255,0.2)" />
          </pattern>
        );
      case 'lines':
        return (
          <pattern id={patternId} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill={color} />
            <path d="M0 20L20 0" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          </pattern>
        );
      case 'grid':
        return (
          <pattern id={patternId} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill={color} />
            <path d="M20 0L0 0L0 20" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
          </pattern>
        );
    }
  };

  return (
    <>
      <defs>
        {getPattern()}
        <mask id={maskId}>
          {style === 'circle' ? (
            <circle cx="100" cy="100" r="100" fill="white" />
          ) : (
            <rect width="200" height="200" fill="white" />
          )}
        </mask>
      </defs>
      <rect 
        width="200" 
        height="200" 
        fill={`url(#${patternId})`}
        mask={`url(#${maskId})`}
      />
    </>
  );
}