import type { JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type ReportDepartmentsTask = JsonTask & {
  type: JsonTaskType.reportDepartments;
};

export const isReportDepartmentsTask = structureValidator<ReportDepartmentsTask>({
  type: isEqual(JsonTaskType.reportDepartments),
});
