export type TypeGuard<T> = (v: unknown) => v is T;
export type ArrayTypeGuard<T> = (v: unknown) => v is T[];
export const errorDescription = Symbol('Error description');
export type ValidationErrors = Record<keyof any, any>;
export type TypeGuardDetail<T> = (v: unknown, errors?: ValidationErrors) => v is T;
