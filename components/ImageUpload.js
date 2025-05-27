'use client';

import { useState } from 'react';
import supabase from '../lib/supabase';
import { FaUpload, FaSpinner, FaCheck, FaTimes } from 'react-icons/fa';

export default function ImageUpload({ bucket = 'images', onUploadComplete, folder = '' }) {
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const uploadImage = async (event) => {
    try {
      setUploading(true);
      setUploadStatus(null);

      const file = event.target.files[0];
      if (!file) return;

      // Проверяем тип файла
      if (!file.type.startsWith('image/')) {
        setUploadStatus({ type: 'error', message: 'Пожалуйста, выберите изображение' });
        return;
      }

      // Проверяем размер файла (максимум 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setUploadStatus({ type: 'error', message: 'Размер файла не должен превышать 5MB' });
        return;
      }

      // Создаем уникальное имя файла
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = folder ? `${folder}/${fileName}` : fileName;

      // Загружаем файл в Supabase Storage
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (error) {
        throw error;
      }

      // Получаем публичный URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      setUploadStatus({ type: 'success', message: 'Изображение успешно загружено!' });
      
      // Вызываем callback с URL изображения
      if (onUploadComplete) {
        onUploadComplete(publicUrl, filePath);
      }

    } catch (error) {
      console.error('Ошибка загрузки:', error);
      setUploadStatus({ type: 'error', message: error.message || 'Ошибка загрузки изображения' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {uploading ? (
              <FaSpinner className="w-8 h-8 mb-4 text-gray-500 animate-spin" />
            ) : (
              <FaUpload className="w-8 h-8 mb-4 text-gray-500" />
            )}
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Нажмите для загрузки</span> или перетащите файл
            </p>
            <p className="text-xs text-gray-500">PNG, JPG, JPEG (максимум 5MB)</p>
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={uploadImage}
            disabled={uploading}
          />
        </label>
      </div>

      {/* Статус загрузки */}
      {uploadStatus && (
        <div className={`mt-4 p-3 rounded-md flex items-center ${
          uploadStatus.type === 'success' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {uploadStatus.type === 'success' ? (
            <FaCheck className="mr-2" />
          ) : (
            <FaTimes className="mr-2" />
          )}
          {uploadStatus.message}
        </div>
      )}
    </div>
  );
}
