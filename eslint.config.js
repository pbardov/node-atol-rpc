import xo from 'eslint-config-xo';

export default [
	...xo,
	{
		rules: {
			'no-negated-condition': 'off',
			'new-cap': 'off',
			'no-await-in-loop': 'off',
			'capitalized-comments': 'off',
		},
	},
];
