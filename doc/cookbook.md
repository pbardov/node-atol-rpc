# Рецепты (cookbook)

Ниже — набор практических сценариев, которые часто встречаются при интеграции.

## Проверка доступности ККТ (ping)

```ts
import AtolRpc from 'node-atol-rpc';

const atol = new AtolRpc({ host: '127.0.0.1', port: 50000 });
await atol.connect();

const info = await atol.getDeviceInfo();
console.log(info);

await atol.disconnect();
```

## Открыть денежный ящик

```ts
import AtolRpc from 'node-atol-rpc';

const atol = new AtolRpc({ host: '127.0.0.1', port: 50000 });
await atol.connect();

await atol.openCashDrawer();

await atol.disconnect();
```

## X-отчёт

```ts
import AtolRpc from 'node-atol-rpc';

const atol = new AtolRpc({ host: '127.0.0.1', port: 50000 });
await atol.connect();

await atol.reportX({
  cashierName: 'Иванов И.И.',
  cashierId: '1234',
});

await atol.disconnect();
```
