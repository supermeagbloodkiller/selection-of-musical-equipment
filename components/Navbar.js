'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes, FaGuitar, FaLock } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link 
            href="/groups/megadeth" 
            className={`nav-link ${pathname === '/groups/megadeth' ? 'active-nav-link' : ''}`}
          >
            Megadeth
          </Link>
          <Link 
            href="/groups/vanhalen" 
            className={`nav-link ${pathname === '/groups/vanhalen' ? 'active-nav-link' : ''}`}
          >
            Van Halen
          </Link>
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
            <Link 
              href="/groups/megadeth" 
              className={`nav-link ${pathname === '/groups/megadeth' ? 'active-nav-link' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Megadeth
            </Link>
            <Link 
              href="/groups/vanhalen" 
              className={`nav-link ${pathname === '/groups/vanhalen' ? 'active-nav-link' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Van Halen
            </Link>
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
