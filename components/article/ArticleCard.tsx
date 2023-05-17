import Link from 'next/link';

import { Article } from 'contentlayer/generated';

import { format, parseISO } from 'date-fns'

type ArticleCore = Pick<Article, '_id' | 'slug' | 'title' | 'summary' | 'publishedAt' | 'readingTime'>

export default function ArticleCard(article: ArticleCore) {
	const { slug, title, summary, publishedAt, readingTime } = article;

	return (
		<Link
			key={slug}
			className='block p-2 -mx-2 my-1 transition-all duration-500 rounded-md select-none hover:bg-color-1 hover:highlighted'
			href={`articles/${slug}`}
		>
			<div className='flex items-center font-serif gap-2 pt-1 font-medium tracking-tight text-[15px] text-shade-2'>
				<time dateTime={publishedAt}>
					{format(parseISO(publishedAt), 'MMM dd, yyyy')}
				</time>
				&#8226;
				<span>{readingTime.text}</span>
			</div>

			<h1
				className='py-1 text-lg tracking-tight text-shade-1 font-semibold'
			>
				{title}
			</h1>
			<p className='text-base tracking-tight text-shade-2'>{summary}</p>
		</Link>
	)
}