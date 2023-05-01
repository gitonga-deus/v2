export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
			},
		],
		sitemap: 'https://gitonga.me/sitemap.xml',
		host: 'https://gitonga.me',
	};
}