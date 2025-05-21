'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaGuitar, FaMusic } from 'react-icons/fa';

export default function MegadethPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero секция */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Megadeth</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Американская трэш-метал группа, основанная в 1983 году гитаристом и вокалистом Дэйвом Мастейном и басистом Дэвидом Эллефсоном после ухода Мастейна из Metallica.
          </p>
        </div>
      </section>
      
      {/* Секция с гитаристами */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FaGuitar className="text-primary mr-3" /> 
            Гитаристы Megadeth
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Дэйв Мастейн */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Дэйв Мастейн</h3>
              <p className="text-gray-700 mb-4">
                Основатель, вокалист и ведущий гитарист Megadeth. Известен своим агрессивным стилем игры и сложными риффами.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dean VMNT Signature гитары</li>
                <li>Jackson King V (ранние годы)</li>
                <li>ESP DV8 (1990-е)</li>
                <li>Усилители Marshall JVM410H</li>
                <li>Педали эффектов: MXR Super Badass Distortion, Dunlop Cry Baby Wah</li>
              </ul>
            </div>
            
            {/* Крис Бродерик */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Крис Бродерик</h3>
              <p className="mb-4">
                Бывший гитарист Megadeth (2008-2014). Известен своей техничностью и скоростью игры, а также классическим музыкальным образованием.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Jackson Chris Broderick Signature Soloist</li>
                <li>Ibanez Prestige 7-струнные гитары</li>
                <li>Усилители EVH 5150 III</li>
                <li>Педали эффектов: ISP Decimator, TC Electronic Flashback Delay</li>
              </ul>
            </div>
            
            {/* Марти Фридман */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Марти Фридман</h3>
              <p className="text-gray-700 mb-4">
                Гитарист Megadeth в 1990-2000 годах. Известен своим уникальным стилем с элементами восточной музыки и необычными гармониями.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Jackson Kelly Custom</li>
                <li>PRS Custom 24</li>
                <li>Engl Signature Marty Friedman Inferno 100</li>
                <li>Педали эффектов: Engl Z-9 Overdrive, Pro Co RAT</li>
              </ul>
            </div>
            
            {/* Кико Лоурейро */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Кико Лоурейро</h3>
              <p className="mb-4">
                Текущий гитарист Megadeth (с 2015). Бразильский виртуоз, ранее известный по группе Angra.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ibanez Kiko Loureiro Signature KIKO10BP</li>
                <li>ESP E-II Horizon</li>
                <li>Усилители Marshall JVM410H</li>
                <li>Педали эффектов: Ibanez Tube Screamer, MXR Carbon Copy</li>
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
            Басисты Megadeth
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Дэвид Эллефсон */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Дэвид Эллефсон</h3>
              <p className="text-gray-700 mb-4">
                Один из основателей Megadeth, играл в группе в 1983-2002 и 2010-2021 годах.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Jackson David Ellefson Signature Concert Bass</li>
                <li>Hartke LH1000 усилители</li>
                <li>Hartke HyDrive колонки</li>
                <li>Педали эффектов: Hartke Bass Attack 2, Aguilar Agro</li>
              </ul>
            </div>
            
            {/* Джеймс Ломенцо */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Джеймс Ломенцо</h3>
              <p className="mb-4">
                Басист Megadeth в 2006-2010 годах и снова с 2021 года по настоящее время.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Warwick Streamer бас-гитары</li>
                <li>Ampeg SVT-4PRO усилители</li>
                <li>Ampeg 8x10 кабинеты</li>
                <li>Педали эффектов: Tech 21 SansAmp Bass Driver DI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
