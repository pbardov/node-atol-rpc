import {type Base64String, isBase64String} from '../common/types/base64-string.js';
import {isItemInfoCheckResult, type ItemInfoCheckResult} from './item-info-check-result.js';
import {isMeasurementUnit, type MeasurementUnit} from './measurement-unit.js';
import structureValidator, {type StructureValidator} from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import {makeOpt} from '../common/types/is-opt.js';
import isString from '../common/types/is-string.js';

export enum ImcType {
	imcUnrecognized,
	imcShort,
	imcFmVerifyCode88,
	imcVerifyCode44,
	imcFmVerifyCode44,
	imcVerifyCode4,
	auto = 256,
}

export function isImcType(v: unknown): v is ImcType {
	return Object.values(ImcType).includes(v as ImcType);
}

export enum ItemEstimatedStatus {
	itemPieceSold = 1,
	itemDryForSale,
	itemPieceReturn,
	itemDryReturn,
	itemPieceForSale,
	itemDrySold,
	itemStatusUnchanged = 255,
}

export function isItemEstimatedStatus(v: unknown): v is ItemEstimatedStatus {
	return Object.values(ItemEstimatedStatus).includes(v as ItemEstimatedStatus);
}

export type ImcParams = {
	imcType: ImcType;
	imc: Base64String;
	itemEstimatedStatus: ItemEstimatedStatus;
	imcModeProcessing: number;
	itemFractionalAmount?: string;
	imcBarcode?: Base64String;
};

export const imcParamsValidator: StructureValidator<ImcParams> = {
	imcType: isImcType,
	imc: isBase64String,
	itemEstimatedStatus: isItemEstimatedStatus,
	imcModeProcessing: isNumber,
	itemFractionalAmount: makeOpt(isString),
	imcBarcode: makeOpt(isBase64String),
};

export type ImcParamsValidation = ImcParams & {
	itemEstimatedStatus: ItemEstimatedStatus;
	itemQuantity?: number;
	itemUnits?: MeasurementUnit;
};

export const imcParamsValidationValidator: StructureValidator<ImcParamsValidation> = {
	...imcParamsValidator,
	itemEstimatedStatus: isItemEstimatedStatus,
	itemQuantity: makeOpt(isNumber),
	itemUnits: makeOpt(isMeasurementUnit),
};

export type ImcParamsDocument = ImcParams & {
	itemEstimatedStatus: ItemEstimatedStatus;
};

export const imcParamsDocumentValidator: StructureValidator<ImcParamsDocument> = {
	...imcParamsValidator,
	itemEstimatedStatus: isItemEstimatedStatus,
};

export const isImcParams = structureValidator<ImcParams>(imcParamsValidator);
export const isImcParamsValidation = structureValidator<ImcParamsValidation>(imcParamsValidationValidator);
export const isImcParamsDocument = structureValidator<ImcParamsDocument>(imcParamsDocumentValidator);
