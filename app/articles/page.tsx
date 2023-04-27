import Link from 'next/link';
import type { Metadata } from 'next';

import { allArticles, Article } from 'contentlayer/generated';

import { compareDesc, format, parseISO } from 'date-fns';

export const metadata: Metadata = {
	title: 'Articles',
	description: 'Thoughts, explorations, and how-to guides from a wandering mind.',
};

function ArticleCard(article: Article) {
	const { slug, title, summary, publishedAt, readingTime } = article;

	return (
		<Link
			key={slug}
			className='block select-none p-2 my-1 -mx-2 rounded-md duration-500 transition-all hover:bg-article-hover hover:scale-100'
			href={`articles/${slug}`}
		>
			<div className='flex pt-1 items-center text-shade-2 text-sm tracking-tight'>
				<time dateTime={publishedAt}>
					{format(parseISO(publishedAt), 'MMM dd, yyyy')}
				</time>
				<span className="mx-1">
					&#8226;
				</span>
				<span>{readingTime.text}</span>
			</div>

			<h2
				className='py-1 text-base text-shade-1 font-semibold leading-6 tracking-tight'
			>
				{title}
			</h2>
			<p className='text-base tracking-tight text-shade-2'>{summary}</p>
		</Link>
	)
}

export default function Page() {
	const posts = allArticles.sort((a, b) =>
		compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
	);

	return (
		<section className='py-8'>
			<h1 className="font-bold text-shade-1 tracking-tight text-2xl mb-1">Articles</h1>

			<p className='text-base leading-7 tracking-tight text-shade-3'>
				Collection of random thoughts, explorations, and how-to guides.
			</p>

			{posts.map((post, i) => (
				<ArticleCard key={i} {...post} />
			))}
		</section>
	)
}