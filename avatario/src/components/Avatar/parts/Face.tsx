import React from 'react';

interface FaceProps {
  color: string;
  style: 'default' | 'cute' | 'cool' | 'sleepy';
}

export function Face({ color, style }: FaceProps) {
  const renderFace = () => {
    switch (style) {
      case 'default':
        return (
          <>
            <circle cx="85" cy="85" r="5" fill="#333" />
            <circle cx="115" cy="85" r="5" fill="#333" />
            <path
              d="M80 100 Q100 120 120 100"
              fill="none"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </>
        );
      case 'cute':
        return (
          <>
            <path d="M80 80 Q85 75, 90 80" stroke="#333" strokeWidth="3" fill="none" />
            <path d="M110 80 Q115 75, 120 80" stroke="#333" strokeWidth="3" fill="none" />
            <circle cx="85" cy="85" r="2" fill="#333" />
            <circle cx="115" cy="85" r="2" fill="#333" />
            <path
              d="M90 105 Q100 115 110 105"
              fill="none"
              stroke="#ff9999"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="85" cy="95" r="5" fill="#ffcccc" opacity="0.5" />
            <circle cx="115" cy="95" r="5" fill="#ffcccc" opacity="0.5" />
          </>
        );
      case 'cool':
        return (
          <>
            <path d="M75 85 L95 85" stroke="#333" strokeWidth="3" strokeLinecap="round" />
            <path d="M105 85 L125 85" stroke="#333" strokeWidth="3" strokeLinecap="round" />
            <path
              d="M85 105 L115 105"
              fill="none"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </>
        );
      case 'sleepy':
        return (
          <>
            <path d="M80 85 Q85 80, 90 85" stroke="#333" strokeWidth="3" fill="none" />
            <path d="M110 85 Q115 80, 120 85" stroke="#333" strokeWidth="3" fill="none" />
            <path
              d="M85 105 Q100 95 115 105"
              fill="none"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path d="M75 75 L85 70 L95 75" stroke="#333" strokeWidth="2" fill="none" />
            <path d="M105 75 L115 70 L125 75" stroke="#333" strokeWidth="2" fill="none" />
          </>
        );
    }
  };

  return (
    <g>
      <circle cx="100" cy="90" r="40" fill={color} />
      {renderFace()}
    </g>
  );
}