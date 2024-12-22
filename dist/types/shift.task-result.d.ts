import { type IsoDateString } from '../common/types/iso-date-string.js';
import { type TypeGuardDetail } from '../common/types/type-guard.js';
import { type ResultWarnings } from './result-warnings.js';
export type ShiftTaskResult = {
    fiscalDocumentNumber: number;
    fiscalDocumentSign: string;
    fiscalDocumentDateTime: IsoDateString;
    shiftNumber: number;
    fnNumber: string;
    registrationNumber: string;
    fnsUrl: string;
    warnings?: ResultWarnings;
};
export type OpenShiftTaskResult = ShiftTaskResult;
export type CloseShiftTaskResult = ShiftTaskResult;
export declare const isShiftTaskResult: TypeGuardDetail<ShiftTaskResult>;
export declare const isOpenShiftTaskResult: TypeGuardDetail<OpenShiftTaskResult>;
export declare const isCloseShiftTaskResult: TypeGuardDetail<CloseShiftTaskResult>;
//# sourceMappingURL=shift.task-result.d.ts.map