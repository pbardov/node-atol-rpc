/* eslint-disable @typescript-eslint/naming-convention */
import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import {isOperator, type Operator} from './operator.js';
import {type DocumentPrintItem, isDocumentPrintItem} from './document-item.js';
import {makeOpt} from '../common/types/is-opt.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';

export type ReportXTask = JsonTask & {
	type: JsonTaskType.reportX;
	operator?: Operator;
	preItems?: DocumentPrintItem[];
	postItems?: DocumentPrintItem[];
};

export const isReportXTask = structureValidator<ReportXTask>({
	type: isEqual(JsonTaskType.reportX),
	operator: makeOpt(isOperator),
	preItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
	postItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
});
