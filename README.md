# 🛒 Ozon

Frontend интернет-магазина.

Проект сделан для демонстрации **разных уровней тестирования frontend-приложения**.

Используются три типа тестов:

- **unit**
- **integration**
- **e2e**

---

# ⚙️ Стек

**Основное**

- React
- TypeScript
- Vite

**State**

- Redux Toolkit
- RTK Query

**Стили**

- TailwindCSS

**Backend**

- Supabase

**Тестирование**

- Vitest
- React Testing Library
- Playwright

---

# 🧱 Архитектура

Проект использует архитектуру **FSD (Feature-Sliced Design)**.

Код разделён на слои:

```
app
pages
widgets
features
entities
shared
```

Каждый слой имеет свою область ответственности и может использовать только нижележащие слои.

---

# 📁 Структура проекта

```
.
├── e2e
├── public
├── src
├── tests
├── index.html
├── package.json
├── vite.config.ts
├── vitest.config.ts
├── playwright.config.ts
├── tailwind.config.js
└── postcss.config.js
```

---

# 🧪 Тесты

### Unit + Integration

```
tests/
```

Тестируется:

- бизнес-логика
- утилиты
- компоненты

---

### E2E

```
e2e/
```

E2E тесты выполняются через **Playwright** и проверяют пользовательские сценарии.

---

# 🌱 Переменные окружения

Файл:

```
.env.example
```

---

# 🚀 Запуск проекта

Установка зависимостей:

```
npm install
```

Запуск dev сервера:

```
npm run dev
```

Сборка:

```
npm run build
```

---

# 🧪 Запуск тестов

Unit + Integration:

```
npm run test
```

E2E:

```
npm run e2e
```
