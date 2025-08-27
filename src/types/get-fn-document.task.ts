import type { JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import isNumber from '../common/types/is-number.js';

export type GetFnDocumentTask = JsonTask & {
  type: JsonTaskType.getFnDocument;
  fiscalDocumentNumber: number;
};

export const isGetFnDocumentTask = structureValidator<GetFnDocumentTask>({
  type: isEqual(JsonTaskType.getFnDocument),
  fiscalDocumentNumber: isNumber,
});
