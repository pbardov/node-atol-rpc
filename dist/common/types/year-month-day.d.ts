import { TypeGuard } from './type-guard.js';
export type YearMonthDay<D extends string = '-' | '.'> = `${number}${number}${number}${number}${D}${number}${number}${D}${number}${number}`;
export declare const makeIsYearMonthDay: <D extends string>(d: D | D[]) => TypeGuard<YearMonthDay<D>>;
export declare const isYearMonthDay: TypeGuard<`${number}${number}${number}${number}-${number}${number}-${number}${number}` | `${number}${number}${number}${number}-${number}${number}.${number}${number}` | `${number}${number}${number}${number}.${number}${number}-${number}${number}` | `${number}${number}${number}${number}.${number}${number}.${number}${number}`>;
//# sourceMappingURL=year-month-day.d.ts.map