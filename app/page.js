'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaGuitar, FaUsers, FaMusic } from 'react-icons/fa';

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero секция */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Фоновые эффекты */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="main-title text-4xl md:text-7xl mb-6 animate-title-shine">
            🎵 МУЗЫКАЛЬНЫЕ ЛЕГЕНДЫ 🎵
          </h1>
          <h2 className="subtitle text-xl md:text-3xl mb-8">
            Легендарные Группы и Их Инструменты
          </h2>
          <p className="text-lg md:text-xl text-black mb-12 max-w-4xl mx-auto leading-relaxed">
            Откройте для себя мир музыки и узнайте о величайших гитаристах и басистах,
            их легендарных инструментах и неоценимом вкладе в историю музыки
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/groups/megadeth" className="music-btn text-lg px-8 py-4 rounded-lg group">
              <span className="flex items-center justify-center gap-2">
                🎸 MEGADETH 🎸
              </span>
            </Link>
            <Link href="/groups/vanhalen" className="music-btn text-lg px-8 py-4 rounded-lg group">
              <span className="flex items-center justify-center gap-2">
                🎵 VAN HALEN 🎵
              </span>
            </Link>
            <Link href="/groups/metallica" className="music-btn text-lg px-8 py-4 rounded-lg group">
              <span className="flex items-center justify-center gap-2">
                🎶 METALLICA 🎶
              </span>
            </Link>
            <Link href="/groups/acdc" className="music-btn text-lg px-8 py-4 rounded-lg group">
              <span className="flex items-center justify-center gap-2">
                ⚡ AC/DC ⚡
              </span>
            </Link>
            <Link href="/groups/blacksabbath" className="music-btn text-lg px-8 py-4 rounded-lg group">
              <span className="flex items-center justify-center gap-2">
                🎸 BLACK SABBATH 🎸
              </span>
            </Link>
            <Link href="/groups/ironmaiden" className="music-btn text-lg px-8 py-4 rounded-lg group">
              <span className="flex items-center justify-center gap-2">
                🎵 IRON MAIDEN 🎵
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Секция с карточками */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="main-title text-3xl md:text-5xl text-center mb-16">
            🎸 МУЗЫКАЛЬНЫЕ ИНСТРУМЕНТЫ 🎸
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Гитарная карточка */}
            <div className="music-card p-8 flex flex-col items-center text-center">
              <FaGuitar className="text-5xl text-red-600 mb-6 animate-pulse" />
              <h3 className="subtitle text-xl mb-4 text-black">ГИТАРИСТЫ</h3>
              <p className="text-gray-700 leading-relaxed">
                Мастера шестиструнных инструментов, создавшие легендарные риффы
                и соло, которые навсегда изменили мир музыки
              </p>
              <div className="mt-4 text-red-600 text-sm">
                🎸 Gibson • Fender • PRS 🎸
              </div>
            </div>

            {/* Центральная карточка с особым эффектом */}
            <div className="music-card p-8 flex flex-col items-center text-center animate-glow">
              <FaUsers className="text-5xl text-red-600 mb-6 animate-pulse" />
              <h3 className="subtitle text-xl mb-4 text-black">ЛЕГЕНДЫ</h3>
              <p className="text-gray-700 leading-relaxed">
                Бессмертные группы, чьи имена высечены в истории музыки.
                Их творчество продолжает вдохновлять новые поколения музыкантов
              </p>
              <div className="mt-4 text-red-600 text-sm">
                🎵 MUSIC FOREVER 🎵
              </div>
            </div>

            {/* Басовая карточка */}
            <div className="music-card p-8 flex flex-col items-center text-center">
              <FaMusic className="text-5xl text-red-600 mb-6 animate-pulse" />
              <h3 className="subtitle text-xl mb-4 text-black">БАСИСТЫ</h3>
              <p className="text-gray-700 leading-relaxed">
                Фундамент музыкального звука. Басисты, чьи мощные линии
                создают основу для самых энергичных композиций в истории
              </p>
              <div className="mt-4 text-red-600 text-sm">
                🎸 Rickenbacker • Fender • Music Man 🎸
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с призывом к действию */}
      <section className="py-20 bg-gradient-to-t from-white via-gray-50 to-white relative overflow-hidden">
        {/* Фоновые эффекты */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-gray-400 to-red-600"></div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="main-title text-3xl md:text-5xl mb-8">
            🎵 ИССЛЕДУЙТЕ МИР МУЗЫКИ 🎵
          </h2>
          <p className="text-xl md:text-2xl text-black mb-12 max-w-4xl mx-auto leading-relaxed">
            Используйте навигацию для исследования легендарных групп.
            Каждая страница - это портал в историю величайших музыкальных коллективов,
            их инструментов и неоценимого вклада в культуру музыки.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="music-card p-8 group">
              <h3 className="subtitle text-xl mb-4 text-red-600">
                ⚡ МАСТЕРА ГИТАРЫ ⚡
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Откройте секреты техники игры, узнайте о легендарных инструментах
                и влиянии великих гитаристов на эволюцию музыки
              </p>
              <div className="text-red-600 text-sm font-arial">
                Gibson • Les Paul • Stratocaster • Flying V
              </div>
            </div>

            <div className="music-card p-8 group">
              <h3 className="subtitle text-xl mb-4 text-red-600">
                🎸 МАСТЕРА БАСА 🎸
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Изучите мощные басовые линии, профессиональное оборудование
                и уникальный стиль игры легендарных басистов
              </p>
              <div className="text-red-600 text-sm font-arial">
                Rickenbacker • Fender • Music Man • Warwick
              </div>
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
