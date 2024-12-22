import { type DocumentItem } from './document-item.js';
import { DocumentItemType } from './document-item-type.js';
export type DocumentItemUserAttribute = DocumentItem & {
    type: DocumentItemType.userAttribute;
    name: string;
    value: string;
    print?: boolean;
};
export declare const isDocumentItemUserAttribute: import("../common/types/type-guard.js").TypeGuardDetail<DocumentItemUserAttribute>;
//# sourceMappingURL=document-item.user-attribute.d.ts.map