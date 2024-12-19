import { errorDescription, } from './type-guard.js';
import describeValidationErrors from './describe-validation-errors.js';
export default function isRecordOf(isK, isV) {
    return (v, errors = {}) => {
        const mb = v;
        if (!mb || typeof mb !== 'object') {
            errors[errorDescription] = 'Value must be of object type';
            return false;
        }
        let errorCount = 0;
        for (const prop of Object.keys(mb)) {
            if (!isK(prop)) {
                errors[prop] = describeValidationErrors('Wrong key type', isK);
                errorCount += 1;
            }
            else {
                const errorDetail = {};
                if (!isV(mb[prop])) {
                    errors[prop] = describeValidationErrors('Wrong value type', isV, errorDetail);
                    errorCount += 1;
                }
            }
        }
        return !errorCount;
    };
}
