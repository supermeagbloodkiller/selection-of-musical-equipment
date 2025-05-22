'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaGuitar, FaMusic } from 'react-icons/fa';

export default function BlackSabbathPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero секция */}
      <section className="py-12 bg-gradient-to-r from-dark/20 to-secondary/10">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Black Sabbath</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Британская рок-группа, основанная в 1968 году в Бирмингеме. Считается одной из групп-основательниц хэви-метала и оказала огромное влияние на развитие тяжелой музыки.
          </p>
        </div>
      </section>
      
      {/* Секция с гитаристами */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FaGuitar className="text-dark mr-3" /> 
            Гитаристы Black Sabbath
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Тони Айомми */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Тони Айомми</h3>
              <p className="mb-4">
                Основатель и единственный постоянный участник Black Sabbath. Считается "крестным отцом" хэви-метала. Потерял кончики пальцев в промышленной аварии, что повлияло на его уникальный стиль игры.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gibson SG Standard (основная гитара)</li>
                <li>Gibson SG Custom</li>
                <li>Laney усилители (собственная линейка)</li>
                <li>Специальные пластиковые наконечники на пальцы</li>
                <li>Пониженный строй гитары</li>
              </ul>
            </div>
            
            {/* Закк Уайлд */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Закк Уайлд</h3>
              <p className="text-gray-700 mb-4">
                Гитарист Black Sabbath в 1987-1995 годах. Известен своим виртуозным стилем и работой с Ozzy Osbourne в сольной карьере.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gibson Les Paul Custom (Bullseye)</li>
                <li>Marshall JCM800 усилители</li>
                <li>Dunlop Cry Baby Wah</li>
                <li>MXR Chorus</li>
                <li>Техника pinch harmonics</li>
              </ul>
            </div>
            
            {/* Адам Уэйкман */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Адам Уэйкман</h3>
              <p className="text-gray-700 mb-4">
                Гитарист Black Sabbath в 2004-2017 годах. Сын клавишника Рика Уэйкмана из Yes, также играл с Ozzy Osbourne.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gibson Les Paul</li>
                <li>Marshall усилители</li>
                <li>Различные эффекты для студийной работы</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Секция с басистами */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FaMusic className="text-dark mr-3" /> 
            Басисты Black Sabbath
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Гизер Батлер */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Гизер Батлер</h3>
              <p className="mb-4">
                Оригинальный басист и один из основателей Black Sabbath. Считается одним из самых влиятельных басистов в хэви-метале, создал многие классические басовые линии группы.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fender Precision Bass</li>
                <li>Fender Jazz Bass</li>
                <li>Marshall Super Bass усилители</li>
                <li>Ampeg SVT усилители</li>
                <li>Пониженный строй для тяжелого звука</li>
              </ul>
            </div>
            
            {/* Нил Мюррей */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Нил Мюррей</h3>
              <p className="text-gray-700 mb-4">
                Басист Black Sabbath в различные периоды (1989-1990, 1994-1997). Также известен по работе с Whitesnake и другими рок-группами.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fender Precision Bass</li>
                <li>Music Man StingRay</li>
                <li>Ampeg усилители</li>
                <li>Классический рок-звук</li>
              </ul>
            </div>
            
            {/* Терри Чаймс */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Терри Чаймс</h3>
              <p className="text-gray-700 mb-4">
                Басист Black Sabbath в 1987-1988 годах. Ранее был известен как барабанщик The Clash.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fender Bass guitars</li>
                <li>Marshall усилители</li>
                <li>Переход от барабанов к басу</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Дополнительная информация */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Влияние на музыку</h2>
          <p className="text-lg text-gray-700 mb-8">
            Black Sabbath создали основы хэви-метала, введя более тяжелое и мрачное звучание в рок-музыку. Их использование пониженного строя, тяжелых риффов и мрачной тематики текстов заложило фундамент для всего жанра метала.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">Знаковые альбомы:</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li><strong>Black Sabbath (1970)</strong> - дебютный альбом, создавший хэви-метал</li>
            <li><strong>Paranoid (1970)</strong> - содержит классики "Iron Man" и "War Pigs"</li>
            <li><strong>Master of Reality (1971)</strong> - еще более тяжелое звучание</li>
            <li><strong>13 (2013)</strong> - последний студийный альбом оригинального состава</li>
          </ul>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
