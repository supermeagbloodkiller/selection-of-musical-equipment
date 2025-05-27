import { createClient } from '@supabase/supabase-js';

// Создаем клиент Supabase с переменными окружения
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-key';

// Проверяем наличие переменных окружения
if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'https://demo.supabase.co') {
  console.warn('Supabase не настроен. Используются демо-данные.');
}

// Инициализируем Supabase клиент
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
