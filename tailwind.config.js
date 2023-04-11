/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"gitonga-bg": "var(--gitonga-bg)",
				"gitonga-fg": "var(--gitonga-fg)",

				"shade-1": "var(--shade-1)",
				"shade-2": "var(--shade-2)",
				"shade-3": "var(--shade-3)",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							textDecoration: "none",
						},
						h6: {
							position: "relative",
							scrollMarginTop: "128px"
						},
						code: {
							color: theme('color.blue.500'),
							fontWeight: "normal"
						},
					}
				}
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
}