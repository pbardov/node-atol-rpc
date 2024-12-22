import { type TypeGuard } from './type-guard.js';
export default function isEnumOf<T extends string, EnumValue extends string | number>(e: Record<T, EnumValue>): TypeGuard<EnumValue>;
//# sourceMappingURL=is-enum-of.d.ts.map