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
			className="block select-none p-2 my-2 -mx-2 rounded-md duration-500 transition-colors hover:bg-shade-1"
			href={`/articles/${slug}`}
		>
			<div className="flex py-1 items-center text-shade-3 gap-2 text-sm tracking-tight">
				<time dateTime={publishedAt}>
					{format(parseISO(publishedAt), 'MMM dd, yyyy')}
				</time>
				&#8226;
				<span>{readingTime.text}</span>
			</div>

			<h2 className="py-1 text-base font-semibold leading-6 tracking-tight">{title}</h2>
			<p className="text-[15px] tracking-tight text-shade-3">{summary}...</p>
		</Link>
	)
}

export default function Page() {
	const posts = allArticles.sort((a, b) =>
		compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
	);

	return (
		<section className='py-8'>
			<h1 className="font-bold text-zinc-800 tracking-tight text-2xl mb-1">Articles</h1>

			<p className='text-[15px] leading-7 tracking-tight text-shade-3'>
				Collection of random thoughts, explorations, and how-to guides.
			</p>

			{posts.map((post, i) => (
				<ArticleCard key={i} {...post} />
			))}
		</section>
	)
}