import {JsonTaskType} from './json-task-type.js';
import isEnumOf from '../common/types/is-enum-of.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import isNumber from '../common/types/is-number.js';

export enum DocumentFilter {
    shiftNumber = 'shiftNumber',
    fiscalDocumentNumber = 'fiscalDocumentNumber'
}

export const isDocumentFilter = isEnumOf(DocumentFilter);

export type PrintDocumentsFromJournalTask = {
    type: JsonTaskType.printDocumentsFromJournal;
    filter: DocumentFilter;
    from: number;
    to: number;
};

export const isPrintDocumentsFromJournalTask = structureValidator<PrintDocumentsFromJournalTask>({
    type: isEqual(JsonTaskType.printDocumentsFromJournal),
    filter: isDocumentFilter,
    from: isNumber,
    to: isNumber
});
