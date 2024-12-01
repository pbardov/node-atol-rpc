export enum TextWrap {
	none = 'none',
	chars = 'chars',
	words = 'words'
}

export function isTextWrap(v: unknown): v is TextWrap {
	return Object.values(TextWrap).includes(<TextWrap>v);
}
