import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import {type CodeDescription, isCodeDescription} from './code-description.js';

export type IsmExchangeStatus = {
    notSentCount: number;
    notSentFirstNoticeNumber: number;
    notSentFirstNoticeDateTime: string;
};

export const isIsmExchangeStatus = structureValidator<IsmExchangeStatus>({
    notSentCount: isNumber,
    notSentFirstNoticeNumber: isNumber,
    notSentFirstNoticeDateTime: isString,
});

export type IsmExchangeErrors = {
    network: CodeDescription;
    ism: CodeDescription;
    fn: CodeDescription;
    documentNumber: number;
    fnCommandCode: number;
    lastSuccessConnectionDateTime: string;
};

export const isIsmExchangeErrors = structureValidator<IsmExchangeErrors>({
    network: isCodeDescription,
    ism: isCodeDescription,
    fn: isCodeDescription,
    documentNumber: isNumber,
    fnCommandCode: isNumber,
    lastSuccessConnectionDateTime: isString,
});

export type IsmExchangeStatusTaskResult = {
    status: IsmExchangeStatus;
    errors: IsmExchangeErrors;
};

export const isIsmExchangeStatusTaskResult = structureValidator<IsmExchangeStatusTaskResult>({
    status: isIsmExchangeStatus,
    errors: isIsmExchangeErrors,
});
