'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { FaLock, FaUser } from 'react-icons/fa';
import Link from 'next/link';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Простая проверка (в реальном проекте должна быть настоящая аутентификация)
    if (username === 'admin' && password === 'admin123') {
      // Устанавливаем cookie для имитации авторизации
      Cookies.set('adminAuth', 'true', { expires: 1 }); // Срок действия 1 день
      router.push('/admin');
    } else {
      setError('Неверное имя пользователя или пароль');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Вход в админ-панель</h1>
          <p className="text-gray-600 mt-2">Введите учетные данные для входа</p>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Имя пользователя
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-gray-400" />
              </div>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input pl-10"
                placeholder="Введите имя пользователя"
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Пароль
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input pl-10"
                placeholder="Введите пароль"
                required
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Запомнить меня
              </label>
            </div>
            
            <a href="#" className="text-sm text-primary hover:underline">
              Забыли пароль?
            </a>
          </div>
          
          <button
            type="submit"
            className="w-full btn btn-primary py-3 font-medium"
          >
            Войти
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-primary hover:underline">
            Вернуться на главную страницу
          </Link>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Для демонстрации используйте:</p>
          <p>Логин: <strong>admin</strong></p>
          <p>Пароль: <strong>admin123</strong></p>
        </div>
      </div>
    </div>
  );
}
