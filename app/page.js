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
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Легендарные музыкальные группы
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Узнайте больше о знаменитых гитаристах и басистах, их инструментах и вкладе в музыку
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/groups/megadeth" className="btn btn-primary text-lg px-8 py-3">
              Megadeth
            </Link>
            <Link href="/groups/vanhalen" className="btn btn-secondary text-lg px-8 py-3">
              Van Halen
            </Link>
          </div>
        </div>
      </section>
      
      {/* Секция с карточками */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Наши особенности</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Low-fi карточка */}
            <div className="card low-fi p-8 flex flex-col items-center text-center">
              <FaGuitar className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Гитаристы</h3>
              <p className="text-gray-600">
                Подробная информация о легендарных гитаристах и их инструментах
              </p>
            </div>
            
            {/* High-fi карточка */}
            <div className="card high-fi p-8 flex flex-col items-center text-center text-white">
              <FaUsers className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Группы</h3>
              <p>
                История создания и развития знаменитых музыкальных коллективов
              </p>
            </div>
            
            {/* Low-fi карточка */}
            <div className="card low-fi p-8 flex flex-col items-center text-center">
              <FaMusic className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Басисты</h3>
              <p className="text-gray-600">
                Информация о басистах и их вкладе в звучание групп
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Секция с призывом к действию */}
      <section className="py-16 bg-dark text-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Хотите узнать больше?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Посетите страницы групп, чтобы узнать подробную информацию о музыкантах и их инструментах
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/groups/megadeth" className="btn bg-white text-dark hover:bg-gray-200 text-lg px-8 py-3">
              Перейти к Megadeth
            </Link>
            <Link href="/groups/vanhalen" className="btn bg-primary text-white hover:bg-primary/90 text-lg px-8 py-3">
              Перейти к Van Halen
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
