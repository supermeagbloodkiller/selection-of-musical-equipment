'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaUsers, FaGuitar, FaMusic, FaSignOutAlt, FaImages } from 'react-icons/fa';

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? 'bg-primary/20 text-primary' : 'text-gray-300 hover:bg-dark/50 hover:text-white';
  };

  return (
    <div className="bg-dark h-full min-h-screen w-64 text-light p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Админ-панель</h2>
        <p className="text-gray-400 text-sm">Управление контентом</p>
      </div>

      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/admin"
              className={`flex items-center space-x-3 p-3 rounded-md transition-colors ${isActive('/admin')}`}
            >
              <FaHome className="text-lg" />
              <span>Главная</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/groups"
              className={`flex items-center space-x-3 p-3 rounded-md transition-colors ${isActive('/admin/groups')}`}
            >
              <FaUsers className="text-lg" />
              <span>Группы</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/guitarists"
              className={`flex items-center space-x-3 p-3 rounded-md transition-colors ${isActive('/admin/guitarists')}`}
            >
              <FaGuitar className="text-lg" />
              <span>Гитаристы</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/bassists"
              className={`flex items-center space-x-3 p-3 rounded-md transition-colors ${isActive('/admin/bassists')}`}
            >
              <FaMusic className="text-lg" />
              <span>Басисты</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/images"
              className={`flex items-center space-x-3 p-3 rounded-md transition-colors ${isActive('/admin/images')}`}
            >
              <FaImages className="text-lg" />
              <span>Изображения</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-auto pt-8 border-t border-gray-700 mt-8">
        <Link
          href="/"
          className="flex items-center space-x-3 p-3 rounded-md text-gray-300 hover:bg-dark/50 hover:text-white transition-colors"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Выйти на сайт</span>
        </Link>
      </div>
    </div>
  );
}
