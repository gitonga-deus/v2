import './globals.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import clsx from 'clsx'
import KBar from '@/components/kbar'
import CustomToaster from './custom-toaster'

import { roboto, inter } from '@/utils/fonts'
import { Navbar, Footer } from '@/components/layout'

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
			className={clsx(inter.className, roboto.variable)}
		>
			<KBar>
				<body className='antialiased select-text selection:bg-gray-200 overflow-x-hidden max-w-3xl relative mx-auto pt-20 px-4'>
					<Navbar />
					{children}
					<CustomToaster />
					<Footer />
					<Analytics />
				</body>
			</KBar>
		</html>
	)
}
