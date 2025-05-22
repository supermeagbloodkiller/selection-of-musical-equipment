'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ImageGallery from '../../../components/ImageGallery';
import OptimizedImage from '../../../components/OptimizedImage';
import { FaGuitar, FaMusic } from 'react-icons/fa';

export default function MegadethPage() {
  // Примеры изображений (в реальном проекте будут загружаться из Supabase)
  const bandImages = [
    {
      url: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Megadeth+Band',
      alt: 'Megadeth группа',
      caption: 'Megadeth в полном составе'
    },
    {
      url: 'https://via.placeholder.com/400x300/2a2a2a/ffffff?text=Dave+Mustaine',
      alt: 'Дэйв Мастейн',
      caption: 'Дэйв Мастейн с гитарой'
    }
  ];

  const guitarImages = [
    {
      url: 'https://via.placeholder.com/300x400/3a3a3a/ffffff?text=Dean+Guitar',
      alt: 'Dean гитара',
      caption: 'Dean VMNT Signature гитара Дэйва Мастейна'
    },
    {
      url: 'https://via.placeholder.com/300x400/4a4a4a/ffffff?text=Jackson+Guitar',
      alt: 'Jackson гитара',
      caption: 'Jackson King V'
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Hero секция */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-metal-black via-metal-gray to-metal-black relative overflow-hidden">
        {/* Металлические эффекты фона */}
        <div className="absolute inset-0 bg-gradient-to-r from-metal-red/10 via-transparent to-metal-gold/10"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-metal-red/20 rounded-full blur-3xl animate-rock-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-metal-gold/20 rounded-full blur-3xl animate-rock-pulse delay-1000"></div>

        <div className="container mx-auto relative z-10">
          <h1 className="metal-title text-5xl md:text-7xl mb-8 text-center animate-metal-shine">
            ⚡ MEGADETH ⚡
          </h1>
          <p className="text-xl md:text-2xl text-metal-silver max-w-4xl mx-auto text-center leading-relaxed">
            Американская трэш-метал группа, основанная в 1983 году гитаристом и вокалистом Дэйвом Мастейном
            и басистом Дэвидом Эллефсоном после ухода Мастейна из Metallica. Одна из "Большой четверки" трэш-метала.
          </p>
          <div className="text-center mt-8">
            <span className="metal-subtitle text-lg text-metal-gold">
              🤘 THRASH METAL LEGENDS 🤘
            </span>
          </div>
        </div>
      </section>

      {/* Секция с гитаристами */}
      <section className="py-20 bg-gradient-to-b from-metal-gray to-metal-black">
        <div className="container mx-auto">
          <h2 className="metal-title text-4xl md:text-5xl mb-16 text-center">
            🎸 МАСТЕРА ГИТАРЫ 🎸
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Дэйв Мастейн */}
            <div className="evh-card p-8 text-metal-silver animate-metal-glow">
              <h3 className="metal-subtitle text-2xl mb-4 text-metal-gold">⚡ ДЭЙВ МАСТЕЙН ⚡</h3>
              <p className="text-metal-silver/80 mb-6 leading-relaxed">
                Основатель, вокалист и ведущий гитарист Megadeth. Известен своим агрессивным стилем игры,
                сложными риффами и техничными соло. Один из величайших трэш-метал гитаристов всех времен.
              </p>
              <h4 className="metal-subtitle text-lg mb-4 text-metal-red">🔥 АРСЕНАЛ МАСТЕЙНА:</h4>
              <ul className="space-y-2 text-metal-silver/90">
                <li className="flex items-center"><span className="text-metal-gold mr-2">🎸</span> Dean VMNT Signature гитары</li>
                <li className="flex items-center"><span className="text-metal-gold mr-2">🎸</span> Jackson King V (ранние годы)</li>
                <li className="flex items-center"><span className="text-metal-gold mr-2">🎸</span> ESP DV8 (1990-е)</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">🔊</span> Усилители Marshall JVM410H</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">⚡</span> MXR Super Badass Distortion, Dunlop Cry Baby Wah</li>
              </ul>
            </div>

            {/* Крис Бродерик */}
            <div className="evh-card p-8 text-metal-silver">
              <h3 className="metal-subtitle text-2xl mb-4 text-metal-gold">🎯 КРИС БРОДЕРИК 🎯</h3>
              <p className="text-metal-silver/80 mb-6 leading-relaxed">
                Бывший гитарист Megadeth (2008-2014). Известен своей невероятной техничностью, скоростью игры
                и классическим музыкальным образованием. Мастер как 6-струнных, так и 7-струнных гитар.
              </p>
              <h4 className="metal-subtitle text-lg mb-4 text-metal-red">🔥 АРСЕНАЛ БРОДЕРИКА:</h4>
              <ul className="space-y-2 text-metal-silver/90">
                <li className="flex items-center"><span className="text-metal-gold mr-2">🎸</span> Jackson Chris Broderick Signature Soloist</li>
                <li className="flex items-center"><span className="text-metal-gold mr-2">🎸</span> Ibanez Prestige 7-струнные гитары</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">🔊</span> Усилители EVH 5150 III</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">⚡</span> ISP Decimator, TC Electronic Flashback Delay</li>
              </ul>
            </div>

            {/* Марти Фридман */}
            <div className="evh-card p-8 text-metal-silver">
              <h3 className="metal-subtitle text-2xl mb-4 text-metal-gold">🌸 МАРТИ ФРИДМАН 🌸</h3>
              <p className="text-metal-silver/80 mb-6 leading-relaxed">
                Гитарист Megadeth в 1990-2000 годах. Известен своим уникальным стилем с элементами восточной музыки,
                необычными гармониями и мелодичными соло. Создал неповторимое звучание группы в 90-е.
              </p>
              <h4 className="metal-subtitle text-lg mb-4 text-metal-red">🔥 АРСЕНАЛ ФРИДМАНА:</h4>
              <ul className="space-y-2 text-metal-silver/90">
                <li className="flex items-center"><span className="text-metal-gold mr-2">🎸</span> Jackson Kelly Custom</li>
                <li className="flex items-center"><span className="text-metal-gold mr-2">🎸</span> PRS Custom 24</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">🔊</span> Engl Signature Marty Friedman Inferno 100</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">⚡</span> Engl Z-9 Overdrive, Pro Co RAT</li>
              </ul>
            </div>

            {/* Кико Лоурейро */}
            <div className="evh-card p-8 text-metal-silver animate-metal-glow">
              <h3 className="metal-subtitle text-2xl mb-4 text-metal-gold">🇧🇷 КИКО ЛОУРЕЙРО 🇧🇷</h3>
              <p className="text-metal-silver/80 mb-6 leading-relaxed">
                Текущий гитарист Megadeth (с 2015). Бразильский виртуоз, ранее известный по группе Angra.
                Привнес в Megadeth элементы прогрессивного метала и латиноамериканской музыки.
              </p>
              <h4 className="metal-subtitle text-lg mb-4 text-metal-red">🔥 АРСЕНАЛ ЛОУРЕЙРО:</h4>
              <ul className="space-y-2 text-metal-silver/90">
                <li className="flex items-center"><span className="text-metal-gold mr-2">🎸</span> Ibanez Kiko Loureiro Signature KIKO10BP</li>
                <li className="flex items-center"><span className="text-metal-gold mr-2">🎸</span> ESP E-II Horizon</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">🔊</span> Усилители Marshall JVM410H</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">⚡</span> Ibanez Tube Screamer, MXR Carbon Copy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с басистами */}
      <section className="py-20 bg-gradient-to-t from-metal-black via-metal-gray to-metal-black">
        <div className="container mx-auto">
          <h2 className="metal-title text-4xl md:text-5xl mb-16 text-center">
            🎸 КОРОЛИ БАСА 🎸
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Дэвид Эллефсон */}
            <div className="evh-card p-8 text-metal-silver animate-metal-glow">
              <h3 className="metal-subtitle text-2xl mb-4 text-metal-gold">🎯 ДЭВИД ЭЛЛЕФСОН 🎯</h3>
              <p className="text-metal-silver/80 mb-6 leading-relaxed">
                Один из основателей Megadeth, играл в группе в 1983-2002 и 2010-2021 годах.
                Создал фундаментальные басовые линии, которые стали основой звучания трэш-метала.
              </p>
              <h4 className="metal-subtitle text-lg mb-4 text-metal-red">🔥 АРСЕНАЛ ЭЛЛЕФСОНА:</h4>
              <ul className="space-y-2 text-metal-silver/90">
                <li className="flex items-center"><span className="text-metal-gold mr-2">🎸</span> Jackson David Ellefson Signature Concert Bass</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">🔊</span> Hartke LH1000 усилители</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">🔊</span> Hartke HyDrive колонки</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">⚡</span> Hartke Bass Attack 2, Aguilar Agro</li>
              </ul>
            </div>

            {/* Джеймс Ломенцо */}
            <div className="evh-card p-8 text-metal-silver">
              <h3 className="metal-subtitle text-2xl mb-4 text-metal-gold">🔥 ДЖЕЙМС ЛОМЕНЦО 🔥</h3>
              <p className="text-metal-silver/80 mb-6 leading-relaxed">
                Басист Megadeth в 2006-2010 годах и снова с 2021 года по настоящее время.
                Ветеран метал-сцены, известный своей мощной игрой и профессионализмом.
              </p>
              <h4 className="metal-subtitle text-lg mb-4 text-metal-red">🔥 АРСЕНАЛ ЛОМЕНЦО:</h4>
              <ul className="space-y-2 text-metal-silver/90">
                <li className="flex items-center"><span className="text-metal-gold mr-2">🎸</span> Warwick Streamer бас-гитары</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">🔊</span> Ampeg SVT-4PRO усилители</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">🔊</span> Ampeg 8x10 кабинеты</li>
                <li className="flex items-center"><span className="text-metal-red mr-2">⚡</span> Tech 21 SansAmp Bass Driver DI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Галерея изображений */}
      <section className="py-20 bg-gradient-to-b from-metal-gray to-metal-black relative overflow-hidden">
        {/* Фоновые эффекты */}
        <div className="absolute inset-0 bg-gradient-to-r from-metal-red/5 via-transparent to-metal-gold/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-metal-red via-metal-gold to-metal-red"></div>

        <div className="container mx-auto relative z-10">
          <h2 className="metal-title text-4xl md:text-5xl mb-16 text-center">
            📸 ФОТОГАЛЕРЕЯ 📸
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="evh-card p-6">
              <h3 className="metal-subtitle text-2xl mb-6 text-center text-metal-gold">
                🤘 ГРУППА MEGADETH 🤘
              </h3>
              <ImageGallery
                images={bandImages}
                title="Группа Megadeth"
              />
            </div>
            <div className="evh-card p-6">
              <h3 className="metal-subtitle text-2xl mb-6 text-center text-metal-gold">
                🎸 ИНСТРУМЕНТЫ 🎸
              </h3>
              <ImageGallery
                images={guitarImages}
                title="Инструменты"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="metal-subtitle text-lg text-metal-gold">
              🔥 THRASH METAL FOREVER 🔥
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
