'use client';

import { useState, useEffect } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminAuth from '../../../components/AdminAuth';
import ImageUpload from '../../../components/ImageUpload';
import OptimizedImage from '../../../components/OptimizedImage';
import supabase from '../../../lib/supabase';
import { FaTrash, FaEye, FaCopy } from 'react-icons/fa';

export default function AdminImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все изображения' },
    { id: 'artists', name: 'Артисты' },
    { id: 'guitars', name: 'Гитары' },
    { id: 'bass', name: 'Бас-гитары' },
    { id: 'bands', name: 'Группы' },
    { id: 'concerts', name: 'Концерты' }
  ];

  // Загрузка списка изображений
  const loadImages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.storage
        .from('images')
        .list('', { limit: 100, sortBy: { column: 'created_at', order: 'desc' } });

      if (error) throw error;

      const imagesWithUrls = data.map(file => {
        const { data: { publicUrl } } = supabase.storage
          .from('images')
          .getPublicUrl(file.name);
        
        return {
          ...file,
          url: publicUrl,
          category: getCategoryFromPath(file.name)
        };
      });

      setImages(imagesWithUrls);
    } catch (error) {
      console.error('Ошибка загрузки изображений:', error);
    } finally {
      setLoading(false);
    }
  };

  // Определение категории по пути файла
  const getCategoryFromPath = (path) => {
    if (path.includes('artist')) return 'artists';
    if (path.includes('guitar')) return 'guitars';
    if (path.includes('bass')) return 'bass';
    if (path.includes('band')) return 'bands';
    if (path.includes('concert')) return 'concerts';
    return 'other';
  };

  // Удаление изображения
  const deleteImage = async (fileName) => {
    if (!confirm('Вы уверены, что хотите удалить это изображение?')) return;

    try {
      const { error } = await supabase.storage
        .from('images')
        .remove([fileName]);

      if (error) throw error;

      setImages(images.filter(img => img.name !== fileName));
    } catch (error) {
      console.error('Ошибка удаления:', error);
      alert('Ошибка при удалении изображения');
    }
  };

  // Копирование URL в буфер обмена
  const copyUrl = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      alert('URL скопирован в буфер обмена!');
    } catch (error) {
      console.error('Ошибка копирования:', error);
    }
  };

  // Обработка успешной загрузки
  const handleUploadComplete = (url, filePath) => {
    loadImages(); // Перезагружаем список
  };

  useEffect(() => {
    loadImages();
  }, []);

  // Фильтрация изображений по категории
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <AdminAuth>
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />
        
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Управление изображениями</h1>
          
          {/* Загрузка новых изображений */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Загрузить новое изображение</h2>
            <ImageUpload 
              bucket="images" 
              onUploadComplete={handleUploadComplete}
              folder={selectedCategory !== 'all' ? selectedCategory : ''}
            />
          </div>

          {/* Фильтр по категориям */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Фильтр по категориям</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Список изображений */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">
              Загруженные изображения ({filteredImages.length})
            </h2>
            
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Загрузка изображений...</p>
              </div>
            ) : filteredImages.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Изображения не найдены</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <OptimizedImage
                      src={image.url}
                      alt={image.name}
                      width={200}
                      height={150}
                      className="w-full h-40"
                    />
                    <div className="p-3">
                      <p className="text-sm font-medium truncate" title={image.name}>
                        {image.name}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        {(image.metadata?.size / 1024).toFixed(1)} KB
                      </p>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => window.open(image.url, '_blank')}
                          className="flex-1 bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                          title="Просмотр"
                        >
                          <FaEye className="inline mr-1" />
                        </button>
                        <button
                          onClick={() => copyUrl(image.url)}
                          className="flex-1 bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600"
                          title="Копировать URL"
                        >
                          <FaCopy className="inline mr-1" />
                        </button>
                        <button
                          onClick={() => deleteImage(image.name)}
                          className="flex-1 bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                          title="Удалить"
                        >
                          <FaTrash className="inline mr-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminAuth>
  );
}
