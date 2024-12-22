import { type Phone12 } from '../common/types/phone12.js';
export type SupplierInfo = {
    phones: Phone12[];
    name: string;
    vatin: string;
    supplierPrint?: boolean;
    supplierVatinPrint?: boolean;
};
export declare const isSupplierInfo: import("../common/types/type-guard.js").TypeGuardDetail<SupplierInfo>;
//# sourceMappingURL=supplier-info.d.ts.map