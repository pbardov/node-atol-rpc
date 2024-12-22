import { type FiscalTaskTypes } from './fiscal.task.js';
import { type TypeGuardDetail } from '../common/types/type-guard.js';
export type ShiftResults = Record<FiscalTaskTypes, number>;
export declare const isShiftResults: TypeGuardDetail<ShiftResults>;
export type DepartmentSum = Record<string, ShiftResults>;
export declare const isDepartmentSum: TypeGuardDetail<DepartmentSum>;
//# sourceMappingURL=department-sum.d.ts.map