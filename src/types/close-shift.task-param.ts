import {isOperator, Operator} from './operator.js';
import isOpt from '../common/types/is-opt.js';
import isArray from '../common/types/is-array.js';
import isBoolean from '../common/types/is-boolean.js';
import {OpenShiftTaskParam} from './open-shift.task-param.js';

export type CloseShiftTaskParam = {
	operator?: Operator,
	preItems?: unknown[],
	postItems?: unknown[],
	electronically?: boolean
}

export function isCloseShiftTaskParam(v: unknown): v is CloseShiftTaskParam {
	const mb = v as OpenShiftTaskParam | undefined;
	return Boolean(mb)
		&& typeof mb === 'object'
		&& isOpt(mb.operator, isOperator)
		&& isOpt(mb.preItems, isArray)
		&& isOpt(mb.postItems, isArray)
		&& isOpt(mb.electronically, isBoolean);
}
