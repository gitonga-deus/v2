import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

const isProduction = process.env.NODE_ENV === 'production'

type Site = {
	url: string
	// logo: string
	title: string
	name: string
	keywords: string[]
	titleTemplate: string
	description: string
	githubUsername: string
	favicons: IconDescriptor[]
}

export const site: Site = {
	url: isProduction ? 'https://gitonga.me' : 'http://localhost:3000',
	// logo: '',
	title: 'Deus Gitonga',
	name: 'Deus Gitonga',
	keywords: ['Deus Gitonga', 'Next.js', 'React', 'TypeScript', 'Frontend Developer'],
	titleTemplate: '| Deus Gitonga',
	description: 'Developer',
	githubUsername: 'gitonga-deus',
	favicons: [
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			url: '/static/favicon/favicon-16x16.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/static/favicon/favicon-32x32.png',
		},
	],
}