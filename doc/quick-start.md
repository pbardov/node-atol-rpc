# Быстрый старт

## Установка

```bash
npm i node-atol-rpc
# или
yarn add node-atol-rpc
```

## Минимальный пример

```ts
import AtolRpc from 'node-atol-rpc';

const atol = new AtolRpc({
  host: '127.0.0.1',
  port: 50000,
  timeout: 10_000,
});

await atol.connect();

// Пример: получить статус ККТ
const status = await atol.getDeviceStatus();
console.log(status);

await atol.disconnect();
```

## Пример: печать чека продажи (упрощённо)

Точные поля зависят от требований ФФД/ДТО и вашей конфигурации ККТ.

```ts
import AtolRpc from 'node-atol-rpc';

const atol = new AtolRpc({ host: '127.0.0.1', port: 50000 });
await atol.connect();

await atol.openShift({
  cashierName: 'Иванов И.И.',
  cashierId: '1234',
});

await atol.printReceipt({
  type: 'sell',
  cashierName: 'Иванов И.И.',
  cashierId: '1234',
  items: [
    {
      name: 'Товар 1',
      price: 100,
      quantity: 2,
      amount: 200,
      tax: 'vat20',
    },
  ],
  payments: [{ type: 'cash', amount: 200 }],
});

await atol.disconnect();
```

## Что дальше

- [Настройки подключения](./settings.md)
- [JSON tasks и результаты](./json-tasks.md)
- [Диагностика](./troubleshooting.md)
