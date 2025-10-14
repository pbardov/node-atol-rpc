import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import {makeOpt} from '../common/types/is-opt.js';
import isString from '../common/types/is-string.js';
import {isShiftState, type ShiftState} from './shift-state.js';

export type ShiftStatusInfo = {
	documentsCount: number;
	expiredTime?: string;
	number: number;
	state: ShiftState;
};

export const isShiftStatusInfo = structureValidator<ShiftStatusInfo>({
	documentsCount: isNumber,
	expiredTime: makeOpt(isString),
	number: isNumber,
	state: isShiftState,
});
