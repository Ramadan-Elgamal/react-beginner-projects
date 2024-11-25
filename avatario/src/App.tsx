import React, { useState } from 'react';
import { Download, Palette } from 'lucide-react';
import { Avatar } from './components/Avatar';
import { ColorPicker } from './components/ColorPicker';
import { ImageUploader } from './components/ImageUploader';

type BackgroundStyle = {
  type: 'solid' | 'pattern' | 'animated' | 'image';
  variant?: 'dots' | 'lines' | 'grid' | 'pulse' | 'wave' | 'rotate';
  imageUrl?: string;
};

function App() {
  const [bgColor, setBgColor] = useState('#6366f1');
  const [faceColor, setFaceColor] = useState('#fcd34d');
  const [clothingColor, setClothingColor] = useState('#ef4444');
  const [style, setStyle] = useState<'circle' | 'square'>('circle');
  const [faceStyle, setFaceStyle] = useState<'default' | 'cute' | 'cool' | 'sleepy'>('default');
  const [clothingStyle, setClothingStyle] = useState<'tshirt' | 'hoodie' | 'formal' | 'tank'>('tshirt');
  const [backgroundStyle, setBackgroundStyle] = useState<BackgroundStyle>({ 
    type: 'solid' 
  });

  const downloadAvatar = () => {
    const svg = document.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    canvas.width = 200;
    canvas.height = 200;

    img.onload = () => {
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const link = document.createElement('a');
      link.download = 'avatario.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  const handleImageSelect = (imageUrl: string) => {
    setBackgroundStyle({
      type: 'image',
      imageUrl
    });
  };

  const backgroundOptions = {
    solid: [{ label: 'Solid', value: undefined }],
    pattern: [
      { label: 'Dots', value: 'dots' },
      { label: 'Lines', value: 'lines' },
      { label: 'Grid', value: 'grid' },
    ],
    animated: [
      { label: 'Pulse', value: 'pulse' },
      { label: 'Wave', value: 'wave' },
      { label: 'Rotate', value: 'rotate' },
    ],
  };

  const faceStyles = [
    { label: 'Default', value: 'default' },
    { label: 'Cute', value: 'cute' },
    { label: 'Cool', value: 'cool' },
    { label: 'Sleepy', value: 'sleepy' },
  ] as const;

  const clothingStyles = [
    { label: 'T-Shirt', value: 'tshirt' },
    { label: 'Hoodie', value: 'hoodie' },
    { label: 'Formal', value: 'formal' },
    { label: 'Tank Top', value: 'tank' },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <Palette className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">Avatario</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Avatar Preview */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-gray-50 rounded-xl p-8">
                  <Avatar
                    bgColor={bgColor}
                    faceColor={faceColor}
                    clothingColor={clothingColor}
                    style={style}
                    faceStyle={faceStyle}
                    clothingStyle={clothingStyle}
                    backgroundStyle={backgroundStyle}
                  />
                </div>
                <button
                  onClick={downloadAvatar}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Avatar
                </button>
              </div>

              {/* Customization Controls */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900">Customize</h2>
                  <ColorPicker
                    label="Background Color"
                    value={bgColor}
                    onChange={setBgColor}
                  />
                  <ColorPicker
                    label="Face Color"
                    value={faceColor}
                    onChange={setFaceColor}
                  />
                  <ColorPicker
                    label="Clothing Color"
                    value={clothingColor}
                    onChange={setClothingColor}
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-700">Face Style</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {faceStyles.map(({ label, value }) => (
                      <button
                        key={value}
                        onClick={() => setFaceStyle(value)}
                        className={`px-4 py-2 rounded-lg border ${
                          faceStyle === value
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-700">Clothing Style</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {clothingStyles.map(({ label, value }) => (
                      <button
                        key={value}
                        onClick={() => setClothingStyle(value)}
                        className={`px-4 py-2 rounded-lg border ${
                          clothingStyle === value
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-700">Background Style</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(backgroundOptions).map(([type, variants]) => (
                      <div key={type} className="space-y-2">
                        <h4 className="text-xs font-medium text-gray-500 capitalize">{type}</h4>
                        {variants.map(({ label, value }) => (
                          <button
                            key={label}
                            onClick={() => setBackgroundStyle({ 
                              type: type as BackgroundStyle['type'],
                              variant: value
                            })}
                            className={`w-full px-3 py-1.5 text-sm rounded-lg border ${
                              backgroundStyle.type === type && backgroundStyle.variant === value
                                ? 'bg-indigo-600 text-white border-indigo-600'
                                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <ImageUploader onImageSelect={handleImageSelect} />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-700">Shape Style</h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStyle('circle')}
                      className={`px-4 py-2 rounded-lg border ${
                        style === 'circle'
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Circle
                    </button>
                    <button
                      onClick={() => setStyle('square')}
                      className={`px-4 py-2 rounded-lg border ${
                        style === 'square'
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Square
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;