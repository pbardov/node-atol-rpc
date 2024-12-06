import {isOperator, type Operator} from './operator.js';
import isOpt from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import isArray from '../common/types/is-array.js';

export type OpenShiftTaskParam = {
	operator?: Operator;
	preItems?: unknown[];
	postItems?: unknown[];
	electronically?: boolean;
};

export function isOpenShiftTaskParam(v: unknown): v is OpenShiftTaskParam {
	const mb = v as OpenShiftTaskParam | undefined;
	return Boolean(mb)
		&& typeof mb === 'object'
		&& isOpt(mb.operator, isOperator)
		&& isOpt(mb.preItems, isArray)
		&& isOpt(mb.postItems, isArray)
		&& isOpt(mb.electronically, isBoolean);
}
