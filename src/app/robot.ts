export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
				allow: ['/'],
				disallow: ['/404', '/500', '/api/*'],
			},
		],
		sitemap: 'https://gitonga.me/sitemap.xml',
		host: 'https://gitonga.me',
	}
}