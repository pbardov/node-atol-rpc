# Разработка и релиз

## Требования

- Node.js (см. `package.json`)
- Yarn или npm

## Сборка

Артефакты должны появляться **только** в `dist/`.

```bash
cd vendor/node-atol-rpc
npm run build
# или
yarn build
```

## Проверки

```bash
cd vendor/node-atol-rpc
npm test
```

## Структура проекта

- `src/index.ts` — публичный API (экспорты).
- `src/atol-rpc.ts` — высокоуровневый клиент.
- `src/atol-rpc-base.ts` — базовая RPC-обвязка.
- `src/types/**` — типы задач/результатов/guards.
- `src/common/types/**` — утилиты и валидаторы типов.

## Добавление новой JSON-задачи (рекомендованный процесс)

1. Добавьте тип задачи в `src/types/<name>.task.ts`.
2. Добавьте тип результата в `src/types/<name>.task-result.ts` (если есть отдельный формат результата).
3. Обновите реестры:
   - `src/types/json-task.map.ts`
   - `src/types/json-task-result.map.ts`
4. Добавьте guard-валидаторы (если библиотека их использует для этого типа):
   - `src/types/<name>.guard.ts` или `src/types/json-task.guard.ts` / `src/types/json-task-result.guard.ts`
5. Добавьте/обновите метод в `src/atol-rpc.ts`.
6. Добавьте документацию в `doc/`.

## Коммиты для subtree

Так как `vendor/node-atol-rpc` — это git subtree:

- изменения внутри `vendor/node-atol-rpc/src` коммитьте отдельным коммитом, содержащим **только** изменения в `vendor/`;
- не коммитьте мусорные артефакты, случайно появившиеся в `src` (например `*.js`, `*.d.ts`, `*.d.ts.map`).
