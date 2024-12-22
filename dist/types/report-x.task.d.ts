import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import { type Operator } from './operator.js';
import { type DocumentPrintItem } from './document-item.js';
export type ReportXTask = JsonTask & {
    type: JsonTaskType.reportX;
    operator?: Operator;
    preItems?: DocumentPrintItem[];
    postItems?: DocumentPrintItem[];
};
export declare const isReportXTask: import("../common/types/type-guard.js").TypeGuardDetail<ReportXTask>;
//# sourceMappingURL=report-x.task.d.ts.map