'use client';

import { FaGuitar, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-8 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <FaGuitar className="text-primary text-2xl" />
            <span className="text-xl font-bold">МузыкаИнфо</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-light hover:text-primary transition-colors">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="text-light hover:text-primary transition-colors">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-light hover:text-primary transition-colors">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>© {currentYear} МузыкаИнфо. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
