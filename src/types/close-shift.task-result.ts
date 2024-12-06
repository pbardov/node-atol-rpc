import {isOpenShiftTaskResult, type OpenShiftTaskResult} from './open-shift.task-result.js';
import {type TypeGuardDetail} from '../common/types/type-guard.js';

export type CloseShiftTaskResult = OpenShiftTaskResult;
export const isCloseShiftTaskResult: TypeGuardDetail<CloseShiftTaskResult> = isOpenShiftTaskResult;
