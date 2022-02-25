module.exports = {
	purge: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			margin: {
				'46':'11.5rem'
			},
		},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}