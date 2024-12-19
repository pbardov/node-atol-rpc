import { errorDescription, typeGuardSymbol, } from './type-guard.js';
import isString from './is-string.js';
import getTypeGuardDetails from './get-type-guard-details.js';
export default function describeValidationErrors(description, typeGuard, errors = {}) {
    const { [errorDescription]: origDescription = '', [typeGuardSymbol]: origTypeGuardDetails = '' } = errors;
    const descriptions = isString(origDescription) && origDescription ? [origDescription] : [];
    descriptions.push(description);
    const typeGuardDetails = isString(origTypeGuardDetails) && origTypeGuardDetails ? [origTypeGuardDetails] : [];
    typeGuardDetails.push(getTypeGuardDetails(typeGuard));
    return {
        ...errors,
        [errorDescription]: descriptions.join('\n'),
        [typeGuardSymbol]: typeGuardDetails.join('\n'),
    };
}
