# node-atol-rpc

TypeScript/Node.js библиотека для работы с **АТОЛ ДТО v10** через JSON-RPC.

Библиотека предоставляет:

- высокоуровневый клиент `AtolRpc` (методы вроде `openShift`, `printReceipt`, `reportX` и т.п.);
- строгие типы для JSON-задач (tasks) и результатов;
- утилиты для runtime-валидации структур (type guards / structure validator).

> Примечание: конкретные поля задач зависят от версии ДТО/ФФД и конфигурации ККТ. Библиотека помогает типами и валидацией, но ответственность за соответствие требованиям законодательства/настроек остаётся на интеграторе.

## Установка

```bash
npm i node-atol-rpc
# или
yarn add node-atol-rpc
```

## Быстрый старт

```ts
import AtolRpc from 'node-atol-rpc';

const atol = new AtolRpc({
  host: '127.0.0.1',
  port: 50000,
  timeout: 10_000,
});

await atol.connect();

const status = await atol.getDeviceStatus();
console.log(status);

await atol.disconnect();
```

## Документация

Подробная документация находится в [`doc/`](./doc/README.md).

## Публичный API

```ts
import AtolRpc, { AtolRpcBase, type Settings, isSettings } from 'node-atol-rpc';
```

- `AtolRpc` — основной высокоуровневый клиент.
- `AtolRpcBase` — низкоуровневый JSON-RPC слой.
- `Settings` — настройки подключения.
- `isSettings` — runtime-проверка объекта настроек.

## Требования

- Node.js (см. `package.json`)
- АТОЛ ДТО/драйвер v10+ с включённым RPC

## Лицензия

MIT
