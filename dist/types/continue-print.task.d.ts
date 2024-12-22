import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type ContinuePrintTask = JsonTask & {
    type: JsonTaskType.continuePrint;
};
export declare const isContinuePrint: import("../common/types/type-guard.js").TypeGuardDetail<ContinuePrintTask>;
//# sourceMappingURL=continue-print.task.d.ts.map