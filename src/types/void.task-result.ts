// eslint-disable-next-line @typescript-eslint/no-restricted-types
export type VoidTaskResult = void | null | undefined;

export function isVoidTaskResult(v: unknown): v is VoidTaskResult {
	return true; // в данном случае нам не важно что в значении
}
