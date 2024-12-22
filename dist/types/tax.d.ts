export declare enum TaxType {
    none = "none",
    vat0 = "vat0",
    vat10 = "vat10",
    vat110 = "vat110",
    vat20 = "vat20",
    vat120 = "vat120"
}
export declare function isTaxType(v: unknown): v is TaxType;
export type Tax = {
    type: TaxType;
    sum: number;
};
export declare const isTax: import("../common/types/type-guard.js").TypeGuardDetail<Tax>;
//# sourceMappingURL=tax.d.ts.map