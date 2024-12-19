import { DocumentItemType } from './document-item-type.js';
import { isMeasurementUnit } from './measurement-unit.js';
import { isPaymentMethod } from './payment-method.js';
import { isPaymentObject } from './payment-object.js';
import { isNomenclatureCode } from './nomenclature-code.js';
import { isMarkingCode } from './marking-code.js';
import { isImcParams } from './imc-params.js';
import { isTax } from './tax.js';
import { isAgentInfo } from './agent-info.js';
import { isSupplierInfo } from './supplier-info.js';
import { isIndustryInfo } from './industry-info.js';
import { isProductCodes } from './product-codes.js';
import { isCustomParameter } from './custom-parameter.js';
import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import isNumber from '../common/types/is-number.js';
import { makeOpt } from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
export const isDocumentItemPosition = structureValidator({
    type: (v) => v === DocumentItemType.position,
    name: isString,
    price: isNumber,
    quantity: isNumber,
    amount: isNumber,
    infoDiscountAmount: makeOpt(isNumber),
    department: makeOpt(isNumber),
    measurementUnit: isMeasurementUnit,
    piece: makeOpt(isBoolean),
    paymentMethod: makeOpt(isPaymentMethod),
    paymentObject: makeOpt(isPaymentObject),
    nomenclatureCode: makeOpt(isNomenclatureCode),
    markingCode: makeOpt(isMarkingCode),
    imcParams: makeOpt(isImcParams),
    tax: makeOpt(isTax),
    agentInfo: makeOpt(isAgentInfo),
    supplierInfo: makeOpt(isSupplierInfo),
    industryInfo: makeOpt(isIndustryInfo),
    productCodes: makeOpt(isProductCodes),
    additionalAttribute: makeOpt(isString),
    additionalAttributePrint: makeOpt(isBoolean),
    exciseSum: makeOpt(isNumber),
    countryCode: makeOpt(isString),
    customsDeclaration: makeOpt(isString),
    userParam3: makeOpt(isNumber),
    userParam4: makeOpt(isNumber),
    userParam5: makeOpt(isNumber),
    userParam6: makeOpt(isNumber),
    customParameters: makeOpt(arrayTypeGuard(isCustomParameter)),
});
