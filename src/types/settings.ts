import isEnumOf from '../common/types/is-enum-of.js';
import structureValidator from '../common/types/structure-validator.js';
import {makeOpt} from '../common/types/is-opt.js';
import {
	type Fptr10Settings,
	isFptr10Settings,
} from './fptr10-bindings.js';
import {type TypeGuardDetail, type ValidationErrors} from '../common/types/type-guard.js';

export enum WorkMode {
	sync = 'sync',
	async = 'async',
}

export const isWorkMode = isEnumOf(WorkMode);

export type WithWorkMode = {
	workMode?: WorkMode;
};

export const isWithWorkMode = structureValidator<WithWorkMode>({
	workMode: makeOpt(isWorkMode),
});

export type Settings = Fptr10Settings & WithWorkMode;

export const isSettings: TypeGuardDetail<Settings> = (v: unknown, errors: ValidationErrors = {}): v is Settings => isFptr10Settings(v, errors) && isWithWorkMode(v, errors);
