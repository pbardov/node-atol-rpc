# Настройки драйвера/подключения (Settings)

`Settings` в этой библиотеке **не** про HTTP/RPC (`host`/`port`/`timeout`).

Тип `Settings` — это набор параметров **драйвера АТОЛ Fptr10** (см. `src/types/fptr10-bindings.ts`), плюс опциональный `workMode` (см. `src/types/settings.ts`).

То есть:

- `Settings = Fptr10Settings & { workMode?: 'sync' | 'async' }`

## workMode

- `workMode?: 'sync' | 'async'`
  - `sync` — выполнять вызовы последовательно (ожидать завершения каждого вызова перед следующим).
  - `async` — не блокировать очередь вызовов (поведение зависит от реализации клиента и используемых методов).

Если поле не указано — используется поведение по умолчанию в коде, который создаёт/использует клиент.

## Fptr10Settings

Ниже перечислены поля, которые **обязательны** для `Settings` (т.к. `Fptr10Settings` не содержит optional-полей в типе):

- `AccessPassword: string`
- `AutoDisableBluetooth: boolean`
- `AutoEnableBluetooth: boolean`
- `AutoReconnect: boolean`
- `BaudRate: Baudrate`
- `Bits: Bits`
- `ComFile: string`
- `DocumentsJournalPath: string`
- `IPAddress: string`
- `IPPort: number`
- `InvertCashDrawerStatus: boolean`
- `LibraryPath: string`
- `MACAddress: string`
- `Model: Model`
- `OfdChannel: OfdChannel`
- `Parity: Parity`
- `Port: Port`
- `RemoteServerAddr: string`
- `RemoteServerConnectionTimeout: number`
- `ScriptsPath: string`
- `StopBits: Stopbits`
- `UsbDevicePath: string`
- `UseDocumentsJournal: boolean`
- `UserPassword: string`

Значения enum-типов:

- `BaudRate` — см. `export enum Baudrate` в `src/types/fptr10-bindings.ts` (например `LIBFPTR_PORT_BR_115200 = 115200`).
- `Bits` — `LIBFPTR_PORT_BITS_7 | LIBFPTR_PORT_BITS_8`.
- `Parity` — `LIBFPTR_PORT_PARITY_NO | ...`.
- `StopBits` — `LIBFPTR_PORT_SB_1 | ...`.
- `Model` — `LIBFPTR_MODEL_ATOL_30F | ...`.
- `OfdChannel` — `LIBFPTR_OFD_CHANNEL_NONE | USB | PROTO | AUTO`.
- `Port` — `LIBFPTR_PORT_COM | USB | TCPIP | BLUETOOTH`.

## Пример

import AtolRpc, { type Settings, WorkMode, Port, Model, OfdChannel, Baudrate, Bits, Parity, Stopbits } from 'node-atol-rpc';

const settings: Settings = {
  // --- обязательные поля драйвера ---
  AccessPassword: '',
  AutoDisableBluetooth: false,
  AutoEnableBluetooth: false,
  AutoReconnect: true,
  BaudRate: Baudrate.LIBFPTR_PORT_BR_115200,
  Bits: Bits.LIBFPTR_PORT_BITS_8,
  ComFile: '',
  DocumentsJournalPath: '',
  IPAddress: '127.0.0.1',
  IPPort: 5555,
  InvertCashDrawerStatus: false,
  LibraryPath: '',
  MACAddress: '',
  Model: Model.LIBFPTR_MODEL_ATOL_AUTO,
  OfdChannel: OfdChannel.LIBFPTR_OFD_CHANNEL_NONE,
  Parity: Parity.LIBFPTR_PORT_PARITY_NO,
  Port: Port.LIBFPTR_PORT_TCPIP,
  RemoteServerAddr: '',
  RemoteServerConnectionTimeout: 0,
  ScriptsPath: '',
  StopBits: Stopbits.LIBFPTR_PORT_SB_1,
  UsbDevicePath: '',
  UseDocumentsJournal: false,
  UserPassword: '',

  // --- опционально ---
  workMode: WorkMode.sync,
};

const atol = new AtolRpc(settings);

## Как получить валидный Settings под вашу версию ДТО/драйвера

Поля настроек, которые реально поддерживает драйвер, зависят от версии ДТО/драйвера и окружения. На практике самый надёжный способ получить **валидную полную структуру** настроек для конкретной версии — создать инстанс и прочитать настройки из драйвера:

import AtolRpc from 'node-atol-rpc';

const kkm = new AtolRpc({
  /* ... минимально необходимые настройки, чтобы драйвер мог создаться ... */
} as any);

// Вернёт структуру, которую понимает конкретная версия драйвера
const settingsFromDriver = kkm.getSettings();

// Дальше можно сериализовать и править нужные поля
console.log(JSON.stringify(settingsFromDriver, null, 2));

Дальше корректный «рецепт» такой:

1) получить `settings = kkm.getSettings()`;
2) сохранить (json-файл/ENV/БД);
3) править в нём только нужные поля (например `IPAddress`, `IPPort`, `Port`, `Model`, `workMode` и т.п.);
4) передавать обратно через `new AtolRpc(settings)` / `kkm.setSettings(settings)`.

## Важное замечание

Библиотека валидирует `Settings` через type-guards (`isFptr10Settings` + `isWithWorkMode`).
Если вы ожидаете настройки вида `host`/`port`/`timeout` — их в `Settings` **нет**.
