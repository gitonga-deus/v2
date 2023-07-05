const siteUrl = 'https://gitonga.me'

const robots = () => {
	return {
		rules: [
			{
				userAgent: '*',
				allow: ['/'],
				disallow: ['/404', '/500', '/api/*'],
			},
		],
		sitemap: `${siteUrl}/sitemap.xml`,
		host: `${siteUrl}`,
	}
}

export default robots