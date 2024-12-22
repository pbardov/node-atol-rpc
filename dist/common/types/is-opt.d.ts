import { type TypeGuard, type TypeGuardDetail } from './type-guard.js';
export default function isOpt<T>(v: unknown, isT: (t: unknown) => t is T): v is T | undefined;
export declare function makeOpt<T>(isT: TypeGuard<T> | TypeGuardDetail<T>): TypeGuardDetail<T>;
//# sourceMappingURL=is-opt.d.ts.map