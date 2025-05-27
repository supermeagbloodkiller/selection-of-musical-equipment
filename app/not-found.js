'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaHome, FaMusic, FaGuitar, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />
      
      {/* 404 Hero секция */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Фоновые эффекты */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto relative z-10 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* 404 иконка */}
            <div className="mb-8">
              <FaExclamationTriangle className="text-6xl md:text-8xl text-red-600 mx-auto mb-4 animate-pulse" />
            </div>
            
            {/* Заголовок */}
            <h1 className="main-title text-6xl md:text-8xl lg:text-9xl mb-6 text-red-600">
              404
            </h1>
            
            <h2 className="subtitle text-2xl md:text-4xl mb-8 text-black">
              🎵 Страница не найдена 🎵
            </h2>
            
            {/* Описание */}
            <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
              Похоже, что эта страница исчезла как последний аккорд песни. 
              Но не волнуйтесь - у нас есть много других музыкальных сокровищ!
            </p>
            
            {/* Кнопки навигации */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link 
                href="/" 
                className="music-btn text-lg px-8 py-4 rounded-lg group flex items-center justify-center space-x-2"
              >
                <FaHome className="text-xl" />
                <span>Главная</span>
              </Link>
              
              <Link 
                href="/groups" 
                className="music-btn text-lg px-8 py-4 rounded-lg group flex items-center justify-center space-x-2"
              >
                <FaMusic className="text-xl" />
                <span>Группы</span>
              </Link>
              
              <Link 
                href="/groups/megadeth" 
                className="music-btn text-lg px-8 py-4 rounded-lg group flex items-center justify-center space-x-2"
              >
                <FaGuitar className="text-xl" />
                <span>Megadeth</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Секция с популярными группами */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="main-title text-3xl md:text-4xl text-center mb-12">
            🎸 Популярные группы 🎸
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Megadeth', href: '/groups/megadeth', emoji: '🎸' },
              { name: 'Metallica', href: '/groups/metallica', emoji: '🎶' },
              { name: 'Iron Maiden', href: '/groups/ironmaiden', emoji: '🎵' },
              { name: 'Black Sabbath', href: '/groups/blacksabbath', emoji: '🎸' },
              { name: 'AC/DC', href: '/groups/acdc', emoji: '⚡' },
              { name: 'Van Halen', href: '/groups/vanhalen', emoji: '🎵' }
            ].map((group, index) => (
              <Link 
                key={index}
                href={group.href}
                className="music-card p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-4xl mb-4">{group.emoji}</div>
                <h3 className="text-xl font-bold text-red-600 group-hover:text-red-700">
                  {group.name}
                </h3>
                <p className="text-gray-600 mt-2">Узнать больше →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Секция с советами */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="main-title text-3xl md:text-4xl mb-8">
            🎵 Что делать дальше? 🎵
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="music-card p-6">
              <FaMusic className="text-4xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-red-600">
                Исследуйте группы
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Откройте для себя легендарные музыкальные коллективы, 
                их историю и используемое оборудование.
              </p>
            </div>
            
            <div className="music-card p-6">
              <FaGuitar className="text-4xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-red-600">
                Изучайте инструменты
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Узнайте о гитарах, басах и оборудовании, 
                которое использовали великие музыканты.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="subtitle text-lg text-red-600">
              🎵 MUSIC NEVER DIES 🎵
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
