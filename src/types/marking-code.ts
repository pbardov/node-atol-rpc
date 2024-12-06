import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';

export enum MarkingCodeType {
	other = 'other',
	egais20 = 'egais20',
	egais30 = 'egais30',
}

export function isMarkingCodeType(v: unknown): v is MarkingCodeType {
	return Object.values(MarkingCodeType).includes(v as MarkingCodeType);
}

export type MarkingCode = {
	type: MarkingCodeType;
	mark: string;
};

export const isMarkingCode = structureValidator<MarkingCode>({
	type: isMarkingCodeType,
	mark: isString,
});
