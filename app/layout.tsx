import './globals.css';
import clsx from 'clsx';

import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import { Navbar, Footer } from '@/components/layout';

const roboto = Roboto_Mono({
	variable: '--font-roboto',
	display: 'swap',
	subsets: ['latin']
})

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
		// images: [{}],
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
	icons: {
		shortcut: '/favicon.ico',
	},
	verification: {

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
				'text-black bg-gray-50 dark:text-white dark:bg-[#111010]',
				roboto.variable
			)}
		>
			<body className='px-8'>
				<Navbar />
				<main className='max-w-2xl mx-auto'>
					{children}
					<Analytics />
				</main>
				<Footer />
			</body>
		</html>
	);
}