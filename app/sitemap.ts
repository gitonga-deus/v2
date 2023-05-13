import { allArticles } from 'contentlayer/generated'

const sitemap = async () => {
	const articles = allArticles.map((article) => ({
		url: `https://gitonga.me/articles/${article.slug}`,
		lastModified: article.publishedAt.split('T')[0],
	}))

	const routes = [
		'',
		'/articles'
	].map((route) => ({
		url: `https://gitonga.me${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	return [...routes, ...articles]
}

export default sitemap;