import { errorDescription, } from './type-guard.js';
import describeValidationErrors from './describe-validation-errors.js';
export default function structureValidator(validator) {
    return (v, error = {}) => {
        const mb = v;
        if (!mb || typeof mb !== 'object') {
            error[errorDescription] = 'Value must be of object type';
            return false;
        }
        let errorCount = 0;
        for (const prop of Object.keys(validator)) {
            const typeGuard = validator[prop];
            const propError = {};
            if (!typeGuard(mb[prop], propError)) {
                errorCount += 1;
                error[prop] = describeValidationErrors('', typeGuard, propError);
            }
        }
        return !errorCount;
    };
}
