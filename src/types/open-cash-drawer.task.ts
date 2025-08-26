import type { JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type OpenCashDrawerTask = JsonTask & {
  type: JsonTaskType.openCashDrawer;
};

export const isOpenCashDrawerTask = structureValidator<OpenCashDrawerTask>({
  type: isEqual(JsonTaskType.openCashDrawer),
});
