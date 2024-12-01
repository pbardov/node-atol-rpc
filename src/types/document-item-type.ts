export enum DocumentItemType {
	position = 'position',
	text = 'text',
	barcode = 'barcode',
	userAttribute = 'userAttribute',
	additionalAttribute = 'additionalAttribute',
	pictureFromMemory = 'pictureFromMemory',
	pixels = 'pixels',
}

export function isDocumentItemType(v: unknown): v is DocumentItemType {
	return Object.values(DocumentItemType).includes((v as DocumentItemType));
}
