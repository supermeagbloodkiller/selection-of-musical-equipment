'use client';

import { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminAuth from '../../../components/AdminAuth';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

export default function AdminBassists() {
  const [searchTerm, setSearchTerm] = useState('');
  const [bassists, setBassists] = useState([
    { id: 'david-ellefson', name: 'Дэвид Эллефсон', group: 'Megadeth', active: false },
    { id: 'james-lomenzo', name: 'Джеймс Ломенцо', group: 'Megadeth', active: true },
    { id: 'michael-anthony', name: 'Майкл Энтони', group: 'Van Halen', active: false },
    { id: 'wolfgang-vanhalen-bass', name: 'Вольфганг Ван Хален', group: 'Van Halen', active: false }
  ]);

  const filteredBassists = bassists.filter(bassist => 
    bassist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bassist.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этого басиста?')) {
      setBassists(bassists.filter(bassist => bassist.id !== id));
    }
  };

  return (
    <AdminAuth>
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />
        
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Управление басистами</h1>
            <Link 
              href="/admin/bassists/add" 
              className="btn btn-primary flex items-center space-x-2"
            >
              <FaPlus />
              <span>Добавить басиста</span>
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
          
          {/* Таблица басистов */}
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
                {filteredBassists.length > 0 ? (
                  filteredBassists.map((bassist) => (
                    <tr key={bassist.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{bassist.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{bassist.group}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          bassist.active 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {bassist.active ? 'Активный' : 'Бывший участник'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-3">
                          <Link 
                            href={`/admin/bassists/edit/${bassist.id}`}
                            className="text-primary hover:text-primary/80"
                          >
                            <FaEdit />
                          </Link>
                          <button 
                            onClick={() => handleDelete(bassist.id)}
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
                      Басисты не найдены
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
