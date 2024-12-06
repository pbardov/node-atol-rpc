import {isOpenShiftTaskParam, type OpenShiftTaskParam} from './open-shift.task-param.js';
import {type TypeGuardDetail} from '../common/types/type-guard.js';

export type CloseShiftTaskParam = OpenShiftTaskParam;
export const isCloseShiftTaskParam: TypeGuardDetail<CloseShiftTaskParam> = isOpenShiftTaskParam;
