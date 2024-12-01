export enum BarcodeType {
	EAN8 = 'EAN8',
	EAN13 = 'EAN13',
	UPCA = 'UPCA',
	UPCE = 'UPCE',
	CODE39 = 'CODE39',
	CODE93 = 'CODE93',
	CODE128 = 'CODE128',
	CODABAR = 'CODABAR',
	ITF = 'ITF',
	ITF14 = 'ITF14',
	GS1_128 = 'GS1_128',
	PDF417 = 'PDF417',
	QR = 'QR',
	CODE39_EXTENDED = 'CODE39_EXTENDED',
}

export function isBarcodeType(v: unknown): v is BarcodeType {
	return Object.values(BarcodeType).includes(v as BarcodeType);
}
