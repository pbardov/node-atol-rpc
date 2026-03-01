# Рецепты (cookbook)

Ниже — набор практических сценариев, которые часто встречаются при интеграции.

Во всех примерах подразумевается, что вы передаёте корректный `Settings` (см. [settings.md](./settings.md)).
Для краткости полный набор полей не приводится — используйте типовой `settings.json` вашего проекта как основу.

## Проверка доступности ККТ (ping)

```ts
import AtolRpc from 'node-atol-rpc';

const atol = new AtolRpc({
  /* ... Settings ... */
} as any);
await atol.connect();

const info = await atol.getDeviceInfo();
console.log(info);

await atol.disconnect();
```

## Открыть денежный ящик

```ts
import AtolRpc from 'node-atol-rpc';

const atol = new AtolRpc({
  /* ... Settings ... */
} as any);
await atol.connect();

await atol.openCashDrawer();

await atol.disconnect();
```

## X-отчёт

```ts
import AtolRpc from 'node-atol-rpc';

const atol = new AtolRpc({
  /* ... Settings ... */
} as any);
await atol.connect();

await atol.reportX({
  cashierName: 'Иванов И.И.',
  cashierId: '1234',
});

await atol.disconnect();
```
