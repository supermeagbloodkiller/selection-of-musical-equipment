'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaGuitar, FaMusic } from 'react-icons/fa';

export default function ACDCPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero секция */}
      <section className="py-12 bg-gradient-to-r from-secondary/10 to-dark/10">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AC/DC</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Австралийская хард-рок группа, основанная в 1973 году братьями Янгами. Одна из самых влиятельных рок-групп всех времен, известная своим мощным звуком и энергичными выступлениями.
          </p>
        </div>
      </section>
      
      {/* Секция с гитаристами */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FaGuitar className="text-secondary mr-3" /> 
            Гитаристы AC/DC
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ангус Янг */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Ангус Янг</h3>
              <p className="mb-4">
                Ведущий гитарист и один из основателей AC/DC. Известен своими энергичными выступлениями в школьной форме и мощными гитарными риффами.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gibson SG Standard (основная гитара)</li>
                <li>Gibson SG Custom</li>
                <li>Marshall JTM45/100 усилители</li>
                <li>Marshall 1960A кабинеты</li>
                <li>Минимум эффектов - чистый звук усилителя</li>
              </ul>
            </div>
            
            {/* Малкольм Янг */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Малкольм Янг (1973-2014)</h3>
              <p className="text-gray-700 mb-4">
                Ритм-гитарист и основатель AC/DC, старший брат Ангуса. Считался "движущей силой" группы и мастером ритм-гитары.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gretsch Jet Firebird</li>
                <li>Gretsch White Falcon</li>
                <li>Marshall JTM45 усилители</li>
                <li>Простая настройка без эффектов</li>
              </ul>
            </div>
            
            {/* Стиви Янг */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Стиви Янг</h3>
              <p className="text-gray-700 mb-4">
                Племянник братьев Янг, заменил Малкольма на ритм-гитаре с 2014 года. Поддерживает традиционный звук AC/DC.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gretsch guitars (аналогично Малкольму)</li>
                <li>Marshall усилители</li>
                <li>Классический AC/DC звук</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Секция с басистами */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FaMusic className="text-secondary mr-3" /> 
            Басисты AC/DC
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Клифф Уильямс */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Клифф Уильямс</h3>
              <p className="mb-4">
                Басист AC/DC с 1977 по 2016 год. Известен своим стабильным и мощным стилем игры, который стал основой звучания группы.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Music Man StingRay Bass</li>
                <li>Fender Precision Bass</li>
                <li>Marshall Super Bass усилители</li>
                <li>Marshall 4x12 кабинеты</li>
                <li>Простая настройка без эффектов</li>
              </ul>
            </div>
            
            {/* Крис Чейни */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Крис Чейни</h3>
              <p className="text-gray-700 mb-4">
                Басист AC/DC с 2016 года по настоящее время. Ранее играл в The Cult и других известных группах.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Music Man StingRay Bass</li>
                <li>Fender Precision Bass</li>
                <li>Marshall усилители</li>
                <li>Поддерживает классический звук AC/DC</li>
              </ul>
            </div>
            
            {/* Марк Эванс */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Марк Эванс (1975-1977)</h3>
              <p className="text-gray-700 mb-4">
                Ранний басист AC/DC, играл на первых альбомах группы. Покинул группу из-за творческих разногласий.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fender Precision Bass</li>
                <li>Marshall усилители</li>
                <li>Классический рок-звук 70-х</li>
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
            AC/DC определили звучание хард-рока и оказали огромное влияние на развитие рок-музыки. Их простой, но мощный подход к музыке, основанный на сильных риффах и энергичных выступлениях, стал эталоном для многих рок-групп.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">Знаковые альбомы:</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li><strong>High Voltage (1975)</strong> - дебютный международный альбом</li>
            <li><strong>Highway to Hell (1979)</strong> - прорывной альбом с Боном Скоттом</li>
            <li><strong>Back in Black (1980)</strong> - один из самых продаваемых альбомов в истории</li>
            <li><strong>For Those About to Rock (1981)</strong> - первый альбом, достигший #1 в США</li>
          </ul>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
