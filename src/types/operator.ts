import isString from '../common/types/is-string.js';
import isOpt from '../common/types/is-opt.js';

export type Operator = {
	name: string,
	vatin?: string
}

export function isOperator(v: unknown): v is Operator {
	const mb = v as Operator | undefined;
	return typeof mb === 'object'
		&& isString(mb.name)
		&& isOpt(mb.vatin, isString);
}
