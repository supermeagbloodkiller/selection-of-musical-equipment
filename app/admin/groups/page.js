'use client';

import { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminAuth from '../../../components/AdminAuth';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

export default function AdminGroups() {
  const [searchTerm, setSearchTerm] = useState('');
  const [groups, setGroups] = useState([
    { id: 'megadeth', name: 'Megadeth', genre: 'Трэш-метал', year: 1983 },
    { id: 'metallica', name: 'Metallica', genre: 'Трэш-метал', year: 1981 },
    { id: 'ironmaiden', name: 'Iron Maiden', genre: 'Хэви-метал', year: 1975 },
    { id: 'blacksabbath', name: 'Black Sabbath', genre: 'Хэви-метал', year: 1968 },
    { id: 'acdc', name: 'AC/DC', genre: 'Хард-рок', year: 1973 },
    { id: 'vanhalen', name: 'Van Halen', genre: 'Хард-рок', year: 1972 }
  ]);

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить эту группу?')) {
      setGroups(groups.filter(group => group.id !== id));
    }
  };

  return (
    <AdminAuth>
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />

        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Управление группами</h1>
            <Link
              href="/admin/groups/add"
              className="btn btn-primary flex items-center space-x-2"
            >
              <FaPlus />
              <span>Добавить группу</span>
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
                placeholder="Поиск по названию или жанру..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Таблица групп */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Название
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Жанр
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Год основания
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredGroups.length > 0 ? (
                  filteredGroups.map((group) => (
                    <tr key={group.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{group.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{group.genre}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{group.year}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-3">
                          <Link
                            href={`/admin/groups/edit/${group.id}`}
                            className="text-primary hover:text-primary/80"
                          >
                            <FaEdit />
                          </Link>
                          <button
                            onClick={() => handleDelete(group.id)}
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
                      Группы не найдены
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
