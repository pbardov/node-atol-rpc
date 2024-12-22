export declare enum MarkingCodeType {
    other = "other",
    egais20 = "egais20",
    egais30 = "egais30"
}
export declare function isMarkingCodeType(v: unknown): v is MarkingCodeType;
export type MarkingCode = {
    type: MarkingCodeType;
    mark: string;
};
export declare const isMarkingCode: import("../common/types/type-guard.js").TypeGuardDetail<MarkingCode>;
//# sourceMappingURL=marking-code.d.ts.map