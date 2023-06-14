import { allArticles } from "contentlayer/generated";

export default async function sitemap(){
	const articles = allArticles.map((article) => (
		{
			url: `https://gitonga.me/articles/${article.slug}`,
			lastModified: article.publishedAt,
		}
	));

	const routes = [
		'',
		'/about',
		'/articles',
		'/snippets'
	].map(
		(route) => ({
			url: `https://gitonga.me${route}`,
			lastModified: new Date().toISOString().split('T')[0],
		})
	);

	return [...routes, ...articles];
}