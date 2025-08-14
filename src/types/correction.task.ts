import {isJsonTaskType, JsonTaskType} from './json-task-type.js';
import type {JsonTask} from './json-task.js';
import {isOperator, type Operator} from './operator.js';
import {type CorrectionType, isCorrectionType} from './correction-type.js';
import {type AtolDate, isAtolDate} from './atol-date.js';
import {isTaxationType, type TaxationType} from './taxation-type.js';
import {type ClientInfo, isClientInfo} from './client-info.js';
import {type CompanyInfo, isCompanyInfo} from './company-info.js';
import {type AgentInfo, isAgentInfo} from './agent-info.js';
import {isSupplierInfo, type SupplierInfo} from './supplier-info.js';
import {type DocumentItem, type DocumentPrintItem, isDocumentItem, isDocumentPrintItem} from './document-item.js';
import {isPayment, type Payment} from './payment.js';
import {isTax, type Tax} from './tax.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';
import structureValidator from '../common/types/structure-validator.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import isString from '../common/types/is-string.js';
import isNumber from '../common/types/is-number.js';

export const correctionTaskTypes = [
    JsonTaskType.sellCorrection, JsonTaskType.sellReturnCorrection,
    JsonTaskType.buyCorrection, JsonTaskType.buyReturnCorrection
];
export type CorrectionTaskTypesTuple = typeof correctionTaskTypes;
export type CorrectionTaskType = CorrectionTaskTypesTuple[number];

export type CorrectionTask<T extends CorrectionTaskType = CorrectionTaskType> = JsonTask & {
    type: T;
    ignoreNonFiscalPrintErrors?: boolean;
    operator?: Operator;
    correctionType?: CorrectionType;
    correctionBaseDate?: AtolDate;
    correctionBaseNumber?: string;
    electronically?: boolean;
    taxationType?: TaxationType;
    paymentsPlace?: string;
    paymentsAddress: string;
    machineNumber?: string;
    clientInfo?: ClientInfo;
    companyInfo?: CompanyInfo;
    agentInfo?: AgentInfo;
    supplierInfo?: SupplierInfo;
    items: DocumentItem[];
    payments: Payment[];
    taxes: Tax[];
    total?: number;
    preItems?: DocumentPrintItem[];
    postItems?: DocumentPrintItem[];
};

export type SellCorrectionTask = CorrectionTask<JsonTaskType.sellCorrection>;
export type SellReturnCorrectionTask = CorrectionTask<JsonTaskType.sellReturnCorrection>;
export type BuyCorrectionTask = CorrectionTask<JsonTaskType.buyCorrection>;
export type BuyReturnCorrectionTask = CorrectionTask<JsonTaskType.buyReturnCorrection>;

export const correctionTaskTypeGuard = <T extends CorrectionTaskType>(types: T[]) => structureValidator<CorrectionTask<T>>({
    type: (v: unknown): v is T => isJsonTaskType(v) && types.includes(v as T),
    ignoreNonFiscalPrintErrors: makeOpt(isBoolean),
    operator: makeOpt(isOperator),
    correctionType: makeOpt(isCorrectionType),
    correctionBaseDate: makeOpt(isAtolDate),
    correctionBaseNumber: makeOpt(isString),
    electronically: makeOpt(isBoolean),
    taxationType: makeOpt(isTaxationType),
    paymentsPlace: makeOpt(isString),
    paymentsAddress: isString,
    machineNumber: makeOpt(isString),
    clientInfo: makeOpt(isClientInfo),
    companyInfo: makeOpt(isCompanyInfo),
    agentInfo: makeOpt(isAgentInfo),
    supplierInfo: makeOpt(isSupplierInfo),
    items: arrayTypeGuard(isDocumentItem),
    payments: arrayTypeGuard(isPayment),
    taxes: arrayTypeGuard(isTax),
    total: makeOpt(isNumber),
    preItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
    postItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
});

export const isCorrectionTask = correctionTaskTypeGuard([
    JsonTaskType.sellCorrection,
    JsonTaskType.buyCorrection,
    JsonTaskType.sellReturnCorrection,
    JsonTaskType.buyReturnCorrection
]);
export const isSellCorrectionTask = correctionTaskTypeGuard([JsonTaskType.sellCorrection]);
export const isBuyCorrectionTask = correctionTaskTypeGuard([JsonTaskType.buyCorrection]);
export const isSellReturnCorrectionTask = correctionTaskTypeGuard([JsonTaskType.sellReturnCorrection]);
export const isBuyReturnCorrectionTask = correctionTaskTypeGuard([JsonTaskType.buyReturnCorrection]);

