module.exports = {
	purge: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			margin: {
				'46':'11.5rem'
			},
			height: {
				'99':'40vw'
			},
			rotate: {
				'35':"35deg"
			},
			maxHeight: {
				'500':"500px"
			}
		},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}