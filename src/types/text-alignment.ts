export enum TextAlignment {
	left = 'left',
	center = 'center',
	right = 'right'
}

export function isTextAlignment(v: unknown): v is TextAlignment {
	return Object.values(TextAlignment).includes(<TextAlignment>v);
}
