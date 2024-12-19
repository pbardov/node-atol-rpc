import isArrayOf from './is-array-of.js';
const isoDateStringRe = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(\.\d+)?([+-][0-2]\d:[0-5]\d|Z)/;
export function isIsoDateString(v) {
    return typeof v === 'string'
        && isoDateStringRe.test(v);
}
export function isIsoDateStringArray(v) {
    return isArrayOf(v, isIsoDateString);
}
