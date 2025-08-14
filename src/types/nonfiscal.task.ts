import type {JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import {type DocumentPrintItem, isDocumentPrintItem} from './document-item.js';
import structureValidator from '../common/types/structure-validator.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';

export type NonfiscalTask = JsonTask & {
    type: JsonTaskType.nonFiscal;
    items: DocumentPrintItem[];
    printFooter?: boolean;
}


export const isNonfiscalTask = structureValidator<NonfiscalTask>({
    type: (v: unknown): v is JsonTaskType.nonFiscal => v === JsonTaskType.nonFiscal,
    items: arrayTypeGuard(isDocumentPrintItem),
    printFooter: makeOpt(isBoolean),
});
