import { DocumentItemType } from './document-item-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import { makeOpt } from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
export const isDocumentItemUserAttribute = structureValidator({
    type: (v) => v === DocumentItemType.userAttribute,
    name: isString,
    value: isString,
    print: makeOpt(isBoolean),
});
