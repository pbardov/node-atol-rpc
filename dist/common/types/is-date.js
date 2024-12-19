import isArrayOf from './is-array-of.js';
export default function isDate(v) {
    return v instanceof Date && !isNaN(v);
}
export function isDateArray(v) {
    return isArrayOf(v, isDate);
}
