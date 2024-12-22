import { type TypeGuard, type TypeGuardDetail } from './type-guard.js';
export default function isRecordOf<K extends keyof any, V>(isK: TypeGuard<K> | TypeGuardDetail<K>, isV: TypeGuard<V> | TypeGuardDetail<V>): TypeGuardDetail<Record<K, V>>;
//# sourceMappingURL=is-record-of.d.ts.map