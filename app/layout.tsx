import './globals.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import clsx from 'clsx'

import KBar from '@/components/kbar'
import BackToTop from '@/components/backToTop'
import { Navbar, Footer } from '@/components/layout'

import { Karla, Roboto_Mono, Inter } from 'next/font/google'

const inter = Inter ({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-inter',
	weight: ['400', '500', '600', '700']
})

const karla = Karla({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-karla',
	weight: ['400', '500', '600', '700']
});

const roboto = Roboto_Mono({
	variable: '--font-roboto',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		default: 'Deus Gitonga',
		template: '%s | Deus Gitonga',
	},
	description: 'Developer & Writer',
	openGraph: {
		title: 'Deus Gitonga',
		description: 'Developer & Writer',
		url: 'https://gitonga.me',
		siteName: 'Deus Gitonga',
		images: [
			{
				url: 'https://gitonga.me/images/og.png',
				width: 1200,
				height: 960,
			}
		],
		locale: 'en_US',
		type: 'website'
	},

	manifest: '../public/favicon/site.webmanifest',
	icons: {
		icon: '../public/favicon/favicon.ico',
		shortcut: '../public/favicon/favicon.ico',
		apple: [
			{
				url: '../public/favicon/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
	},
	verification: {
		google: 'OdjLEq3FBtZ6ffW_Wuo83qQk9QsQtFVAe71q_yrkCGs',
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={clsx(inter.variable, roboto.variable, 'scroll-smooth')}
		>
			<body className='bg-theme font-default antialiased select-text selection:bg-color-2'>
				<svg id="texture">
					<filter id="noise">
						<feTurbulence
							numOctaves="4"
							baseFrequency=".8"
							type="fractalNoise"
							stitchTiles="stitch"
						/>
						<feColorMatrix
							values="0"
							type="saturate"
						/>
					</filter>
					<rect width="100%" height="100%" filter="url(#noise)"></rect>
				</svg>

				<KBar>
					<Navbar />
					<main className='relative mx-auto mb-4 max-w-3xl px-8 py-20'>
						{children}
					</main>
					<BackToTop />
					<Footer />
				</KBar>
				<Analytics />
			</body>
		</html>
	)
}