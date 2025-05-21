import { createClient } from '@supabase/supabase-js';

// Создаем клиент Supabase с переменными окружения
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Инициализируем Supabase клиент
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
