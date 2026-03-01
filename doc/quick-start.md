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
  // Settings = Fptr10Settings (+ опциональный workMode)
  // Укороченный пример: часть полей опущена. За «типовой default» можно взять
  // рабочий `settings.json` вашего проекта.
  IPAddress: '192.168.109.233',
  IPPort: 5555,
  Port: 2, // LIBFPTR_PORT_TCPIP

  // ... остальные обязательные поля из Fptr10Settings ...

  workMode: 'async',
} as any);

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

const atol = new AtolRpc({
  // ... Settings (см. doc/settings.md; типовой пример — settings.json вашего проекта) ...
} as any);
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
  payments: [{type: 'cash', amount: 200}],
});

await atol.disconnect();
```

## Что дальше

- [Настройки драйвера/подключения (Settings)](./settings.md)
- [JSON tasks и результаты](./json-tasks.md)
- [Диагностика](./troubleshooting.md)
