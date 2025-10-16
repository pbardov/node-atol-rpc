import {makeOpt} from '../common/types/is-opt.js';
import structureValidator from '../common/types/structure-validator.js';
import {type TypeGuardDetail} from '../common/types/type-guard.js';
import {isResultWarnings, type ResultWarnings} from './result-warnings.js';
import {type FiscalParams, isFiscalParams} from './fiscal-params.js';

export type ShiftTaskResult = {
	fiscalParams: FiscalParams;
	warnings?: ResultWarnings;
};
export type OpenShiftTaskResult = ShiftTaskResult;
export type CloseShiftTaskResult = ShiftTaskResult;

export const isShiftTaskResult = structureValidator<ShiftTaskResult>({
	fiscalParams: isFiscalParams,
	warnings: makeOpt(isResultWarnings),
});
export const isOpenShiftTaskResult: TypeGuardDetail<OpenShiftTaskResult> = isShiftTaskResult;
export const isCloseShiftTaskResult: TypeGuardDetail<CloseShiftTaskResult> = isShiftTaskResult;
