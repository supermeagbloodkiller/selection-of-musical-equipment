'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminSidebar from '../../../../../components/AdminSidebar';
import AdminAuth from '../../../../../components/AdminAuth';
import { FaSave, FaTimes, FaPlus, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { bandsData } from '../../../../../data/bandsData';

export default function EditGroup() {
  const router = useRouter();
  const params = useParams();
  const groupId = params.id;

  const [formData, setFormData] = useState({
    name: '',
    genre: '',
    year: '',
    description: '',
    members: [],
    equipment: { guitars: [], bass: [] },
    achievements: []
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (groupId && bandsData[groupId]) {
      setFormData(bandsData[groupId]);
    }
  }, [groupId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...formData.members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setFormData(prev => ({ ...prev, members: newMembers }));
  };

  const addMember = () => {
    setFormData(prev => ({
      ...prev,
      members: [...prev.members, { name: '', role: '', description: '', years: '' }]
    }));
  };

  const removeMember = (index) => {
    setFormData(prev => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index)
    }));
  };

  const handleEquipmentChange = (type, index, field, value) => {
    const newEquipment = { ...formData.equipment };
    newEquipment[type][index] = { ...newEquipment[type][index], [field]: value };
    setFormData(prev => ({ ...prev, equipment: newEquipment }));
  };

  const addEquipment = (type) => {
    setFormData(prev => ({
      ...prev,
      equipment: {
        ...prev.equipment,
        [type]: [...prev.equipment[type], { model: '', description: '', player: '' }]
      }
    }));
  };

  const removeEquipment = (type, index) => {
    setFormData(prev => ({
      ...prev,
      equipment: {
        ...prev.equipment,
        [type]: prev.equipment[type].filter((_, i) => i !== index)
      }
    }));
  };

  const handleAchievementChange = (index, field, value) => {
    const newAchievements = [...formData.achievements];
    newAchievements[index] = { ...newAchievements[index], [field]: value };
    setFormData(prev => ({ ...prev, achievements: newAchievements }));
  };

  const addAchievement = () => {
    setFormData(prev => ({
      ...prev,
      achievements: [...prev.achievements, { title: '', description: '', year: '' }]
    }));
  };

  const removeAchievement = (index) => {
    setFormData(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Название группы обязательно';
    if (!formData.genre.trim()) newErrors.genre = 'Жанр обязателен';
    if (!formData.year) newErrors.year = 'Год основания обязателен';
    if (!formData.description.trim()) newErrors.description = 'Описание обязательно';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      // В реальном приложении здесь был бы API-запрос для обновления данных
      alert('Данные группы успешно обновлены!');
      router.push('/admin/groups');
    }
  };

  return (
    <AdminAuth>
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />
        
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Редактировать группу: {formData.name}</h1>
            <Link 
              href="/admin/groups" 
              className="btn bg-gray-500 text-white hover:bg-gray-600 flex items-center space-x-2"
            >
              <FaTimes />
              <span>Отмена</span>
            </Link>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Основная информация */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Основная информация</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Название группы *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`input ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Введите название группы"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Жанр *
                  </label>
                  <input
                    type="text"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className={`input ${errors.genre ? 'border-red-500' : ''}`}
                    placeholder="Введите жанр"
                  />
                  {errors.genre && <p className="text-red-500 text-sm mt-1">{errors.genre}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Год основания *
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className={`input ${errors.year ? 'border-red-500' : ''}`}
                    placeholder="Введите год основания"
                    min="1900"
                    max="2024"
                  />
                  {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Описание *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className={`input ${errors.description ? 'border-red-500' : ''}`}
                  placeholder="Введите описание группы"
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>
            </div>

            {/* Участники */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Участники группы</h2>
                <button
                  type="button"
                  onClick={addMember}
                  className="btn btn-primary flex items-center space-x-2"
                >
                  <FaPlus />
                  <span>Добавить участника</span>
                </button>
              </div>
              
              {formData.members.map((member, index) => (
                <div key={index} className="border rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Участник {index + 1}</h3>
                    <button
                      type="button"
                      onClick={() => removeMember(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                      className="input"
                      placeholder="Имя участника"
                    />
                    <input
                      type="text"
                      value={member.role}
                      onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                      className="input"
                      placeholder="Роль (например, Вокал, Гитара)"
                    />
                    <input
                      type="text"
                      value={member.years}
                      onChange={(e) => handleMemberChange(index, 'years', e.target.value)}
                      className="input"
                      placeholder="Годы участия"
                    />
                  </div>
                  
                  <textarea
                    value={member.description}
                    onChange={(e) => handleMemberChange(index, 'description', e.target.value)}
                    className="input mt-4"
                    rows={2}
                    placeholder="Описание участника"
                  />
                </div>
              ))}
            </div>

            {/* Кнопки сохранения */}
            <div className="flex justify-end space-x-4">
              <Link 
                href="/admin/groups"
                className="btn bg-gray-500 text-white hover:bg-gray-600"
              >
                Отмена
              </Link>
              <button 
                type="submit"
                className="btn btn-primary flex items-center space-x-2"
              >
                <FaSave />
                <span>Сохранить изменения</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminAuth>
  );
}
