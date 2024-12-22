import { type ArrayTypeGuardDetail, type TypeGuard, type ValidationErrors } from './type-guard.js';
export default function isArrayOf<T>(values: unknown, isT: TypeGuard<T>, errors?: ValidationErrors): values is T[];
export declare function arrayTypeGuard<T>(isT: TypeGuard<T>): ArrayTypeGuardDetail<T>;
//# sourceMappingURL=is-array-of.d.ts.map