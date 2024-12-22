import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type PrintLastReceiptCopyTask = JsonTask & {
    type: JsonTaskType.printLastReceiptCopy;
};
export declare const isPrintLastReceiptCopyTask: import("../common/types/type-guard.js").TypeGuardDetail<PrintLastReceiptCopyTask>;
//# sourceMappingURL=print-last-receipt-copy.task.d.ts.map