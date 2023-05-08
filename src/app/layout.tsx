import './globals.css'
import clsx from 'clsx'

import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { Karla, Roboto_Mono } from 'next/font/google'

import BackToTop from '@/components/backToTop'
import CommandBar from '@/components/commandBar'
import { Navbar, Footer } from '@/components/layout'

const karla = Karla({
	variable: '--font-karla',
	subsets: ['latin']
});

const roboto = Roboto_Mono({
	variable: '--font-roboto',
	subsets: ['latin']
})

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
			className={clsx(karla.variable, roboto.variable, 'scroll-smooth bg-theme font-default')}
		>
			<body>
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
				<CommandBar>
					<Navbar />

					<main className='relative antialiased mx-auto mb-16 max-w-3xl px-4 py-16'>
						{children}
					</main>
					<Footer />
					<BackToTop />
				</CommandBar>
				<Analytics />
			</body>
		</html>
	)
}