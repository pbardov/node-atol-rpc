import { errorDescription, } from './type-guard.js';
import getTypeGuardDetails from './get-type-guard-details.js';
export default function isArrayOf(values, isT, errors = {}) {
    if (!Array.isArray(values)) {
        errors[errorDescription] = 'Value must be of array type';
        return false;
    }
    let errorCount = 0;
    for (let idx = 0; idx < values.length; idx += 1) {
        const v = values[idx];
        if (!isT(v)) {
            errorCount += 1;
            errors[idx] = getTypeGuardDetails(isT);
        }
    }
    return !errorCount;
}
export function arrayTypeGuard(isT) {
    return (values, errors) => isArrayOf(values, isT, errors);
}
