import type { Metadata } from 'next';

import { allArticles } from 'contentlayer/generated';
import ArticleCard from '@/components/article/ArticleCard';

import { compareDesc } from 'date-fns'
import FilteredArticles from '@/components/article/FilteredArticles';

export const metadata: Metadata = {
	title: 'Articles',
	description: 'Thoughts, explorations, and how-to guides from a wandering mind.',
};

export default function Page() {
	const articles = allArticles.sort((a, b) =>
		compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
	);

	return (
		<div className='pt-8'>
			<h1 className="mb-2 text-3xl font-bold tracking-tight text-shade-1">Articles</h1>

			<p className='text-base leading-7 tracking-tight text-shade-2'>
				Collection of random thoughts, explorations, and how-to guides.
			</p>

			<FilteredArticles articles={articles} />

		</div>
	)
}