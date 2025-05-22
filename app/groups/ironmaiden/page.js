'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaGuitar, FaMusic } from 'react-icons/fa';

export default function IronMaidenPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero секция */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-dark/10">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Iron Maiden</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Британская хэви-метал группа, основанная в 1975 году басистом Стивом Харрисом. Одна из самых влиятельных и успешных метал-групп, известная сложными композициями и театральными выступлениями.
          </p>
        </div>
      </section>
      
      {/* Секция с гитаристами */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FaGuitar className="text-primary mr-3" /> 
            Гитаристы Iron Maiden
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Дэйв Мюррей */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Дэйв Мюррей</h3>
              <p className="mb-4">
                Ведущий гитарист Iron Maiden с 1976 года. Известен своими мелодичными соло и использованием Fender Stratocaster в хэви-метале.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fender Stratocaster (различные модели)</li>
                <li>Marshall JCM2000 усилители</li>
                <li>Boss CE-1 Chorus</li>
                <li>Yamaha SPX90 эффекты</li>
                <li>Мелодичный стиль игры</li>
              </ul>
            </div>
            
            {/* Адриан Смит */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Адриан Смит</h3>
              <p className="text-gray-700 mb-4">
                Гитарист Iron Maiden в 1980-1990 и с 1999 года по настоящее время. Также известен как автор песен и вокалист.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Jackson Adrian Smith Signature</li>
                <li>Fender Stratocaster</li>
                <li>Marshall JCM2000 усилители</li>
                <li>Boss эффекты</li>
                <li>Сочетание ритма и соло</li>
              </ul>
            </div>
            
            {/* Янник Герс */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Янник Герс</h3>
              <p className="text-gray-700 mb-4">
                Гитарист Iron Maiden с 1990 года. Заменил Адриана Смита и остался в группе даже после его возвращения, создав трио гитаристов.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fender Stratocaster</li>
                <li>Marshall усилители</li>
                <li>Различные эффекты для атмосферы</li>
                <li>Классический метал-звук</li>
              </ul>
            </div>
            
            {/* Деннис Страттон */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Деннис Страттон (1979-1980)</h3>
              <p className="mb-4">
                Ранний гитарист Iron Maiden, играл на первом альбоме группы. Покинул группу из-за творческих разногласий.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fender Stratocaster</li>
                <li>Marshall усилители</li>
                <li>Классический рок-звук конца 70-х</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Секция с басистами */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FaMusic className="text-primary mr-3" /> 
            Басисты Iron Maiden
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Стив Харрис */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Стив Харрис</h3>
              <p className="mb-4">
                Основатель, басист и главный автор песен Iron Maiden. Считается одним из лучших басистов в метале, известен своим галопирующим стилем игры и сложными басовыми линиями.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fender Precision Bass (основной инструмент)</li>
                <li>Fender Jazz Bass</li>
                <li>Marshall Super Bass усилители</li>
                <li>Trace Elliot усилители</li>
                <li>Игра пальцами, галопирующий ритм</li>
              </ul>
            </div>
            
            {/* Дополнительная информация о Стиве Харрисе */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Стиль игры Стива Харриса</h3>
              <p className="text-gray-700 mb-4">
                Стив Харрис является единственным басистом Iron Maiden за всю историю группы. Его уникальный стиль определил звучание группы.
              </p>
              <h4 className="text-lg font-semibold mb-2">Особенности стиля:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Галопирующие ритмы (galloping bass)</li>
                <li>Сложные мелодические линии</li>
                <li>Игра исключительно пальцами</li>
                <li>Высокие ноты и мелодичность</li>
                <li>Влияние прогрессивного рока</li>
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
            Iron Maiden стали пионерами британского хэви-метала и оказали огромное влияние на развитие жанра. Их сложные композиции, литературные тексты и театральные выступления с талисманом Эдди установили новые стандарты для метал-музыки.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">Знаковые альбомы:</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li><strong>Iron Maiden (1980)</strong> - дебютный альбом, заложивший основы</li>
            <li><strong>The Number of the Beast (1982)</strong> - прорывной альбом с Брюсом Дикинсоном</li>
            <li><strong>Powerslave (1984)</strong> - один из лучших альбомов группы</li>
            <li><strong>Seventh Son of a Seventh Son (1988)</strong> - концептуальный альбом</li>
            <li><strong>Fear of the Dark (1992)</strong> - содержит одноименный хит</li>
          </ul>
          
          <h3 className="text-2xl font-bold mb-4 mt-8">Уникальные особенности:</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Три гитариста в составе (с 1999 года)</li>
            <li>Брюс Дикинсон - пилот авиакомпании и фехтовальщик</li>
            <li>Эдди - знаменитый талисман группы</li>
            <li>Длинные эпические композиции</li>
            <li>Тексты на исторические и литературные темы</li>
          </ul>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
