import {type ArrayTypeGuard, type TypeGuard} from './type-guard.js';

export default function isArrayOf<T>(values: unknown, isT: TypeGuard<T>): values is T[] {
	if (!Array.isArray(values)) {
		return false;
	}

	for (const v of values) {
		if (!isT(v)) {
			return false;
		}
	}

	return true;
}

export function arrayTypeGuard<T>(isT: TypeGuard<T>): ArrayTypeGuard<T> {
	return (values: unknown): values is T[] => isArrayOf<T>(values, isT);
}
