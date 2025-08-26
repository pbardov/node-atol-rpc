import type {JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import {isOperator, type Operator} from './operator.js';
import {type DocumentPrintItem, isDocumentPrintItem} from './document-item.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import {makeOpt} from '../common/types/is-opt.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';

export type ReportOfdExchangeStatusTask = JsonTask & {
  type: JsonTaskType.reportOfdExchangeStatus;
  operator?: Operator;
  preItems?: DocumentPrintItem[];
  postItems?: DocumentPrintItem[];
};

export const isReportOfdExchangeStatusTask = structureValidator<ReportOfdExchangeStatusTask>({
    type: isEqual(JsonTaskType.reportOfdExchangeStatus),
    operator: makeOpt(isOperator),
    preItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
    postItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
});
