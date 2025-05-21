'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaGuitar, FaMusic } from 'react-icons/fa';

export default function VanHalenPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero секция */}
      <section className="py-12 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Van Halen</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Американская хард-рок группа, основанная в 1972 году братьями Эдди и Алексом Ван Халенами. Группа оказала огромное влияние на развитие рок-музыки и гитарной техники.
          </p>
        </div>
      </section>
      
      {/* Секция с гитаристами */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FaGuitar className="text-secondary mr-3" /> 
            Гитаристы Van Halen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Эдди Ван Хален */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Эдди Ван Хален</h3>
              <p className="mb-4">
                Основатель и ведущий гитарист Van Halen. Один из самых влиятельных гитаристов в истории рок-музыки, известный своей техникой тэппинга и инновационным подходом к игре.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>EVH Frankenstein (самодельная гитара)</li>
                <li>EVH Wolfgang Signature</li>
                <li>Fender Stratocaster (модифицированные)</li>
                <li>Усилители Marshall Plexi, Peavey 5150/6505</li>
                <li>Педали эффектов: MXR Phase 90, EVH Flanger</li>
              </ul>
            </div>
            
            {/* Вольфганг Ван Хален */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Вольфганг Ван Хален</h3>
              <p className="text-gray-700 mb-4">
                Сын Эдди Ван Халена, играл на бас-гитаре в Van Halen с 2006 по 2020 год. Также играет на гитаре в своем сольном проекте Mammoth WVH.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>EVH Wolfgang WG Standard</li>
                <li>Fender Custom Shop Stratocaster</li>
                <li>Усилители EVH 5150 III</li>
                <li>Педали эффектов: MXR EVH Phase 90, Dunlop Cry Baby Wah</li>
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
            Басисты Van Halen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Майкл Энтони */}
            <div className="card high-fi text-white">
              <h3 className="text-2xl font-bold mb-3">Майкл Энтони</h3>
              <p className="mb-4">
                Оригинальный басист Van Halen (1974-2006). Известен своими бэк-вокалами и энергичным стилем игры.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Music Man StingRay Bass</li>
                <li>Yamaha Attitude Limited бас-гитары</li>
                <li>Ampeg SVT усилители</li>
                <li>Ampeg 8x10 кабинеты</li>
                <li>Педали эффектов: MXR Bass Octave Deluxe</li>
              </ul>
            </div>
            
            {/* Вольфганг Ван Хален (как басист) */}
            <div className="card low-fi">
              <h3 className="text-2xl font-bold mb-3">Вольфганг Ван Хален (басист)</h3>
              <p className="text-gray-700 mb-4">
                Заменил Майкла Энтони на бас-гитаре в 2006 году и играл до распада группы после смерти Эдди Ван Халена в 2020 году.
              </p>
              <h4 className="text-lg font-semibold mb-2">Используемые инструменты:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fender Precision Bass</li>
                <li>Music Man StingRay Bass</li>
                <li>EVH 5150 III усилители с кабинетами</li>
                <li>Педали эффектов: MXR Bass Compressor, Darkglass Electronics B7K Ultra</li>
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
            Van Halen произвели революцию в рок-музыке 1980-х годов. Техника игры Эдди Ван Халена, включая тэппинг двумя руками, легато и использование тремоло, оказала огромное влияние на целое поколение гитаристов. Группа сочетала элементы хард-рока, хэви-метала и поп-музыки, создав свой уникальный звук.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">Знаковые альбомы:</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li><strong>Van Halen (1978)</strong> - дебютный альбом с хитами "Runnin' with the Devil" и "Eruption"</li>
            <li><strong>1984 (1984)</strong> - содержит хиты "Jump", "Panama" и "Hot for Teacher"</li>
            <li><strong>5150 (1986)</strong> - первый альбом с вокалистом Сэмми Хагаром</li>
            <li><strong>A Different Kind of Truth (2012)</strong> - последний студийный альбом группы</li>
          </ul>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
