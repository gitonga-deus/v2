/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				"theme": "var(--theme)",

				"shade-1": "var(--shade-1)",
				"shade-2": "var(--shade-2)",

				"color-1": "var(--color-1)",
				"color-2": "var(--color-2)",
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
							scrollMarginTop: '112px',
							color: 'var(--theme)',

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
							color: 'rgb(0, 0, 255)',
							'&::before': {
								content: `"" !important`,
							},
							'&::after': {
								content: `"" !important`,
							},
							
							fontWeight: 'normal'
						},

						'[data-rehype-pretty-code-title]': {
							backgroundColor: 'var(--shade-1)',
							border: '1px solid var(--shade-1)',
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
							backgroundColor: 'var(--color-1)',
							padding: '8px 0',
							lineHeight: '1.7',
							borderRadius: '4px',
							border: '1px solid var(--shade-1)',

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
