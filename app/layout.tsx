import './globals.css'
import clsx from 'clsx'

import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'

import localFont from 'next/font/local'
import { Karla } from 'next/font/google'

import BackToTop from '@/components/backToTop'
import { Navbar, Footer } from '@/components/layout'

import CustomToaster from './custom-toaster'

const karla = Karla({
	variable: '--font-karla',
	subsets: ['latin']
});

const operator = localFont({
	src: '../public/fonts/operator-mono.woff2',
	variable: '--font-operator',
});

export const metadata: Metadata = {
	title: {
		default: 'Hello - Deus Gitonga',
		template: '%s - Deus Gitonga'
	},
	description: 'Developer and Writer',
	openGraph: {
		title: 'Hello - Deus Gitonga',
		description: 'Developer and Writer',
		url: 'https://gitonga.me',
		siteName: 'Deus Gitonga',
		images: [],
		locale: 'en_US',
		type: 'website'
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	manifest: '../favicon/site.webmanifest',
	icons: {
		icon: '../favicon/favicon.ico',
		shortcut: '../favicon/favicon.ico',
		apple: [
			{
				url: '../favicon/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
	},
	verification: {
		google: 'OdjLEq3FBtZ6ffW_Wuo83qQk9QsQtFVAe71q_yrkCGs',
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={clsx(karla.variable, operator.variable, 'scroll-smooth')}
		>
			<body className='select-text bg-theme font-default selection:bg-shade-1 selection:text-black'>
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

				<Navbar />
				<main className='relative max-w-4xl px-8 pb-16 mx-auto mb-12 antialiased'>
					{children}
				</main>
				<CustomToaster />
				<Footer />
				<BackToTop />

				<Analytics />
			</body>
		</html>
	)
}
