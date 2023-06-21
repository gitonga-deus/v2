import type { Metadata } from 'next';

import { allArticles } from 'contentlayer/generated';

import { compareDesc } from 'date-fns'
import FilteredArticles from '@/components/FilteredArticles';

export const metadata: Metadata = {
	title: 'Articles',
	description: 'Thoughts, explorations, and how-to guides from a wandering mind.',
};

export default function Page() {
	const articles = allArticles.sort((a, b) =>
		compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
	);

	return (
		<>
			<h1 className="mb-2 text-3xl font-bold tracking-tight text-black dark:text-white">All Articles</h1>

			<p className='text-base leading-7 text-accent-4 dark:text-accent-6'>
				Collection of random thoughts, explorations, leetcode problems and how-to guides.
			</p>
			
			<FilteredArticles articles={articles} />
		</>
	)
}