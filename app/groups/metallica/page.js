'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaGuitar, FaMusic } from 'react-icons/fa';

export default function MetallicaPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero секция */}
      <section className="py-12 bg-gradient-to-r from-dark/10 to-primary/10">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Metallica</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Американская трэш-метал группа, основанная в 1981 году в Лос-Анджелесе. Одна из самых влиятельных и коммерчески успешных метал-групп в истории.
          </p>
        </div>
      </section>
      
      {/* Секция с гитаристами */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FaGuitar className="text-primary mr-3" /> 
            Гитаристы Metallica
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Джеймс Хетфилд */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Джеймс Хетфилд</h3>
              <p className="mb-4">
                Основатель, вокалист и ритм-гитарист Metallica. Известен своим мощным вокалом и агрессивным стилем игры на ритм-гитаре.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>ESP James Hetfield Signature гитары</li>
                <li>Gibson Explorer (ранние годы)</li>
                <li>Mesa/Boogie Mark IIC+ усилители</li>
                <li>Педали эффектов: Ibanez Tube Screamer, Boss NS-2</li>
              </ul>
            </div>
            
            {/* Кирк Хэммет */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Кирк Хэммет</h3>
              <p className="text-gray-700 mb-4">
                Ведущий гитарист Metallica с 1983 года. Известен своими мелодичными соло и использованием wah-педали.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>ESP KH-2 Signature гитары</li>
                <li>Gibson Flying V</li>
                <li>Mesa/Boogie Strategy 400 усилители</li>
                <li>Педали эффектов: Dunlop Cry Baby Wah, Boss DD-3 Delay</li>
              </ul>
            </div>
            
            {/* Дэйв Мастейн (бывший) */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Дэйв Мастейн (1981-1983)</h3>
              <p className="text-gray-700 mb-4">
                Один из основателей Metallica, играл на ведущей гитаре до 1983 года. После ухода основал группу Megadeth.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gibson Flying V</li>
                <li>Jackson Randy Rhoads</li>
                <li>Marshall JCM800 усилители</li>
                <li>Педали эффектов: MXR Distortion+</li>
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
            Басисты Metallica
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Роберт Трухильо */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Роберт Трухильо</h3>
              <p className="mb-4">
                Басист Metallica с 2003 года по настоящее время. Ранее играл в Suicidal Tendencies и Ozzy Osbourne.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fernandes Gravity 4 Deluxe Bass</li>
                <li>Warwick Robert Trujillo Signature</li>
                <li>Mesa/Boogie Bass Strategy усилители</li>
                <li>Педали эффектов: Dunlop Bass Wah, Tech 21 SansAmp</li>
              </ul>
            </div>
            
            {/* Клифф Бертон */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Клифф Бертон (1982-1986)</h3>
              <p className="text-gray-700 mb-4">
                Легендарный басист Metallica, погибший в автокатастрофе в 1986 году. Считается одним из лучших басистов в метале.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Rickenbacker 4001 Bass</li>
                <li>Aria Pro II SB-1000</li>
                <li>Mesa/Boogie усилители</li>
                <li>Педали эффектов: Morley Power Wah, Big Muff Pi</li>
              </ul>
            </div>
            
            {/* Джейсон Ньюстед */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Джейсон Ньюстед (1986-2001)</h3>
              <p className="text-gray-700 mb-4">
                Заменил Клиффа Бертона и играл в группе 15 лет. Известен своим агрессивным стилем и энергичными выступлениями.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sadowsky Jason Newsted Signature</li>
                <li>Alembic Series I Bass</li>
                <li>Mesa/Boogie Bass 400+ усилители</li>
                <li>Педали эффектов: Tech 21 SansAmp Bass Driver</li>
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
            Metallica стала одной из "большой четверки" трэш-метала наряду с Megadeth, Slayer и Anthrax. Группа эволюционировала от агрессивного трэш-метала к более мелодичному хард-року, что помогло им достичь коммерческого успеха и привлечь широкую аудиторию.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">Знаковые альбомы:</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li><strong>Kill 'Em All (1983)</strong> - дебютный альбом с классикой трэш-метала</li>
            <li><strong>Master of Puppets (1986)</strong> - считается лучшим альбомом группы</li>
            <li><strong>Metallica (Black Album) (1991)</strong> - самый коммерчески успешный альбом</li>
            <li><strong>Death Magnetic (2008)</strong> - возвращение к корням трэш-метала</li>
          </ul>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
