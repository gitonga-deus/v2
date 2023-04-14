import './globals.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import KBar from '@/components/kbar'
import { inter } from '@/utils/fonts'
import { Navbar, Footer } from '@/components/layout'
import { clsx } from 'clsx'

export const metadata: Metadata = {
	title: {
		default: 'Deus Gitonga',
		template: '%s | Deus Gitonga',
	},
	description: 'Developer & Writer.',
	openGraph: {
		title: 'Deus Gitonga',
		description: 'Developer & Writer.',
		url: 'https://gitonga.me',
		siteName: 'Deus Gitonga',
		images: [],
		locale: 'en_US',
		type: 'website',
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={inter.className}
		>
			<KBar>
				<body className='antialiased select-none overflow-x-hidden max-w-3xl relative mx-auto pt-20 px-8'>
					<span
						className={clsx(
							"rounded-full bg-gradient-to-r from-blue-300 via-cyan-200 to-green-300 opacity-70",
							"-z-50 aspect-square w-full blur-3xl filter",
							"bottom-[calc(100%-200px)]",
							"absolute"
						)}
					/>
					<Navbar />
					{children}
					<Footer />
					<Analytics />
				</body>
			</KBar>
		</html>
	)
}
