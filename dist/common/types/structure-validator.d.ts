import { type TypeGuard, type TypeGuardDetail } from './type-guard.js';
export type StructureValidator<T extends Record<any, any>, P = Required<T>> = {
    [K in keyof P]: TypeGuard<T[K]> | TypeGuardDetail<T[K]>;
};
export default function structureValidator<T extends Record<any, any>>(validator: StructureValidator<T>): TypeGuardDetail<T>;
//# sourceMappingURL=structure-validator.d.ts.map