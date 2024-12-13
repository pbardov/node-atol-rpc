import {isShiftStatusInfo, type ShiftStatusInfo} from './shift-status.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetShiftStatusTaskResult = {
	shiftStatus: ShiftStatusInfo;
};

export const isGetShiftStatusTaskResult = structureValidator<GetShiftStatusTaskResult>({
	shiftStatus: isShiftStatusInfo,
});
