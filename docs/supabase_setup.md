# Настройка Supabase для управления изображениями

## 1. Создание проекта в Supabase

1. Перейдите на [supabase.com](https://supabase.com)
2. Создайте аккаунт или войдите в существующий
3. Нажмите "New Project"
4. Выберите организацию и введите данные проекта:
   - Name: `music-groups-images`
   - Database Password: создайте надежный пароль
   - Region: выберите ближайший регион
5. Нажмите "Create new project"

## 2. Настройка Storage

1. В левом меню выберите "Storage"
2. Нажмите "Create a new bucket"
3. Введите название: `images`
4. Установите настройки:
   - Public bucket: ✅ (включено)
   - File size limit: 5MB
   - Allowed MIME types: `image/*`
5. Нажмите "Create bucket"

## 3. Настройка политик безопасности (RLS)

1. Перейдите в "Storage" → "Policies"
2. Для bucket `images` создайте следующие политики:

### Политика для чтения (SELECT)
```sql
CREATE POLICY "Public read access" ON storage.objects
FOR SELECT USING (bucket_id = 'images');
```

### Политика для загрузки (INSERT) - только для админов
```sql
CREATE POLICY "Admin upload access" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'images' AND 
  auth.role() = 'authenticated'
);
```

### Политика для удаления (DELETE) - только для админов
```sql
CREATE POLICY "Admin delete access" ON storage.objects
FOR DELETE USING (
  bucket_id = 'images' AND 
  auth.role() = 'authenticated'
);
```

## 4. Получение ключей API

1. Перейдите в "Settings" → "API"
2. Скопируйте следующие значения:
   - Project URL
   - anon public key

## 5. Настройка переменных окружения

1. Откройте файл `.env.local` в корне проекта
2. Замените значения на ваши реальные ключи:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## 6. Структура папок в Storage

Рекомендуемая структура папок в bucket `images`:

```
images/
├── artists/          # Фотографии музыкантов
├── guitars/          # Фотографии гитар
├── bass/            # Фотографии бас-гитар
├── bands/           # Фотографии групп
├── concerts/        # Концертные фотографии
└── equipment/       # Другое оборудование
```

## 7. Тестирование подключения

1. Запустите проект: `npm run dev`
2. Перейдите в админ-панель: `http://localhost:3000/admin`
3. Войдите с данными: admin / admin123
4. Перейдите в раздел "Изображения"
5. Попробуйте загрузить тестовое изображение

## 8. Возможные проблемы и решения

### Ошибка CORS
Если возникают ошибки CORS, проверьте настройки в Supabase:
1. Settings → API → CORS origins
2. Добавьте `http://localhost:3000` для разработки

### Ошибки загрузки
1. Проверьте размер файла (максимум 5MB)
2. Убедитесь, что файл является изображением
3. Проверьте политики безопасности в Storage

### Ошибки авторизации
1. Проверьте правильность ключей API в `.env.local`
2. Убедитесь, что файл `.env.local` не добавлен в `.gitignore`
3. Перезапустите сервер разработки после изменения переменных

## 9. Дополнительные возможности

### Автоматическое изменение размера изображений
Можно настроить Edge Functions для автоматического создания миниатюр:

```sql
-- Создание функции для обработки изображений
CREATE OR REPLACE FUNCTION handle_image_upload()
RETURNS TRIGGER AS $$
BEGIN
  -- Логика обработки изображения
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

### Метаданные изображений
Можно создать таблицу для хранения дополнительной информации:

```sql
CREATE TABLE image_metadata (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  file_path TEXT NOT NULL,
  title TEXT,
  description TEXT,
  category TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 10. Безопасность

1. Никогда не коммитьте файл `.env.local` в Git
2. Используйте разные ключи для разработки и продакшена
3. Регулярно обновляйте ключи API
4. Настройте правильные политики RLS для ограничения доступа

## Полезные ссылки

- [Документация Supabase Storage](https://supabase.com/docs/guides/storage)
- [Политики безопасности RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
