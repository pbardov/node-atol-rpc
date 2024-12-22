import { type Settings as Fptr10Settings, Baudrate, Bits, Model, OfdChannel, Parity, Port, Stopbits } from 'node-atol-wrapper';
export declare enum WorkMode {
    sync = "sync",
    async = "async"
}
export declare const isWorkMode: import("../common/types/type-guard.js").TypeGuard<WorkMode>;
export declare const isBaudrate: import("../common/types/type-guard.js").TypeGuard<Baudrate>;
export declare const isBits: import("../common/types/type-guard.js").TypeGuard<Bits>;
export declare const isModel: import("../common/types/type-guard.js").TypeGuard<Model>;
export declare const isOfdChannel: import("../common/types/type-guard.js").TypeGuard<OfdChannel>;
export declare const isParity: import("../common/types/type-guard.js").TypeGuard<Parity>;
export declare const isPort: import("../common/types/type-guard.js").TypeGuard<Port>;
export declare const isStopbits: import("../common/types/type-guard.js").TypeGuard<Stopbits>;
export type Settings = Fptr10Settings & {
    workMode?: WorkMode;
};
export declare const isSettings: import("../common/types/type-guard.js").TypeGuardDetail<Settings>;
//# sourceMappingURL=settings.d.ts.map