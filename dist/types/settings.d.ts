import { type Fptr10Settings } from './fptr10-bindings.js';
import { type TypeGuardDetail } from '../common/types/type-guard.js';
export declare enum WorkMode {
    sync = "sync",
    async = "async"
}
export declare const isWorkMode: import("../common/types/type-guard.js").TypeGuard<WorkMode>;
export type WithWorkMode = {
    workMode?: WorkMode;
};
export declare const isWithWorkMode: TypeGuardDetail<WithWorkMode>;
export type Settings = Fptr10Settings & WithWorkMode;
export declare const isSettings: TypeGuardDetail<Settings>;
//# sourceMappingURL=settings.d.ts.map