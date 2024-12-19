import { JsonTaskType } from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import { isOperator } from './operator.js';
import { isDocumentPrintItem } from './document-item.js';
import { makeOpt } from '../common/types/is-opt.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
export const isReportXTask = structureValidator({
    type: isEqual(JsonTaskType.reportX),
    operator: makeOpt(isOperator),
    preItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
    postItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
});
