'use client';

import { useState } from 'react';
import OptimizedImage from './OptimizedImage';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ImageGallery({ images = [], title = "Галерея" }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Изображения пока не добавлены</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      
      {/* Сетка изображений */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => openModal(image, index)}
          >
            <OptimizedImage
              src={image.url}
              alt={image.alt || `${title} ${index + 1}`}
              width={200}
              height={150}
              className="rounded-lg shadow-md"
            />
            {image.caption && (
              <p className="text-sm text-gray-600 mt-2 text-center">{image.caption}</p>
            )}
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Кнопка закрытия */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Навигация */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <FaChevronLeft className="text-2xl" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <FaChevronRight className="text-2xl" />
                </button>
              </>
            )}

            {/* Изображение */}
            <OptimizedImage
              src={selectedImage.url}
              alt={selectedImage.alt || title}
              width={800}
              height={600}
              className="rounded-lg"
            />

            {/* Подпись */}
            {selectedImage.caption && (
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded">
                <p className="text-center">{selectedImage.caption}</p>
              </div>
            )}

            {/* Счетчик */}
            {images.length > 1 && (
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
