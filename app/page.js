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
      <section className="py-16 md:py-24 bg-gradient-to-br from-metal-black via-metal-gray to-metal-black relative overflow-hidden">
        {/* Металлические эффекты фона */}
        <div className="absolute inset-0 bg-gradient-to-r from-metal-red/10 via-transparent to-metal-gold/10"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-metal-red/20 rounded-full blur-3xl animate-rock-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-metal-gold/20 rounded-full blur-3xl animate-rock-pulse delay-1000"></div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="metal-title text-4xl md:text-7xl mb-6 animate-metal-shine">
            🤘 METAL LEGENDS 🤘
          </h1>
          <h2 className="metal-subtitle text-xl md:text-3xl mb-8">
            Храм Легендарных Рок-Групп
          </h2>
          <p className="text-lg md:text-xl text-metal-silver mb-12 max-w-4xl mx-auto leading-relaxed">
            Погрузитесь в мир тяжелого металла и узнайте о величайших гитаристах и басистах,
            их легендарных инструментах и неоценимом вкладе в историю рок-музыки
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/groups/megadeth" className="metal-btn text-lg px-8 py-4 rounded-lg group">
              <span className="flex items-center justify-center gap-2">
                ⚡ MEGADETH ⚡
              </span>
            </Link>
            <Link href="/groups/vanhalen" className="metal-btn text-lg px-8 py-4 rounded-lg group">
              <span className="flex items-center justify-center gap-2">
                🎸 VAN HALEN 🎸
              </span>
            </Link>
            <Link href="/groups/metallica" className="metal-btn text-lg px-8 py-4 rounded-lg group">
              <span className="flex items-center justify-center gap-2">
                🔥 METALLICA 🔥
              </span>
            </Link>
            <Link href="/groups/acdc" className="metal-btn text-lg px-8 py-4 rounded-lg group">
              <span className="flex items-center justify-center gap-2">
                ⚡ AC/DC ⚡
              </span>
            </Link>
            <Link href="/groups/blacksabbath" className="metal-btn text-lg px-8 py-4 rounded-lg group">
              <span className="flex items-center justify-center gap-2">
                🦇 BLACK SABBATH 🦇
              </span>
            </Link>
            <Link href="/groups/ironmaiden" className="metal-btn text-lg px-8 py-4 rounded-lg group">
              <span className="flex items-center justify-center gap-2">
                ⚔️ IRON MAIDEN ⚔️
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Секция с карточками */}
      <section className="py-20 bg-gradient-to-b from-metal-gray to-metal-black">
        <div className="container mx-auto">
          <h2 className="metal-title text-3xl md:text-5xl text-center mb-16">
            🎸 АРСЕНАЛ МЕТАЛЛА 🎸
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* EVH Гитарная карточка */}
            <div className="evh-card p-8 flex flex-col items-center text-center text-metal-silver">
              <FaGuitar className="text-5xl text-metal-red mb-6 animate-rock-pulse" />
              <h3 className="metal-subtitle text-xl mb-4">ГИТАРИСТЫ</h3>
              <p className="text-metal-silver/80 leading-relaxed">
                Мастера шестиструнных инструментов, создавшие легендарные риффы
                и соло, которые навсегда изменили мир рок-музыки
              </p>
              <div className="mt-4 text-metal-gold text-sm">
                ⚡ EVH • Gibson • Fender ⚡
              </div>
            </div>

            {/* Центральная карточка с особым эффектом */}
            <div className="evh-card p-8 flex flex-col items-center text-center text-metal-silver animate-metal-glow">
              <FaUsers className="text-5xl text-metal-gold mb-6 animate-rock-pulse" />
              <h3 className="metal-subtitle text-xl mb-4">ЛЕГЕНДЫ</h3>
              <p className="text-metal-silver/80 leading-relaxed">
                Бессмертные группы, чьи имена высечены в камне истории металла.
                Их музыка продолжает вдохновлять новые поколения рокеров
              </p>
              <div className="mt-4 text-metal-red text-sm">
                🤘 METAL FOREVER 🤘
              </div>
            </div>

            {/* EVH Басовая карточка */}
            <div className="evh-card p-8 flex flex-col items-center text-center text-metal-silver">
              <FaMusic className="text-5xl text-metal-red mb-6 animate-rock-pulse" />
              <h3 className="metal-subtitle text-xl mb-4">БАСИСТЫ</h3>
              <p className="text-metal-silver/80 leading-relaxed">
                Фундамент тяжелого звука. Басисты, чьи мощные линии
                создают основу для самых тяжелых композиций в истории
              </p>
              <div className="mt-4 text-metal-gold text-sm">
                🎸 Rickenbacker • Fender • Music Man 🎸
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с призывом к действию */}
      <section className="py-20 bg-gradient-to-t from-metal-black via-metal-gray to-metal-black relative overflow-hidden">
        {/* Фоновые эффекты */}
        <div className="absolute inset-0 bg-gradient-to-r from-metal-red/5 via-transparent to-metal-gold/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-metal-red via-metal-gold to-metal-red"></div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="metal-title text-3xl md:text-5xl mb-8">
            🔥 ВОЙДИТЕ В ХРАМ МЕТАЛЛА 🔥
          </h2>
          <p className="text-xl md:text-2xl text-metal-silver mb-12 max-w-4xl mx-auto leading-relaxed">
            Используйте навигацию для исследования легендарных групп.
            Каждая страница - это портал в историю величайших металлических коллективов,
            их инструментов и неоценимого вклада в культуру тяжелой музыки.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="evh-card p-8 group">
              <h3 className="metal-subtitle text-xl mb-4 text-metal-gold">
                ⚡ МАСТЕРА ГИТАРЫ ⚡
              </h3>
              <p className="text-metal-silver/80 leading-relaxed mb-4">
                Откройте секреты техники игры, узнайте о легендарных инструментах
                и влиянии великих гитаристов на эволюцию металла
              </p>
              <div className="text-metal-red text-sm font-metal">
                EVH • Les Paul • Stratocaster • Flying V
              </div>
            </div>

            <div className="evh-card p-8 group">
              <h3 className="metal-subtitle text-xl mb-4 text-metal-gold">
                🎸 КОРОЛИ БАСА 🎸
              </h3>
              <p className="text-metal-silver/80 leading-relaxed mb-4">
                Изучите мощные басовые линии, профессиональное оборудование
                и уникальный стиль игры легендарных басистов металла
              </p>
              <div className="text-metal-red text-sm font-metal">
                Rickenbacker • Fender • Music Man • Warwick
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="metal-subtitle text-lg text-metal-gold">
              🤘 METAL NEVER DIES 🤘
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
