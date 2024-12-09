export enum ShiftState {
	closed = 'closed',
	opened = 'opened',
	expired = 'expired',
}

export function isShiftState(v: unknown): v is ShiftState {
	return Object.values(ShiftState).includes(v as ShiftState);
}
