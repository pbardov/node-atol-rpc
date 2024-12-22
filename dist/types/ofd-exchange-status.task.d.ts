import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type OfdExchangeStatusTask = JsonTask & {
    type: JsonTaskType.ofdExchangeStatus;
};
export declare const isOfdExchangeStatusTask: import("../common/types/type-guard.js").TypeGuardDetail<OfdExchangeStatusTask>;
//# sourceMappingURL=ofd-exchange-status.task.d.ts.map