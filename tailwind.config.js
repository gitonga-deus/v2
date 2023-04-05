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
				"accent-5": "var(--accent-5)",
			}
		},
	},
	plugins: [],
}