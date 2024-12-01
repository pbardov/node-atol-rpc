import {type DocumentItem} from './document-item.js';
import {DocumentItemType} from './document-item-type.js';
import {isTextAlignment, type TextAlignment} from './text-alignment.js';
import {isTextWrap, type TextWrap} from './text-wrap.js';
import isString from '../common/types/is-string.js';
import {makeOpt} from '../common/types/is-opt.js';
import isNumber from '../common/types/is-number.js';
import isBoolean from '../common/types/is-boolean.js';
import structureValidator from '../common/types/structure-validator.js';

export type DocumentItemText = DocumentItem & {
	type: DocumentItemType.text;
	text: string;
	alignment?: TextAlignment;
	wrap?: TextWrap;
	font?: number;
	doubleWidth?: boolean;
	doubleHeight?: boolean;
	storeInJournal?: boolean;
};

export const isDocumentItemText = structureValidator<DocumentItemText>({
	type: (v: unknown): v is DocumentItemType.text => v === DocumentItemType.text,
	text: isString,
	alignment: makeOpt(isTextAlignment),
	wrap: makeOpt(isTextWrap),
	font: makeOpt(isNumber),
	doubleWidth: makeOpt(isBoolean),
	doubleHeight: makeOpt(isBoolean),
	storeInJournal: makeOpt(isBoolean),
});
