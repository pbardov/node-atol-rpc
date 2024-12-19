import isArrayOf from './is-array-of.js';
import isString from './is-string.js';
export default function isStringArray(v) {
    return isArrayOf(v, isString);
}
