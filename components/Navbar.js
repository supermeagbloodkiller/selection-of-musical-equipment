'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaGuitar, FaLock, FaSearch, FaChevronDown, FaUsers } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGroupsMenuOpen, setIsGroupsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGroups, setFilteredGroups] = useState([]);
  const groupsMenuRef = useRef(null);

  // Список групп (в реальном приложении будет загружаться из базы данных)
  const groups = [
    { id: 'megadeth', name: 'Megadeth' },
    { id: 'vanhalen', name: 'Van Halen' },
    { id: 'metallica', name: 'Metallica' },
    { id: 'acdc', name: 'AC/DC' },
    { id: 'blacksabbath', name: 'Black Sabbath' },
    { id: 'ironmaiden', name: 'Iron Maiden' },
  ];

  // Закрытие меню групп при клике вне его
  useEffect(() => {
    function handleClickOutside(event) {
      if (groupsMenuRef.current && !groupsMenuRef.current.contains(event.target)) {
        setIsGroupsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Фильтрация групп при поиске
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredGroups(groups);
    } else {
      const filtered = groups.filter(group =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGroups(filtered);
    }
  }, [searchTerm]);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <FaGuitar className="text-primary text-2xl" />
          <span className="text-xl font-bold">МузыкаИнфо</span>
        </Link>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-dark focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Десктопное меню */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`nav-link ${pathname === '/' ? 'active-nav-link' : ''}`}
          >
            Главная
          </Link>

          {/* Выпадающее меню групп */}
          <div className="relative" ref={groupsMenuRef}>
            <button
              onClick={() => setIsGroupsMenuOpen(!isGroupsMenuOpen)}
              className={`nav-link flex items-center space-x-1 ${pathname.startsWith('/groups/') ? 'active-nav-link' : ''}`}
            >
              <FaUsers className="text-sm" />
              <span>Группы</span>
              <FaChevronDown className={`ml-1 text-xs transition-transform ${isGroupsMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isGroupsMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 py-2">
                <div className="px-3 py-2 border-b">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Поиск группы..."
                      className="w-full pl-8 pr-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  </div>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {filteredGroups.length > 0 ? (
                    filteredGroups.map(group => (
                      <Link
                        key={group.id}
                        href={`/groups/${group.id}`}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => setIsGroupsMenuOpen(false)}
                      >
                        {group.name}
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-gray-500">Ничего не найдено</div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/admin"
            className="btn btn-primary flex items-center space-x-1"
          >
            <FaLock className="text-sm" />
            <span>Админ</span>
          </Link>
        </div>
      </div>

      {/* Мобильное меню (выпадающее) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`nav-link ${pathname === '/' ? 'active-nav-link' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>

            {/* Мобильное подменю групп */}
            <div className="space-y-2">
              <div
                className={`nav-link flex items-center justify-between ${pathname.startsWith('/groups/') ? 'active-nav-link' : ''}`}
                onClick={() => setFilteredGroups(groups)}
              >
                <div className="flex items-center space-x-1">
                  <FaUsers className="text-sm" />
                  <span>Группы</span>
                </div>
              </div>

              <div className="pl-4 space-y-2">
                <div className="relative mb-2">
                  <input
                    type="text"
                    placeholder="Поиск группы..."
                    className="w-full pl-8 pr-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                </div>

                <div className="max-h-40 overflow-y-auto space-y-1">
                  {filteredGroups.length > 0 ? (
                    filteredGroups.map(group => (
                      <Link
                        key={group.id}
                        href={`/groups/${group.id}`}
                        className="block py-1 text-sm hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {group.name}
                      </Link>
                    ))
                  ) : (
                    <div className="text-sm text-gray-500">Ничего не найдено</div>
                  )}
                </div>
              </div>
            </div>

            <Link
              href="/admin"
              className="btn btn-primary w-full text-center flex items-center justify-center space-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaLock className="text-sm" />
              <span>Админ</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
