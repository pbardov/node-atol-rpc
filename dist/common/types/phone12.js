import isString from './is-string.js';
export const phone12Re = /\+\d{11}/;
export function isPhone12(v) {
    return phone12Re.test((isString(v) && v) || '');
}
