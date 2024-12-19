import { isOperator } from './operator.js';
import { makeOpt } from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import structureValidator from '../common/types/structure-validator.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
import { isDocumentPrintItem } from './document-item.js';
export const isOpenShiftTaskParam = structureValidator({
    operator: makeOpt(isOperator),
    preItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
    postItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
    electronically: makeOpt(isBoolean),
});
