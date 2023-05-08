import { allArticles } from 'contentlayer/generated'
import { NextResponse } from 'next/server'
import RSS from 'rss'

export const GET = async () => {
	const feed = new RSS({
		title: 'Deus Gitonga',
		description: 'Deus Gitonga\'s digital playground',
		site_url: 'https://gitonga.me',
		feed_url: 'https://gitonga.me/feed.xml',
		language: 'en-US',
	})

	const all_articles = allArticles.sort(
		(a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
	)

	all_articles.map((article) => {
		const { title, summary, publishedAt, slug } = article

		feed.item({
			title: title,
			url: `https://gitonga.me/articles/${slug}`,
			date: publishedAt,
			description: summary,
			author: 'Deus Gitonga',
		})
	})

	return new NextResponse(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/xml',
		},
	})
}