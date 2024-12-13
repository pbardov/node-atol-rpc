import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import {makeOpt} from '../common/types/is-opt.js';
import isString from '../common/types/is-string.js';

export enum ShiftStatus {
	closed = 'closed',
	opened = 'opened',
	expired = 'expired',
}

export function isShiftStatus(v: unknown): v is ShiftStatus {
	return Object.values(ShiftStatus).includes(v as ShiftStatus);
}

export type ShiftStatusInfo = {
	documentsCount: number;
	expiredTime?: string;
	number: number;
	status: ShiftStatus;
};

export const isShiftStatusInfo = structureValidator<ShiftStatusInfo>({
	documentsCount: isNumber,
	expiredTime: makeOpt(isString),
	number: isNumber,
	status: isShiftStatus,
});
