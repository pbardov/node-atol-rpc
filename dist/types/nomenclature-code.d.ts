import { type TypeGuardDetail, type ValidationErrors } from '../common/types/type-guard.js';
export declare enum NomenclatureCodeType {
    furs = "furs",
    medicines = "medicines",
    tobacco = "tobacco",
    shoes = "shoes"
}
export declare function isNomenclatureCodeType(v: unknown): v is NomenclatureCodeType;
export type NomenclatureCode<T extends NomenclatureCodeType = NomenclatureCodeType> = {
    type: T;
    gtin: T extends NomenclatureCodeType.furs ? undefined : string;
    serial: string;
};
export declare const isNomenclatureCodeFurs: TypeGuardDetail<NomenclatureCode<NomenclatureCodeType.furs>>;
export declare const isNomenclatureCodeGeneric: TypeGuardDetail<NomenclatureCode<NomenclatureCodeType>>;
export declare function isNomenclatureCode(v: unknown, error?: ValidationErrors): v is NomenclatureCode;
//# sourceMappingURL=nomenclature-code.d.ts.map