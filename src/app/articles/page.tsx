import Link from 'next/link';
import type { Metadata } from 'next';

import { allArticles, Article } from 'contentlayer/generated';

import { compareDesc, format, parseISO } from 'date-fns'

export const metadata: Metadata = {
	title: 'Articles',
	description: 'Thoughts, explorations, and how-to guides from a wandering mind.',
};

function ArticleCard(article: Article) {
	const { slug, title, summary, publishedAt, readingTime } = article;

	return (
		<Link
			key={slug}
			className='block p-2 my-1 -mx-2 transition-all duration-500 rounded-md select-none hover:bg-color-1'
			href={`articles/${slug}`}
		>
			<div className='flex items-center gap-2 pt-1 text-sm tracking-tight text-shade-2'>
				<time dateTime={publishedAt}>
					{format(parseISO(publishedAt), 'MMM dd, yyyy')}
				</time>
				&#8226;
				<span>{readingTime.text}</span>
			</div>

			<h1
				className='py-1 text-[17px] text-shade-1 font-semibold'
			>
				{title}
			</h1>
			<p className='text-base tracking-tight text-shade-2'>{summary}</p>
		</Link>
	)
}

export default function Page() {
	const articles = allArticles.sort((a, b) =>
		compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
	);

	return (
		<div className='pt-12'>
			<h1 className="mb-2 text-3xl font-bold tracking-tight text-shade-1">Articles</h1>

			<p className='text-base leading-7 tracking-tight text-shade-2'>
				Collection of random thoughts, explorations, and how-to guides.
			</p>

			{articles.map((article, i) => (
				<ArticleCard key={i} {...article} />
			))}
		</div>
	)
}