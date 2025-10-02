import {type DocumentItem} from './document-item.js';
import {DocumentItemType} from './document-item-type.js';
import {isMeasurementUnit, type MeasurementUnit} from './measurement-unit.js';
import {isPaymentMethod, type PaymentMethod} from './payment-method.js';
import {isPaymentObject, type PaymentObject} from './payment-object.js';
import {isNomenclatureCode, type NomenclatureCode} from './nomenclature-code.js';
import {isMarkingCode, type MarkingCode} from './marking-code.js';
import {type ImcParamsDocument, isImcParamsDocument} from './imc-params.js';
import {isTax, type Tax} from './tax.js';
import {type AgentInfo, isAgentInfo} from './agent-info.js';
import {isSupplierInfo, type SupplierInfo} from './supplier-info.js';
import {type IndustryInfo, isIndustryInfo} from './industry-info.js';
import {isProductCodes, type ProductCodes} from './product-codes.js';
import {type CustomParameter, isCustomParameter} from './custom-parameter.js';
import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import isNumber from '../common/types/is-number.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';

export type DocumentItemPosition = DocumentItem & {
	type: DocumentItemType.position;
	name: string;
	price: number;
	quantity: number;
	amount: number;
	infoDiscountAmount?: number;
	department?: number;
	measurementUnit: MeasurementUnit;
	piece?: boolean;
	paymentMethod?: PaymentMethod;
	paymentObject: PaymentObject;
	nomenclatureCode?: NomenclatureCode;
	markingCode?: MarkingCode;
	imcParams?: ImcParamsDocument;
	tax?: Tax;
	agentInfo?: AgentInfo;
	supplierInfo?: SupplierInfo;
	industryInfo?: IndustryInfo;
	productCodes?: ProductCodes;
	additionalAttribute?: string;
	additionalAttributePrint?: boolean;
	exciseSum?: number;
	countryCode?: string;
	customsDeclaration?: string;
	userParam3?: number;
	userParam4?: number;
	userParam5?: number;
	userParam6?: number;
	customParameters?: CustomParameter[];
};
export const isDocumentItemPosition = structureValidator<DocumentItemPosition>({
	type: (v: unknown): v is DocumentItemType.position => v === DocumentItemType.position,
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
	imcParams: makeOpt(isImcParamsDocument),
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
