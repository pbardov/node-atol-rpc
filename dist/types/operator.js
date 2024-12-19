import isString from '../common/types/is-string.js';
import isOpt from '../common/types/is-opt.js';
export function isOperator(v) {
    const mb = v;
    return typeof mb === 'object'
        && isString(mb.name)
        && isOpt(mb.vatin, isString);
}
