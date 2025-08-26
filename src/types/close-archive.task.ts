import type { JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import { isOperator, type Operator } from './operator.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type CloseArchiveTask = JsonTask & {
  type: JsonTaskType.closeArchive;
  operator: Operator;
};

export const isCloseArchiveTask = structureValidator<CloseArchiveTask>({
  type: isEqual(JsonTaskType.closeArchive),
  operator: isOperator,
});
