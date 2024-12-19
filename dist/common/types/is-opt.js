import { errorDescription, } from './type-guard.js';
import getTypeGuardDetails from './get-type-guard-details.js';
export default function isOpt(v, isT) {
    return typeof v === 'undefined' || isT(v);
}
export function makeOpt(isT) {
    return (v, error = {}) => {
        if (typeof v === 'undefined') {
            return true;
        }
        if (!isT(v, error)) {
            if (!Object.keys(error).length) {
                error[errorDescription] = getTypeGuardDetails(isT);
            }
        }
        return true;
    };
}
