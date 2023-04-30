import type { Metadata } from 'next'
import { notFound } from 'next/navigation';
import { Article, WithContext } from 'schema-dts'

import { allArticles } from 'contentlayer/generated';

import Header from './header'
import Content from './content';
import { site } from '@/config/site'

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
			url: `${site.url}/articles/${params.slug}`,
			type: 'article',
			title: article.title,
			siteName: site.name,
			description: article.summary,
			locale: 'en-US',
			authors: site.url,
		},
	}
}

const ArticlesPage = (props: ArticlesPageProp) => {
	const { slug } = props.params;

	const article = allArticles.find((article) => article.slug === slug);

	if (!article) {
		notFound()
	}

	const { title, summary, publishedAt, author } = article;

	const jsonLd: WithContext<Article> = {
		'@context': 'https://schema.org',
		'@type': 'Article',

		headline: title,
		description: summary,
		datePublished: publishedAt,
		author: {
			'@type': 'Person',
			name: site.name,
			url: site.url,
		},
		publisher: {
			'@type': 'Person',
			name: site.name,
			url: site.url,
		},
	}

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* Main Content */}
			<Header title={title} readingTime={article.readingTime.text} date={publishedAt} author={author} />
			<Content slug={slug} article={article} />
		</>
	)
}

export default ArticlesPage;