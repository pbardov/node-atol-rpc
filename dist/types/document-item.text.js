import { DocumentItemType } from './document-item-type.js';
import { isTextAlignment } from './text-alignment.js';
import { isTextWrap } from './text-wrap.js';
import isString from '../common/types/is-string.js';
import { makeOpt } from '../common/types/is-opt.js';
import isNumber from '../common/types/is-number.js';
import isBoolean from '../common/types/is-boolean.js';
import structureValidator from '../common/types/structure-validator.js';
export const isDocumentItemText = structureValidator({
    type: (v) => v === DocumentItemType.text,
    text: isString,
    alignment: makeOpt(isTextAlignment),
    wrap: makeOpt(isTextWrap),
    font: makeOpt(isNumber),
    doubleWidth: makeOpt(isBoolean),
    doubleHeight: makeOpt(isBoolean),
    storeInJournal: makeOpt(isBoolean),
});
