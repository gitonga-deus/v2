import './globals.css'

import type { Metadata } from 'next'

import KBar from '@/components/kbar'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

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
		>
			<KBar>
				<body className='antialiased select-none overflow-x-hidden max-w-3xl relative mx-auto pt-24 px-8'>
					<Navbar />
					{children}
					<Footer />
				</body>
			</KBar>
		</html>
	)
}
