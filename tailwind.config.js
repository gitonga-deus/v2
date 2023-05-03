/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"theme": "var(--theme)",

				"color-1": "var(--color-1)",
				"color-2": "var(--color-2)",

				"article-hover": "var(--article-hover)",

				"shade-1": "var(--shade-1)",
				"shade-2": "var(--shade-2)",
				"shade-3": "var(--shade-3)",
				"shade-4": "var(--shade-4)",
				"shade-5": "var(--shade-5)",
			},
			fontFamily: {
				default: ['var(--font-karla)'],
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
							scrollMarginTop: '112px',
							color: 'var(--shade-1)',

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
							backgroundColor: 'var(--color-1)',
							border: '1px solid var(--color-1)',
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
							top: '60px !important',
						},
						pre: {
							opacity: 0.98,
							backgroundColor: 'var(--gitonga-bg)',
							padding: '8px 0',
							lineHeight: '1.8',
							borderRadius: '4px',
							border: '1px solid var(--color-1)',

							'[data-line-numbers]': {
								'.line::before': {
									content: 'counter(line)',
									counterIncrement: 'line',
									display: 'inline-block',
									width: '16px',
									marginRight: '16px',
									textAlign: 'right',
									color: 'var(--shade-2)',
								},
								'.line.highlighted::before': {
									color: 'var(--shade-2)',
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
									borderLeftColor: 'rgba(105, 105, 105, 0.502)',
									backgroundColor: 'rgba(105, 105, 105, 0.251)',
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