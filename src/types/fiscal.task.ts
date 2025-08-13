import {isJsonTaskType, JsonTaskType} from './json-task-type.js';
import {type JsonTask} from './json-task.js';
import {isTaxationType, type TaxationType} from './taxation-type.js';
import {isOperator, type Operator} from './operator.js';
import {type ClientInfo, isClientInfo} from './client-info.js';
import {type CompanyInfo, isCompanyInfo} from './company-info.js';
import {type AgentInfo, isAgentInfo} from './agent-info.js';
import {isSupplierInfo, type SupplierInfo} from './supplier-info.js';
import {isOperationInfo, type OperationInfo} from './operation-info.js';
import {type IndustryInfo, isIndustryInfo} from './industry-info.js';
import {
	type DocumentItem, type DocumentPrintItem, isDocumentItem, isDocumentPrintItem,
} from './document-item.js';
import {isPayment, type Payment} from './payment.js';
import {isTax, type Tax} from './tax.js';
import {type CustomParameter, isCustomParameter} from './custom-parameter.js';
import {isUserAttribute, type UserAttribute} from './user-attribute.js';
import structureValidator from '../common/types/structure-validator.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import isString from '../common/types/is-string.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';
import isNumber from '../common/types/is-number.js';

export const fiscalTaskTypes = [JsonTaskType.sell, JsonTaskType.buy, JsonTaskType.sellReturn, JsonTaskType.buyReturn] as const;
export type FiscalTaskTypesTuple = typeof fiscalTaskTypes;
export type FiscalTaskTypes = FiscalTaskTypesTuple[number];

export type FiscalTask<T extends FiscalTaskTypes = FiscalTaskTypes> = JsonTask & {
	type: T;
	ignoreNonFiscalPrintErrors?: boolean;
	electronically?: boolean;
	taxationType?: TaxationType;
	paymentsPlace?: string;
	paymentsAddress: string;
	machineNumber?: string;
	operator?: Operator;
	clientInfo?: ClientInfo;
	companyInfo?: CompanyInfo;
	agentInfo?: AgentInfo;
	supplierInfo?: SupplierInfo;
	operationInfo?: OperationInfo;
	industryInfo?: IndustryInfo;
	items: DocumentItem[];
	payments: Payment[];
	taxes: Tax[];
	total?: number;
	preItems?: DocumentPrintItem[];
	postItems?: DocumentPrintItem[];
	validateMarkingCodes?: boolean;
	customParameters?: CustomParameter[];
	salesNotice?: UserAttribute[];
};

export type SellTask = FiscalTask<JsonTaskType.sell>;
export type BuyTask = FiscalTask<JsonTaskType.buy>;
export type SellReturnTask = FiscalTask<JsonTaskType.sellReturn>;
export type BuyReturnTask = FiscalTask<JsonTaskType.buyReturn>;

export const fiscalTaskTypeGuard = <T extends FiscalTaskTypes>(types: T[]) => structureValidator<FiscalTask<T>>({
	type: (v: unknown): v is T => isJsonTaskType(v) && types.includes(v as T),
	ignoreNonFiscalPrintErrors: makeOpt(isBoolean),
	electronically: makeOpt(isBoolean),
	taxationType: makeOpt(isTaxationType),
	paymentsPlace: makeOpt(isString),
	paymentsAddress: isString,
	machineNumber: makeOpt(isString),
	operator: makeOpt(isOperator),
	clientInfo: makeOpt(isClientInfo),
	companyInfo: makeOpt(isCompanyInfo),
	agentInfo: makeOpt(isAgentInfo),
	supplierInfo: makeOpt(isSupplierInfo),
	operationInfo: makeOpt(isOperationInfo),
	industryInfo: makeOpt(isIndustryInfo),
	items: arrayTypeGuard(isDocumentItem),
	payments: arrayTypeGuard(isPayment),
	taxes: arrayTypeGuard(isTax),
	total: makeOpt(isNumber),
	preItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
	postItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
	validateMarkingCodes: makeOpt(isBoolean),
	customParameters: makeOpt(arrayTypeGuard(isCustomParameter)),
	salesNotice: makeOpt(arrayTypeGuard(isUserAttribute)),
});

export const isFiscalTask = fiscalTaskTypeGuard([JsonTaskType.sell, JsonTaskType.buy, JsonTaskType.sellReturn, JsonTaskType.buyReturn]);
export const isSellTask = fiscalTaskTypeGuard([JsonTaskType.sell]);
export const isBuyTask = fiscalTaskTypeGuard([JsonTaskType.buy]);
export const isSellReturnTask = fiscalTaskTypeGuard([JsonTaskType.sellReturn]);
export const isBuyReturnTask = fiscalTaskTypeGuard([JsonTaskType.buyReturn]);
