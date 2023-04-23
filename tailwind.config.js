/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
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
				"shade-4": "var(--shade-4)",
				"shade-5": "var(--shade-5)",
			},
			fontFamily: {
				// default: ['var(--font-inter)'],
				code: [
					'var(--font-operator)'
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
							scrollMarginTop: '128px',

							'& a::before': {
								content: 'none !important',
							},
						},
						img: {
							margin: '24px auto',
						},
						code: {
							color: theme('colors.red.500'),
							'&::before': {
								content: `"" !important`,
							},
							'&::after': {
								content: `"" !important`,
							},
							fontWeight: 'normal',
						},
						'[data-rehype-pretty-code-title]': {
							backgroundColor: 'var(--pre-bg)',
							border: '1px solid var(--shade-5)',
							borderTopLeftRadius: '8px',
							borderTopRightRadius: '8px',
							padding: '10px 20px',
							fontSize: '14px',
						},
						'[data-rehype-pretty-code-title] ~ pre': {
							marginTop: '0',
							borderTopLeftRadius: '0',
							borderTopRightRadius: '0',
							borderTopWidth: '0',
						},
						'[data-rehype-pretty-code-title] ~ pre ~ button': {
							top: '60px !important',
						},
						pre: {
							opacity: 0.98,
							backgroundColor: 'var(--gitonga-bg)',
							padding: '10px 0',
							lineHeight: 2,
							borderRadius: '8px',
							border: '1px solid var(--shade-5)',

							'[data-line-numbers]': {
								'.line::before': {
									content: 'counter(line)',
									counterIncrement: 'line',
									display: 'inline-block',
									width: '16px',
									marginRight: '16px',
									textAlign: 'right',
									color: 'var(--gitonga-fg)',
								},
								'.line.highlighted::before': {
									color: 'var(--gitonga-fg)',
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
									borderLeftColor: 'rgba(68, 68, 230, 0.4)',
									backgroundColor: 'rgba(68, 68, 230, 0.1)',
								},
							},
						},
						':not(pre) > code': {
							backgroundColor: 'var(--gitonga-bg)',
							padding: '4px',
							fontSize: '14px !important',
							borderRadius: '4px',
						},
					}
				},
				invert: {
					css: {
						code: {
							color: theme('colors.red.400'),
						},
						pre: {
							'> code': {
								'.word': {
									backgroundColor: 'rgba(239, 68, 68, 0.2)',
								},
								'> .line.highlighted': {
									borderLeftColor: 'rgba(239, 68, 68, 0.4)',
									backgroundColor: 'rgba(239, 68, 68, 0.2)',
								},
							}
						}
					}
				}
			}),
		},
	},
	variants: {
		typography: ['invert']
	},
	plugins: [require('@tailwindcss/typography')],
}