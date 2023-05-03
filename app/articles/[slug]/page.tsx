import type { Metadata } from 'next'

import { notFound } from 'next/navigation';
import { Article, WithContext } from 'schema-dts'

import { allArticles } from 'contentlayer/generated';

import Header from './header'
import Content from './content';

const url = 'https://gitonga.me'

type ArticlesPageProp = {
	params: {
		slug: string
	}
}

export const generateStaticParams = () => {
	return allArticles.map((article) => ({
		slug: article.slug,
	}))
}

export const generateMetadata = (props: ArticlesPageProp): Metadata => {
	const { params } = props

	const article = allArticles.find((article) => article.slug === params.slug)

	if (!article) {
		return {}
	}

	return {
		title: article.title,
		description: article.summary,
		openGraph: {
			title: article.title,
			description: article.summary,
			type: 'article',
			publishedTime: article.publishedAt,
			url: `https://gitonga.me/articles/${params.slug}`,
			images: [
				// {
				// 	url: ogImage
				// }
			]
		},
	}
}

const ArticlesPage = (props: ArticlesPageProp) => {
	const { slug } = props.params;

	const article = allArticles.find((article) => article.slug === slug);

	if (!article) {
		notFound()
	}

	const { title, summary, publishedAt } = article;

	const jsonLd: WithContext<Article> = {
		'@context': 'https://schema.org',
		'@type': 'Article',

		headline: title,
		description: summary,
		datePublished: publishedAt,
		author: {
			'@type': 'Person',
			name: 'Deus Gitonga',
			url: url,
		},
		publisher: {
			'@type': 'Person',
			name: 'Deus Gitonga',
			url: url,
		},
	}

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* Main Content */}
			<Header
				title={title}
				date={publishedAt}
				readingTime={article.readingTime.text}
			/>

			<Content
				slug={slug}
				article={article}
			/>
		</>
	)
}

export default ArticlesPage;