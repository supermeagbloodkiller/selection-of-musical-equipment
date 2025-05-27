'use client';

import { FaGuitar, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-metal-black via-metal-gray to-metal-black py-12 mt-12 border-t-4 border-metal-red relative overflow-hidden">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0 bg-gradient-to-r from-metal-red/5 via-transparent to-metal-gold/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-metal-red via-metal-gold to-metal-red"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0 group">
            <FaGuitar className="text-metal-red text-3xl animate-rock-pulse group-hover:text-metal-gold transition-colors" />
            <span className="metal-title text-2xl">🤘 METAL LEGENDS 🤘</span>
          </div>

          <div className="flex space-x-8">
            <a href="#" className="text-metal-silver hover:text-metal-gold transition-colors group">
              <FaGithub className="text-3xl group-hover:animate-rock-pulse" />
            </a>
            <a href="#" className="text-metal-silver hover:text-metal-red transition-colors group">
              <FaInstagram className="text-3xl group-hover:animate-rock-pulse" />
            </a>
            <a href="#" className="text-metal-silver hover:text-metal-gold transition-colors group">
              <FaYoutube className="text-3xl group-hover:animate-rock-pulse" />
            </a>
          </div>
        </div>

        <div className="border-t-2 border-metal-red/30 mt-8 pt-8 text-center">
          <p className="metal-subtitle text-lg text-metal-silver mb-2">
            🔥 METAL NEVER DIES 🔥
          </p>
          <p className="text-metal-silver/60 text-sm">
            © {currentYear} Metal Legends. Все права защищены. 🤘 Rock On! 🤘
          </p>
        </div>
      </div>
    </footer>
  );
}
