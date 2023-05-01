import { allArticles } from 'contentlayer/generated';

export default async function sitemap() {
	const article = allArticles.map((article) => ({
		url: `https://gitonga.me/articles/${article.slug}`,
		lastModified: article.publishedAt,
	}));

	const routes = ['', '/articles'].map(
		(route) => ({
			url: `https://gitonga.me${route}`,
			lastModified: new Date().toISOString().split('T')[0],
		})
	);

	return [...routes, ...article];
}