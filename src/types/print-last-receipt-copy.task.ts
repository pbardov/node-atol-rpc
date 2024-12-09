import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';

export type PrintLastReceiptCopyTask = JsonTask & {
	type: JsonTaskType.printLastReceiptCopy;
};

export const isPrintLastReceiptCopyTask = structureValidator<PrintLastReceiptCopyTask>({
	type: (v: unknown): v is JsonTaskType.printLastReceiptCopy => v === JsonTaskType.printLastReceiptCopy,
});
