import './globals.css'
import clsx from 'clsx'

import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from '@/lib/nextThemes'

import { Analytics } from '@vercel/analytics/react'

import { Navbar, Footer } from '@/components/layout'

const roboto = Roboto_Mono({
	variable: '--font-roboto',
	display: 'swap',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: {
		default: 'Deus Gitonga',
		template: '%s | Deus Gitonga',
	},
	description: 'Developer and Writer.',
	openGraph: {
		title: 'Deus Gitonga',
		description: 'Developer and Writer.',
		url: 'https://gitonga.me',
		siteName: 'Deus Gitonga',
		images: [],
		locale: 'en-US',
		type: 'website',
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
		google: ''
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={clsx(
				'scroll-smooth',
				roboto.variable,
			)}
		>
			<body className='px-8 bg-v2-bg antialiased'>
				<ThemeProvider attribute='class'>

					<Navbar />
					<main className='max-w-2xl mx-auto'>
						{children}
						<Analytics />
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
