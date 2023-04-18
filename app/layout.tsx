import './globals.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import clsx from 'clsx'
import KBar from '@/components/kbar'
import CustomToaster from './custom-toaster'

import { roboto, inter } from '@/utils/fonts'
import { Navbar, Footer } from '@/components/layout'

import { site } from '@/config/site'

export const metadata: Metadata = {
	title: {
		default: site.title,
		template: `%s ${site.titleTemplate}`,
	},
	description: site.description,
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
	// manifest: '/static/favicon/site.webmanifest',
	keywords: site.keywords,
	themeColor: '#0d1117',
	openGraph: {
		url: `${site.url}`,
		type: 'website',
		title: site.title,
		siteName: site.title,
		description: site.description,
		locale: 'en-US',
		// images: [
		// 	{
		// 		url: `${site.url}/static/images/og/og.png`,
		// 		width: 1200,
		// 		height: 630,
		// 		alt: site.description,
		// 		type: 'image/png',
		// 	},
		// ],
	},
	icons: {
		icon: '../public/favicon.ico',
		shortcut: '../public/favicon.ico',
		apple: [
			{
				url: '../public/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
		other: [...site.favicons],
	},
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
