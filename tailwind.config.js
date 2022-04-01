module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'MacAir': '1280px',
				'3xl': '1440px',
				'4xl': '1920px',
			},
			spacing: {
				'10%': '10%',
				'15%': '15%',
				'25%': '25%',
				'm25%': '-25%',
				'm29%': '-29%',
				'35%': '35%',
				'44%': '44%',
				'49%': '49%',
				'60%': '60%',
				'65%': '65%',
				'67%': '67%',
				'83%': '83%',
				'84%': '84%',
				'125%': '125%',
			},
			boxShadow: {
				'custom-shadow': '0px 50px 30px -22px rgba(32, 32, 70,.5)'
			},
			zIndex: {
				'-10': '-10',
			},
		},
	},
	plugins: [],
};
