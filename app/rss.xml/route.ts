import RSS from 'rss'

import { NextResponse } from 'next/server'
import { allArticles } from 'contentlayer/generated'

export const GET = async () => {
	const feed = new RSS({
		title: 'Deus Gitonga\'s Blog',
		description: "Personal Website and Blog",
		site_url: 'https://gitonga.me',
		feed_url: 'https://gitonga.me/feed.xml',
		language: 'en-US',
	})

	const article = allArticles.sort(
		(a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
	)

	article.map((article) => {
		const { title, summary, publishedAt, slug } = article;

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