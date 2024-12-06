import {
	type ArrayTypeGuardDetail, errorDescription, type TypeGuard, type ValidationErrors,
} from './type-guard.js';
import getTypeGuardDetails from './get-type-guard-details.js';

export default function isArrayOf<T>(values: unknown, isT: TypeGuard<T>, errors: ValidationErrors = {}): values is T[] {
	if (!Array.isArray(values)) {
		errors[errorDescription] = 'Value must be of array type';
		return false;
	}

	let errorCount = 0;
	for (let idx = 0; idx < values.length; idx += 1) {
		const v: unknown = values[idx];
		if (!isT(v)) {
			errorCount += 1;
			errors[idx] = getTypeGuardDetails(isT);
		}
	}

	return !errorCount;
}

export function arrayTypeGuard<T>(isT: TypeGuard<T>): ArrayTypeGuardDetail<T> {
	return (values: unknown, errors?: ValidationErrors): values is T[] => isArrayOf<T>(values, isT, errors);
}
