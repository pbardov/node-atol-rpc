import type { JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import isNumber from '../common/types/is-number.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';

export type GetFnDocumentTask = JsonTask & {
  type: JsonTaskType.getFnDocument;
  fiscalDocumentNumber: number;
  withRawData?: boolean;
};

export const isGetFnDocumentTask = structureValidator<GetFnDocumentTask>({
  type: isEqual(JsonTaskType.getFnDocument),
  fiscalDocumentNumber: isNumber,
  withRawData: makeOpt(isBoolean),
});
