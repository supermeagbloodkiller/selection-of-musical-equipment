'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import { FaGuitar, FaMusic, FaUsers, FaCalendarAlt } from 'react-icons/fa';

export default function BandTemplate({ bandData }) {
  const {
    name,
    genre,
    year,
    description,
    members,
    equipment,
    images,
    achievements
  } = bandData;

  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />

      {/* Hero секция */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto relative z-10 px-4">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="main-title text-4xl md:text-6xl lg:text-7xl mb-6 break-words">
              {name}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <FaMusic className="text-red-600" />
                <span className="subtitle text-base md:text-lg font-medium">{genre}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <FaCalendarAlt className="text-red-600" />
                <span className="subtitle text-base md:text-lg font-medium">{year}</span>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed px-4">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Участники группы */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="main-title text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
            <FaUsers className="inline mr-4" />
            УЧАСТНИКИ ГРУППЫ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {members.map((member, index) => (
              <div key={index} className="music-card p-6 h-full flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-red-600 break-words">{member.name}</h3>
                <p className="text-base lg:text-lg font-semibold mb-3 break-words">{member.role}</p>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">{member.description}</p>
                {member.years && (
                  <p className="text-sm text-gray-600 mt-auto">Годы участия: {member.years}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Оборудование */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="main-title text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
            <FaGuitar className="inline mr-4" />
            ОБОРУДОВАНИЕ
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Гитары */}
            <div className="music-card p-6">
              <h3 className="subtitle text-xl lg:text-2xl mb-6 text-center text-red-600">
                🎸 ГИТАРЫ 🎸
              </h3>
              <div className="space-y-4">
                {equipment.guitars.map((guitar, index) => (
                  <div key={index} className="border-l-4 border-red-600 pl-4 py-2">
                    <h4 className="font-bold text-base lg:text-lg mb-1 break-words">{guitar.model}</h4>
                    <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{guitar.description}</p>
                    {guitar.player && (
                      <p className="text-sm text-red-600 mt-1">Использует: {guitar.player}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Бас-гитары */}
            <div className="music-card p-6">
              <h3 className="subtitle text-xl lg:text-2xl mb-6 text-center text-red-600">
                🎸 БАС-ГИТАРЫ 🎸
              </h3>
              <div className="space-y-4">
                {equipment.bass.map((bass, index) => (
                  <div key={index} className="border-l-4 border-red-600 pl-4 py-2">
                    <h4 className="font-bold text-base lg:text-lg mb-1 break-words">{bass.model}</h4>
                    <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{bass.description}</p>
                    {bass.player && (
                      <p className="text-sm text-red-600 mt-1">Использует: {bass.player}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Достижения */}
      {achievements && achievements.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="main-title text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
              🏆 ДОСТИЖЕНИЯ 🏆
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="music-card p-6 h-full flex flex-col">
                  <h4 className="font-bold text-lg lg:text-xl text-red-600 mb-2 break-words">{achievement.title}</h4>
                  <p className="text-gray-700 leading-relaxed flex-grow">{achievement.description}</p>
                  {achievement.year && (
                    <p className="text-sm text-gray-600 mt-auto">Год: {achievement.year}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
