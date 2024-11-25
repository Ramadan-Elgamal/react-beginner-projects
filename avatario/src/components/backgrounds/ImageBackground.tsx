import React, { useState, useEffect } from 'react';

interface ImageBackgroundProps {
  imageUrl: string;
  style: 'circle' | 'square';
}

export function ImageBackground({ imageUrl, style }: ImageBackgroundProps) {
  const [aspectRatio, setAspectRatio] = useState(1);
  const maskId = `mask-${style}`;
  const patternId = `pattern-${imageUrl.replace(/[^a-zA-Z0-9]/g, '')}`;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setAspectRatio(img.width / img.height);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  return (
    <>
      <defs>
        <pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width="200"
          height="200"
          patternTransform={`scale(${aspectRatio > 1 ? 1 : aspectRatio} ${
            aspectRatio > 1 ? 1 / aspectRatio : 1
          })`}
        >
          <image
            href={imageUrl}
            width="200"
            height="200"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
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