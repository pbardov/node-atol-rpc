import {type FiscalTaskTypes} from './fiscal.task.js';
import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import {type TypeGuardDetail} from '../common/types/type-guard.js';
import isString from '../common/types/is-string.js';
import isRecordOf from '../common/types/is-record-of.js';

export type ShiftResults = Record<FiscalTaskTypes, number>;

export const isShiftResults = structureValidator<ShiftResults>({
	buy: isNumber,
	buyReturn: isNumber,
	sell: isNumber,
	sellReturn: isNumber,
});

export type DepartmentSum = Record<string, ShiftResults>;

export const isDepartmentSum: TypeGuardDetail<DepartmentSum> = isRecordOf(isString, isShiftResults);
