import './globals.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import clsx from 'clsx'

import KBar from '@/components/kbar'
import CustomToaster from './custom-toaster'
import { Navbar, Footer } from '@/components/layout'

import { Inter, Roboto_Mono, Fira_Code } from 'next/font/google'

import { site } from '@/config/site'

const inter = Inter({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-inter',
	weight: ['400', '500', '600', '700'],
});

const firaCode = Fira_Code({
	variable: '--font-fira-code',
	subsets: ['latin'],
});

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
	manifest: '../public/favicon/site.webmanifest',
	keywords: site.keywords,
	themeColor: '#0d1117',
	openGraph: {
		url: `${site.url}`,
		type: 'website',
		title: site.title,
		siteName: site.title,
		description: site.description,
		locale: 'en-US',
	},
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
		other: [...site.favicons],
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={clsx(inter.className, firaCode.variable, 'scroll-smooth')}
		>
			<body className='overflow-x-hidden bg-gitonga-bg font-default antialiased select-text selection:bg-gray-300'>
				<KBar>
					<Navbar />
					<main className='relative mx-auto mb-16 max-w-3xl px-8 py-24'>
						{children}
					</main>
					<CustomToaster />
					<Footer />
				</KBar>
				<Analytics />
			</body>

		</html>
	)
}