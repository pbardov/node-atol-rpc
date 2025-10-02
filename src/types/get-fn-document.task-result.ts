import structureValidator from '../common/types/structure-validator.js';
import { type DocumentTLV, isDocumentTLV } from './document-tlv.js';
import {makeOpt} from '../common/types/is-opt.js';
import isString from '../common/types/is-string.js';

export type GetFnDocumentTaskResult = {
  documentTLV: DocumentTLV;
  rawData?: string;
};

export const isGetFnDocumentTaskResult = structureValidator<GetFnDocumentTaskResult>({
  documentTLV: isDocumentTLV,
  rawData: makeOpt(isString),
});
