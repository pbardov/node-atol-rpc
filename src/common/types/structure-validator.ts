import {
	errorDescription, type TypeGuard, type TypeGuardDetail, type ValidationErrors,
} from './type-guard.js';
import getTypeGuardDetails from './get-type-guard-details.js';

export type StructureValidator<T extends Record<any, any>, P = Required<T>> = {
	[K in keyof P]: TypeGuard<T[K]> | TypeGuardDetail<T[K]>;
};

export default function structureValidator<T extends Record<any, any>>(validator: StructureValidator<T>): TypeGuardDetail<T> {
	return (v: unknown, error: ValidationErrors = {}): v is T => {
		const mb = v as T | undefined;
		if (!mb || typeof mb !== 'object') {
			error[errorDescription] = 'Value must be of object type';
			return false;
		}

		let errorCount = 0;
		for (const prop of Object.keys(validator)) {
			const typeGuard = validator[prop] as TypeGuardDetail<any>;
			const propError: ValidationErrors = {};
			if (!typeGuard(mb[prop], propError)) {
				errorCount += 1;
				if (typeof propError[errorDescription] === 'string') {
					error[prop] = propError[errorDescription];
				} else if (!Object.keys(propError).length) {
					error[prop] = getTypeGuardDetails(typeGuard);
				} else {
					error[prop] = propError;
				}
			}
		}

		return !errorCount;
	};
}
