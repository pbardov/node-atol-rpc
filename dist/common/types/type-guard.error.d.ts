import { type ValidationErrors } from './type-guard.js';
export type TypeGuardErrorOptions = {
    cause?: ValidationErrors;
};
export declare class TypeGuardError extends TypeError {
    readonly cause: ValidationErrors | undefined;
    constructor(message: string, { cause }?: TypeGuardErrorOptions);
    toString(): string;
}
//# sourceMappingURL=type-guard.error.d.ts.map