/* eslint-disable no-undef */
module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,json,svg,md,jsx,png,css,js,lock}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};