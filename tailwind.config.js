/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				"v2-bg": "var(--v2-bg)",
				"v2-fg": "var(--v2-fg)",

				"accent-1": "var(--accent-1)",
				"accent-2": "var(--accent-2)",
				"accent-3": "var(--accent-3)",
				"accent-4": "var(--accent-4)",
				"accent-5": "var(--accent-5)",
				"accent-6": "var(--accent-6)",
				"accent-7": "var(--accent-7)",
				"accent-8": "var(--accent-8)",
			},
			fontFamily: {
				code: [
					'var(--font-roboto)',
				],
				emoji: ['Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							textDecoration: 'none',
						},
						'h2, h3, h4, h5, h6': {
							position: 'relative',
							scrollMarginTop: '80px',

							'& a::before': {
								content: 'none !important',
							},
						},
						'blockquote p:first-of-type::before': {
							content: 'none'
						},
						'blockquote p:first-of-type::after': {
							content: 'none'
						},
						img: {
							margin: '24px auto',
						},
						code: {
							fontFamily: 'Monaco',
							backgroundColor: 'var(--accent-1)',
							borderRadius: '2px'
						},

						'[data-rehype-pretty-code-title]': {
							backgroundColor: 'var(--accent-2)',
							border: '1px solid var(--accent-2)',
							borderTopLeftRadius: '4px',
							borderTopRightRadius: '4px',
							padding: '5px 20px',
							fontSize: '14px',
						},
						'[data-rehype-pretty-code-title] ~ pre': {
							marginTop: '0',
							borderTopLeftRadius: '0',
							borderTopRightRadius: '0',
							borderTopWidth: '0',
						},
						'[data-rehype-pretty-code-title] ~ pre ~ button': {
							top: '15px !important',
						},
						pre: {
							opacity: 0.98,
							fontSize: '13px',
							backgroundColor: 'var(--accent-1)',
							padding: '8px 0',
							lineHeight: '1.7',
							borderRadius: '4px',
							border: '1px solid var(--accent-2)',

							'[data-line-numbers]': {
								'.line::before': {
									content: 'counter(line)',
									counterIncrement: 'line',
									display: 'inline-block',
									width: '16px',
									marginRight: '16px',
									textAlign: 'right',
									color: 'var(--accent-3)',
								},
								'.line.highlighted::before': {
									color: 'var(--accent-3)',
								},
							},

							'> code': {
								display: 'grid',
								counterReset: 'line',

								'.word': {
									backgroundColor: 'rgba(239, 68, 68, 0.2)',
									padding: '4px',
									borderRadius: '4px',
								},

								'> .line': {
									padding: '0 20px 0 12px',
									borderLeft: `2px solid transparent`,
								},

								'> .line.highlighted': {
									borderLeftColor: 'rgba(105, 105, 105, 0.5)',
									backgroundColor: 'rgba(105, 105, 105, 0.2)',
								},
							},
						},
						':not(pre) > code': {
							padding: '4px',
							fontSize: '13px',
							borderRadius: '4px',
						},
					}
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
