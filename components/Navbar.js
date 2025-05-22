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
    <nav className="bg-gradient-to-r from-frankenstrat-black via-frankenstrat-gray to-frankenstrat-black shadow-2xl py-4 border-b-2 border-frankenstrat-red">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <FaGuitar className="text-frankenstrat-red text-3xl animate-rock-pulse group-hover:text-frankenstrat-white transition-colors" />
          <span className="font-judas text-2xl text-frankenstrat-white">🤘 METAL LEGENDS 🤘</span>
        </Link>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-metal-silver hover:text-metal-gold focus:outline-none transition-colors"
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
            className={`metal-subtitle text-lg hover:text-metal-gold transition-colors ${pathname === '/' ? 'text-metal-gold' : 'text-metal-silver'}`}
          >
            🏠 ГЛАВНАЯ
          </Link>

          {/* Выпадающее меню групп */}
          <div className="relative" ref={groupsMenuRef}>
            <button
              onClick={() => setIsGroupsMenuOpen(!isGroupsMenuOpen)}
              className={`metal-subtitle text-lg flex items-center space-x-2 hover:text-metal-gold transition-colors ${pathname.startsWith('/groups/') ? 'text-metal-gold' : 'text-metal-silver'}`}
            >
              <FaUsers className="text-lg" />
              <span>🎸 ГРУППЫ</span>
              <FaChevronDown className={`text-sm transition-transform ${isGroupsMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isGroupsMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-gradient-to-b from-metal-gray to-metal-black rounded-lg shadow-2xl border-2 border-metal-red z-10 py-2">
                <div className="px-3 py-2 border-b border-metal-red/30">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="🔍 Поиск группы..."
                      className="w-full pl-8 pr-3 py-2 text-sm bg-metal-black border-2 border-metal-red/50 rounded-md text-metal-silver placeholder-metal-silver/60 focus:outline-none focus:border-metal-gold focus:ring-1 focus:ring-metal-gold"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-metal-red text-sm" />
                  </div>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {filteredGroups.length > 0 ? (
                    filteredGroups.map(group => (
                      <Link
                        key={group.id}
                        href={`/groups/${group.id}`}
                        className="block px-4 py-3 text-sm text-metal-silver hover:bg-metal-red/20 hover:text-metal-gold transition-colors font-metal-display"
                        onClick={() => setIsGroupsMenuOpen(false)}
                      >
                        🤘 {group.name}
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-metal-silver/60">❌ Ничего не найдено</div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/admin"
            className="metal-btn px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <FaLock className="text-lg" />
            <span>🔐 АДМИН</span>
          </Link>
        </div>
      </div>

      {/* Мобильное меню (выпадающее) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-metal-gray to-metal-black py-6 px-6 shadow-2xl border-t-2 border-metal-red animate-fade-in">
          <div className="flex flex-col space-y-6">
            <Link
              href="/"
              className={`metal-subtitle text-lg hover:text-metal-gold transition-colors ${pathname === '/' ? 'text-metal-gold' : 'text-metal-silver'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              🏠 ГЛАВНАЯ
            </Link>

            {/* Мобильное подменю групп */}
            <div className="space-y-4">
              <div
                className={`metal-subtitle text-lg flex items-center justify-between ${pathname.startsWith('/groups/') ? 'text-metal-gold' : 'text-metal-silver'}`}
                onClick={() => setFilteredGroups(groups)}
              >
                <div className="flex items-center space-x-2">
                  <FaUsers className="text-lg" />
                  <span>🎸 ГРУППЫ</span>
                </div>
              </div>

              <div className="pl-4 space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="🔍 Поиск группы..."
                    className="w-full pl-8 pr-3 py-2 text-sm bg-metal-black border-2 border-metal-red/50 rounded-md text-metal-silver placeholder-metal-silver/60 focus:outline-none focus:border-metal-gold focus:ring-1 focus:ring-metal-gold"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-metal-red text-sm" />
                </div>

                <div className="max-h-40 overflow-y-auto space-y-2">
                  {filteredGroups.length > 0 ? (
                    filteredGroups.map(group => (
                      <Link
                        key={group.id}
                        href={`/groups/${group.id}`}
                        className="block py-2 text-sm text-metal-silver hover:text-metal-gold transition-colors font-metal-display"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        🤘 {group.name}
                      </Link>
                    ))
                  ) : (
                    <div className="text-sm text-metal-silver/60">❌ Ничего не найдено</div>
                  )}
                </div>
              </div>
            </div>

            <Link
              href="/admin"
              className="metal-btn w-full text-center flex items-center justify-center space-x-2 py-3 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaLock className="text-lg" />
              <span>🔐 АДМИН</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
