import {type DocumentItem} from './document-item.js';
import {DocumentItemType} from './document-item-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';

export type DocumentItemAdditionalAttribute = DocumentItem & {
	type: DocumentItemType.additionalAttribute;
	value: string;
	print?: boolean;
};

export const isDocumentItemAdditionalAttribute = structureValidator<DocumentItemAdditionalAttribute>({
	type: (v: unknown): v is DocumentItemType.additionalAttribute => v === DocumentItemType.additionalAttribute,
	value: isString,
	print: makeOpt(isBoolean),
});
