import './globals.css'
import clsx from 'clsx'

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

export const metadata = {
	title: 'Hello - Deus Gitonga',
	description: 'Developer and Writer',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={clsx(karla.variable, roboto.className, 'scroll-smooth bg-theme')}
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

					<main className='relative  font-default antialiased mx-auto mb-16 max-w-3xl px-4 py-16'>
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
