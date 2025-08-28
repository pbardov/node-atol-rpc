import type { JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type GetLicensesTask = JsonTask & {
  type: JsonTaskType.getLicenses;
};

export const isGetLicensesTask = structureValidator<GetLicensesTask>({
  type: isEqual(JsonTaskType.getLicenses),
});
