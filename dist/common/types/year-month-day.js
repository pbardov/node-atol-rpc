import escapeRegex from './escape-regex.js';
import isString from './is-string.js';
export const makeIsYearMonthDay = (d) => {
    const delim = Array.isArray(d) ? d.map(escapeRegex).join('') : d;
    const re = new RegExp(`^\\d{4}[${delim}]\\d{2}[${delim}]\\d{2}$`);
    return (v) => (isString(v) && re.test(v)) || false;
};
export const isYearMonthDay = makeIsYearMonthDay(['-', '.']);
