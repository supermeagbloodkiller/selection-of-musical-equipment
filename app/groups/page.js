'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaSearch, FaUsers, FaGuitar } from 'react-icons/fa';

export default function GroupsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Список групп (в реальном приложении будет загружаться из базы данных)
  const groups = [
    {
      id: 'megadeth',
      name: 'Megadeth',
      genre: 'Трэш-метал',
      year: 1983,
      description: 'Американская трэш-метал группа, основанная в 1983 году гитаристом и вокалистом Дэйвом Мастейном и басистом Дэвидом Эллефсоном после ухода Мастейна из Metallica.'
    },
    {
      id: 'vanhalen',
      name: 'Van Halen',
      genre: 'Хард-рок',
      year: 1972,
      description: 'Американская хард-рок группа, основанная в 1972 году братьями Эдди и Алексом Ван Халенами. Группа оказала огромное влияние на развитие рок-музыки и гитарной техники.'
    },
    {
      id: 'metallica',
      name: 'Metallica',
      genre: 'Трэш-метал',
      year: 1981,
      description: 'Американская метал-группа, образованная в 1981 году. Один из наиболее коммерчески успешных коллективов, оказавших значительное влияние на развитие жанра.'
    },
    {
      id: 'acdc',
      name: 'AC/DC',
      genre: 'Хард-рок',
      year: 1973,
      description: 'Австралийская рок-группа, сформированная в Сиднее в 1973 году братьями Малькольмом и Ангусом Янгами. Группа является одной из самых влиятельных в истории рок-музыки.'
    },
    {
      id: 'blacksabbath',
      name: 'Black Sabbath',
      genre: 'Хэви-метал',
      year: 1968,
      description: 'Британская рок-группа, образованная в 1968 году. Считается одним из основателей и популяризаторов хэви-метала.'
    },
    {
      id: 'ironmaiden',
      name: 'Iron Maiden',
      genre: 'Хэви-метал',
      year: 1975,
      description: 'Британская хеви-метал группа, основанная в 1975 году. Один из наиболее успешных представителей новой волны британского хеви-метала.'
    },
  ];

  // Фильтрация групп по поисковому запросу
  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <Navbar />

      {/* Hero секция */}
      <section className="py-12 bg-gradient-to-r from-red-600/10 to-red-600/20">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center text-black">
            <FaUsers className="text-red-600 mr-3" />
            Музыкальные группы
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl">
            Информация о знаменитых музыкальных группах, их гитаристах и басистах, а также используемом ими оборудовании.
          </p>
        </div>
      </section>

      {/* Секция поиска */}
      <section className="py-8 bg-white">
        <div className="container mx-auto">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Поиск по названию или жанру..."
              className="w-full pl-12 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>
      </section>

      {/* Список групп */}
      <section className="py-12">
        <div className="container mx-auto">
          {filteredGroups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGroups.map(group => (
                <Link key={group.id} href={`/groups/${group.id}`} className="block">
                  <div className="music-card p-6 h-full hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-bold mb-2 text-black">{group.name}</h2>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
                        {group.genre}
                      </span>
                      <span className="px-3 py-1 bg-gray-600 text-white text-xs font-medium rounded-full">
                        {group.year}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {group.description}
                    </p>
                    <div className="flex items-center text-sm text-red-600">
                      <FaGuitar className="mr-1" />
                      <span>Подробнее о группе и оборудовании</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">Ничего не найдено</h2>
              <p className="text-gray-600">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
