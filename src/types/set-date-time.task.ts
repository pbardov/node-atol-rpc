import type { JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import { isAtolDateTime, type AtolDateTime } from './atol-date.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type SetDateTimeTask = JsonTask & {
  type: JsonTaskType.setDateTime;
  dateTime: AtolDateTime;
};

export const isSetDateTimeTask = structureValidator<SetDateTimeTask>({
  type: isEqual(JsonTaskType.setDateTime),
  dateTime: isAtolDateTime,
});
