'use client';

import { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminAuth from '../../../components/AdminAuth';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

export default function AdminGuitarists() {
  const [searchTerm, setSearchTerm] = useState('');
  const [guitarists, setGuitarists] = useState([
    { id: 'dave-mustaine', name: 'Дэйв Мастейн', group: 'Megadeth', active: true },
    { id: 'marty-friedman', name: 'Марти Фридман', group: 'Megadeth', active: false },
    { id: 'chris-broderick', name: 'Крис Бродерик', group: 'Megadeth', active: false },
    { id: 'kiko-loureiro', name: 'Кико Лоурейро', group: 'Megadeth', active: true },
    { id: 'eddie-vanhalen', name: 'Эдди Ван Хален', group: 'Van Halen', active: false },
    { id: 'wolfgang-vanhalen', name: 'Вольфганг Ван Хален', group: 'Van Halen', active: true }
  ]);

  const filteredGuitarists = guitarists.filter(guitarist => 
    guitarist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guitarist.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этого гитариста?')) {
      setGuitarists(guitarists.filter(guitarist => guitarist.id !== id));
    }
  };

  return (
    <AdminAuth>
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />
        
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Управление гитаристами</h1>
            <Link 
              href="/admin/guitarists/add" 
              className="btn btn-primary flex items-center space-x-2"
            >
              <FaPlus />
              <span>Добавить гитариста</span>
            </Link>
          </div>
          
          {/* Поиск */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Поиск по имени или группе..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Таблица гитаристов */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Имя
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Группа
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Статус
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredGuitarists.length > 0 ? (
                  filteredGuitarists.map((guitarist) => (
                    <tr key={guitarist.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{guitarist.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{guitarist.group}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          guitarist.active 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {guitarist.active ? 'Активный' : 'Бывший участник'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-3">
                          <Link 
                            href={`/admin/guitarists/edit/${guitarist.id}`}
                            className="text-primary hover:text-primary/80"
                          >
                            <FaEdit />
                          </Link>
                          <button 
                            onClick={() => handleDelete(guitarist.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                      Гитаристы не найдены
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminAuth>
  );
}
