import './globals.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import clsx from 'clsx'

import KBar from '@/components/kbar'
import BackToTop from '@/components/backToTop'
import { Navbar, Footer } from '@/components/layout'

import localFont from 'next/font/local'
import { Karla } from 'next/font/google'

const karla = Karla({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-karla',
	weight: ['400', '500', '600', '700']
});

const operatorMono = localFont({
	src: '../public/fonts/OperatorMono-Book.woff2',
	weight: '400',
	variable: '--font-operator-mono',
});

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
			className={clsx(karla.variable, operatorMono.variable, 'scroll-smooth')}
		>
			<body className='bg-theme font-default antialiased select-text selection:bg-color-2'>
				<svg
					className="pointer-events-none fixed top-0 left-0 isolate z-50 opacity-[0.2] mix-blend-normal"
					width="100%"
					height="100%"
				>
					<filter id="v2">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.75"
							numOctaves="4"
							stitchTiles="stitch"
						/>
						<feColorMatrix type="saturate" values="0" />
					</filter>
					<rect
						width="100%"
						height="100%"
						filter="url(#v2)"
					></rect>
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