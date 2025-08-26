import { isJsonTaskType, JsonTaskType } from './json-task-type.js';
import { type JsonTask } from './json-task.js';
import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isEqual from '../common/types/is-equal.js';

// Define the PrintFnDocumentTask type extending JsonTask
export type PrintFnDocumentTask = JsonTask & {
	type: JsonTaskType.printFnDocument;
	fiscalDocumentNumber: number;
};

// Create a type guard for PrintFnDocumentTask
export const isPrintFnDocumentTask = structureValidator<PrintFnDocumentTask>({
	type: isEqual(JsonTaskType.printFnDocument),
	fiscalDocumentNumber: isNumber,
});
