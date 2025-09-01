import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import {makeOpt} from '../common/types/is-opt.js';
import isString from '../common/types/is-string.js';
import isBoolean from '../common/types/is-boolean.js';
import isEnumOf from '../common/types/is-enum-of.js';
import {type ImcType, isImcType} from './imc-params.js';

export type DriverError = {
    code: number;
    error?: string;
    description?: string;
};

export const isDriverError = structureValidator<DriverError>({
    code: isNumber,
    error: makeOpt(isString),
    description: makeOpt(isString),
});

export type ImcCheckResult = {
    imcCheckFlag: boolean;
    imcCheckResult: boolean;
    imcStatusInfo: boolean;
    imcEstimatedStatusCorrect: boolean;
    ecrStandAloneFlag: boolean;
};

export const isImcCheckResult = structureValidator<ImcCheckResult>({
    imcCheckFlag: isBoolean,
    imcCheckResult: isBoolean,
    imcStatusInfo: isBoolean,
    imcEstimatedStatusCorrect: isBoolean,
    ecrStandAloneFlag: isBoolean,
});

export type MarkOperatorResponse = {
    responseStatus: boolean;
    itemStatusCheck: boolean;
};

export const isMarkOperatorResponse = structureValidator<MarkOperatorResponse>({
    responseStatus: isBoolean,
    itemStatusCheck: isBoolean,
});

export enum MarkOperatorItemStatus {
    itemEstimatedStatusCorrect = 'itemEstimatedStatusCorrect',
    itemEstimatedStatusIncorrect = 'itemEstimatedStatusIncorrect',
    itemSaleStopped = 'itemSaleStopped'
}

export const isMarkOperatorItemStatus = isEnumOf(MarkOperatorItemStatus);

export enum MarkOperatorResponseResult {
    correct = 'correct',
    incorrect = 'incorrect',
    unrecognized = 'unrecognized',
}

export const isMarkOperatorResponseResult = isEnumOf(MarkOperatorResponseResult);

export type OnlineValidationResult = {
    itemInfoCheckResult: ImcCheckResult;
    markOperatorItemStatus: MarkOperatorItemStatus;
    markOperatorResponse: MarkOperatorResponse;
    markOperatorResponseResult: MarkOperatorResponseResult;
    imcType: ImcType;
    imcBarcode: string;
    imcModeProcessing: number;
};

export const isOnlineValidationResult = structureValidator<OnlineValidationResult>({
    itemInfoCheckResult: isImcCheckResult,
    markOperatorItemStatus: isMarkOperatorItemStatus,
    markOperatorResponse: isMarkOperatorResponse,
    markOperatorResponseResult: isMarkOperatorResponseResult,
    imcType: isImcType,
    imcBarcode: isString,
    imcModeProcessing: isNumber,
})

export type GetMarkingCodeValidationStatusTaskResult = {
    ready: boolean;
    sentImcRequest: boolean;
    driverError: DriverError;
    onlineValidation?: OnlineValidationResult;
};

export const isGetMarkingCodeValidationStatusTaskResult = structureValidator<GetMarkingCodeValidationStatusTaskResult>({
    ready: isBoolean,
    sentImcRequest: isBoolean,
    driverError: isDriverError,
    onlineValidation: makeOpt(isOnlineValidationResult),
});
