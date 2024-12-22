import { type DocumentItem } from './document-item.js';
import { DocumentItemType } from './document-item-type.js';
export type DocumentItemAdditionalAttribute = DocumentItem & {
    type: DocumentItemType.additionalAttribute;
    value: string;
    print?: boolean;
};
export declare const isDocumentItemAdditionalAttribute: import("../common/types/type-guard.js").TypeGuardDetail<DocumentItemAdditionalAttribute>;
//# sourceMappingURL=document-item.additional-attribute.d.ts.map