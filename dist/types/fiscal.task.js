import { isJsonTaskType, JsonTaskType } from './json-task-type.js';
import { isTaxationType } from './taxation-type.js';
import { isOperator } from './operator.js';
import { isClientInfo } from './client-info.js';
import { isCompanyInfo } from './company-info.js';
import { isAgentInfo } from './agent-info.js';
import { isSupplierInfo } from './supplier-info.js';
import { isOperationInfo } from './operation-info.js';
import { isIndustryInfo } from './industry-info.js';
import { isDocumentItem, isDocumentPrintItem, } from './document-item.js';
import { isPayment } from './payment.js';
import { isTax } from './tax.js';
import { isCustomParameter } from './custom-parameter.js';
import { isUserAttribute } from './user-attribute.js';
import structureValidator from '../common/types/structure-validator.js';
import { makeOpt } from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import isString from '../common/types/is-string.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
import isNumber from '../common/types/is-number.js';
const fiscalTaskTypes = [JsonTaskType.sell, JsonTaskType.buy, JsonTaskType.sellReturn, JsonTaskType.buyReturn];
export const fiscalTaskTypeGuard = (types) => structureValidator({
    type: (v) => isJsonTaskType(v) && types.includes(v),
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
