'use client';

import { useState, useEffect } from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import AdminAuth from '../../components/AdminAuth';
import { FaUsers, FaGuitar, FaMusic, FaPlus } from 'react-icons/fa';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    groups: 6,
    guitarists: 18,
    bassists: 12
  });

  return (
    <AdminAuth>
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />

        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Панель управления</h1>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Всего групп</p>
                  <h2 className="text-3xl font-bold">{stats.groups}</h2>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaUsers className="text-2xl text-primary" />
                </div>
              </div>
              <Link
                href="/admin/groups"
                className="text-primary text-sm mt-4 inline-block hover:underline"
              >
                Подробнее →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Всего гитаристов</p>
                  <h2 className="text-3xl font-bold">{stats.guitarists}</h2>
                </div>
                <div className="bg-secondary/10 p-3 rounded-full">
                  <FaGuitar className="text-2xl text-secondary" />
                </div>
              </div>
              <Link
                href="/admin/guitarists"
                className="text-secondary text-sm mt-4 inline-block hover:underline"
              >
                Подробнее →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Всего басистов</p>
                  <h2 className="text-3xl font-bold">{stats.bassists}</h2>
                </div>
                <div className="bg-dark/10 p-3 rounded-full">
                  <FaMusic className="text-2xl text-dark" />
                </div>
              </div>
              <Link
                href="/admin/bassists"
                className="text-dark text-sm mt-4 inline-block hover:underline"
              >
                Подробнее →
              </Link>
            </div>
          </div>

          {/* Быстрые действия */}
          <h2 className="text-xl font-bold mb-4">Быстрые действия</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link
              href="/admin/groups/add"
              className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3 hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 p-2 rounded-full">
                <FaPlus className="text-primary" />
              </div>
              <span>Добавить группу</span>
            </Link>

            <Link
              href="/admin/guitarists/add"
              className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3 hover:shadow-lg transition-shadow"
            >
              <div className="bg-secondary/10 p-2 rounded-full">
                <FaPlus className="text-secondary" />
              </div>
              <span>Добавить гитариста</span>
            </Link>

            <Link
              href="/admin/bassists/add"
              className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3 hover:shadow-lg transition-shadow"
            >
              <div className="bg-dark/10 p-2 rounded-full">
                <FaPlus className="text-dark" />
              </div>
              <span>Добавить басиста</span>
            </Link>
          </div>

          {/* Последние обновления */}
          <h2 className="text-xl font-bold mb-4">Последние обновления</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Название
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Тип
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Дата
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Iron Maiden</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/10 text-primary">
                      Группа
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date().toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link href="/admin/groups/edit/ironmaiden" className="text-primary hover:underline">
                      Редактировать
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Black Sabbath</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/10 text-primary">
                      Группа
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date().toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link href="/admin/groups/edit/blacksabbath" className="text-primary hover:underline">
                      Редактировать
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">AC/DC</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/10 text-primary">
                      Группа
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date().toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link href="/admin/groups/edit/acdc" className="text-primary hover:underline">
                      Редактировать
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Metallica</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/10 text-primary">
                      Группа
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date().toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link href="/admin/groups/edit/metallica" className="text-primary hover:underline">
                      Редактировать
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Megadeth</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/10 text-primary">
                      Группа
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date().toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link href="/admin/groups/edit/megadeth" className="text-primary hover:underline">
                      Редактировать
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Van Halen</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/10 text-primary">
                      Группа
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date().toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link href="/admin/groups/edit/vanhalen" className="text-primary hover:underline">
                      Редактировать
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminAuth>
  );
}
