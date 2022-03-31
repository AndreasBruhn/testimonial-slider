module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1440px',
				'4xl': '1920px',
			},
			spacing: {
				'10%': '10%',
				'47%': '47%',
				'56%': '56%',
				'57%': '57%',
				'60%': '60%',
				'65%': '65%',
				'76': '19rem',
				'77%': '77%',
				'84%': '84%',
				'85%': '85%',
				'88%': '88%',
				'90%': '90%',
				'125%': '125%',
			},
			boxShadow: {
				'custom-shadow': '0px 50px 30px -22px rgba(32, 32, 70,.5)'
			},
		},
	},
	plugins: [],
};
