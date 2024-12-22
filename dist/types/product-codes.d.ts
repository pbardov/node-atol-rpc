import type { ValidationErrors } from '../common/types/type-guard.js';
export type ProductCodesWithoutTypes = {
    codes: string[];
};
export type ProductCodesWithTypes = {
    undefined?: string;
    ean8?: string;
    ean13?: string;
    itf14?: string;
    gs10?: string;
    gs1m?: string;
    short?: string;
    furs?: string;
    egais20?: string;
    egais30?: string;
    f1?: string;
    f2?: string;
    f3?: string;
    f4?: string;
    f5?: string;
    f6?: string;
};
export type ProductCodes = ProductCodesWithTypes | ProductCodesWithoutTypes;
export declare const isProductCodesWithoutTypes: import("../common/types/type-guard.js").TypeGuardDetail<ProductCodesWithoutTypes>;
export declare const isProductCodesWithTypes: import("../common/types/type-guard.js").TypeGuardDetail<ProductCodesWithTypes>;
export declare function isProductCodes(v: unknown, errors?: ValidationErrors): v is ProductCodes;
//# sourceMappingURL=product-codes.d.ts.map