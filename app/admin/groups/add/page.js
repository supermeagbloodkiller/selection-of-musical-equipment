'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../../components/AdminSidebar';
import AdminAuth from '../../../../components/AdminAuth';
import { FaSave, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function AddGroup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    genre: '',
    year: '',
    description: '',
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Автоматически генерируем ID из названия
    if (name === 'name') {
      setFormData({
        ...formData,
        [name]: value,
        id: value.toLowerCase().replace(/\s+/g, '')
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Название группы обязательно';
    }
    
    if (!formData.genre.trim()) {
      newErrors.genre = 'Жанр обязателен';
    }
    
    if (!formData.year) {
      newErrors.year = 'Год основания обязателен';
    } else if (isNaN(formData.year) || parseInt(formData.year) < 1900 || parseInt(formData.year) > new Date().getFullYear()) {
      newErrors.year = 'Введите корректный год';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Описание обязательно';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      // В реальном приложении здесь был бы API-запрос для сохранения данных
      alert('Группа успешно добавлена!');
      router.push('/admin/groups');
    }
  };

  return (
    <AdminAuth>
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />
        
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Добавить новую группу</h1>
            <Link 
              href="/admin/groups" 
              className="btn bg-gray-500 text-white hover:bg-gray-600 flex items-center space-x-2"
            >
              <FaTimes />
              <span>Отмена</span>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Название группы*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Например: Metallica"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                    ID (генерируется автоматически)
                  </label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    value={formData.id}
                    readOnly
                    className="input bg-gray-100"
                    placeholder="ID будет сгенерирован автоматически"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
                    Жанр*
                  </label>
                  <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    className={`input ${errors.genre ? 'border-red-500' : ''}`}
                    placeholder="Например: Трэш-метал"
                  />
                  {errors.genre && <p className="text-red-500 text-xs mt-1">{errors.genre}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                    Год основания*
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className={`input ${errors.year ? 'border-red-500' : ''}`}
                    placeholder="Например: 1981"
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                  {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year}</p>}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Описание группы*
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`input min-h-[150px] ${errors.description ? 'border-red-500' : ''}`}
                  placeholder="Введите описание группы..."
                ></textarea>
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary flex items-center space-x-2"
                >
                  <FaSave />
                  <span>Сохранить</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminAuth>
  );
}
