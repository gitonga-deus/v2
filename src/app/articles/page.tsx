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
			className='block select-none p-2 my-1 -mx-2 rounded-md duration-500 transition-all hover:bg-art-hv'
			href={`articles/${slug}`}
		>
			<div className='flex pt-1 items-center gap-1 text-shade-2 text-sm tracking-tight'>
				<time dateTime={publishedAt}>
					{format(parseISO(publishedAt), 'MMM dd, yyyy')}
				</time>
				&#8226;
				<span>{readingTime.text}</span>
			</div>

			<h1
				className='py-1 text-base text-shade-1 font-semibold leading-6 tracking-tight'
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
		<div className='py-8'>
			<h1 className="font-bold text-shade-1 tracking-tight text-3xl mb-2">Articles</h1>

			<p className='text-base leading-7 tracking-tight text-shade-2'>
				Collection of random thoughts, explorations, and how-to guides.
			</p>

			{articles.map((article, i) => (
				<ArticleCard key={i} {...article} />
			))}
		</div>
	)
}