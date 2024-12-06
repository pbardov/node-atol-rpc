import {type DocumentItem} from './document-item.js';
import {DocumentItemType} from './document-item-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';

export type DocumentItemUserAttribute = DocumentItem & {
	type: DocumentItemType.userAttribute;
	name: string;
	value: string;
	print?: boolean;
};

export const isDocumentItemUserAttribute = structureValidator<DocumentItemUserAttribute>({
	type: (v: unknown): v is DocumentItemType.userAttribute => v === DocumentItemType.userAttribute,
	name: isString,
	value: isString,
	print: makeOpt(isBoolean),
});
