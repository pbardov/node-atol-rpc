import structureValidator from '../common/types/structure-validator.js';
import { type DocumentTLV, isDocumentTLV } from './document-tlv.js';

export type GetFnDocumentTaskResult = {
  documentTLV: DocumentTLV;
};

export const isGetFnDocumentTaskResult = structureValidator<GetFnDocumentTaskResult>({
  documentTLV: isDocumentTLV,
});
