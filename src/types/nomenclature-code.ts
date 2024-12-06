import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import {errorDescription, type TypeGuardDetail, type ValidationErrors} from '../common/types/type-guard.js';
import getTypeGuardDetails from '../common/types/get-type-guard-details.js';

export enum NomenclatureCodeType {
	furs = 'furs',
	medicines = 'medicines',
	tobacco = 'tobacco',
	shoes = 'shoes',
}

export function isNomenclatureCodeType(v: unknown): v is NomenclatureCodeType {
	return Object.values(NomenclatureCodeType).includes(v as NomenclatureCodeType);
}

export type NomenclatureCode<T extends NomenclatureCodeType = NomenclatureCodeType> = {
	type: T;
	gtin: T extends NomenclatureCodeType.furs ? undefined : string;
	serial: string;
};

export const isNomenclatureCodeFurs = structureValidator<NomenclatureCode<NomenclatureCodeType.furs>>({
	type: (v: unknown): v is NomenclatureCodeType.furs => v === NomenclatureCodeType.furs,
	gtin: (v: unknown): v is undefined => typeof v === 'undefined',
	serial: isString,
});

export const isNomenclatureCodeGeneric = structureValidator<NomenclatureCode>({
	type: (v: unknown): v is NomenclatureCodeType => v !== NomenclatureCodeType.furs && isNomenclatureCodeType(v),
	gtin: isString,
	serial: isString,
});

const nomenclatureCodeTypeGuardMap: Record<NomenclatureCodeType, TypeGuardDetail<NomenclatureCode>> = {
	[NomenclatureCodeType.furs]: isNomenclatureCodeFurs,
	[NomenclatureCodeType.shoes]: isNomenclatureCodeGeneric,
	[NomenclatureCodeType.medicines]: isNomenclatureCodeGeneric,
	[NomenclatureCodeType.tobacco]: isNomenclatureCodeGeneric,
};

export function isNomenclatureCode(v: unknown, error: ValidationErrors = {}): v is NomenclatureCode {
	const mb = v as NomenclatureCode<any> | undefined;
	if (!mb || typeof mb !== 'object') {
		error[errorDescription] = 'Value must be of object type';
		return false;
	}

	if (!isNomenclatureCodeType(mb.type)) {
		error.type = getTypeGuardDetails(isNomenclatureCodeType);
		return false;
	}

	return nomenclatureCodeTypeGuardMap[mb.type](v, error);
}
