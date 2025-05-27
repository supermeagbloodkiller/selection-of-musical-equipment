'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function OptimizedImage({ 
  src, 
  alt, 
  width = 400, 
  height = 300, 
  className = '',
  fallbackSrc = '/images/placeholder.jpg',
  priority = false 
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    setImgSrc(fallbackSrc);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">Загрузка...</div>
        </div>
      )}
      
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${hasError ? 'filter grayscale' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
      />
      
      {hasError && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-sm text-center p-2">
            Изображение недоступно
          </div>
        </div>
      )}
    </div>
  );
}
