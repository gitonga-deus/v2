import Link from 'next/link';

import { format, parseISO } from 'date-fns'
import { Article } from 'contentlayer/generated';

type ArticleCore = Pick<Article, '_id' | 'slug' | 'title' | 'summary' | 'publishedAt' | 'readingTime'>

export default function ArticleCard(article: ArticleCore) {
	const { slug, title, summary, publishedAt, readingTime } = article;

	return (
		<Link
			key={slug}
			className='block p-2 -mx-2 my-1 transition-all duration-500 rounded-md select-none hover:bg-accent-2'
			href={`articles/${slug}`}
		>
			<div className='flex items-center gap-2 pt-1 tracking-tight font-sans text-sm text-accent-6'>
				<time dateTime={publishedAt}>
					{format(parseISO(publishedAt), 'MMM dd, yyyy')}
				</time>
				&#8226;
				<span>{readingTime.text}</span>
			</div>

			<h1 className='py-1 text-base text-v2-fg font-semibold font-sans'>
				{title}
			</h1>
			<p className='text-base text-accent-5'>{summary}</p>
		</Link>
	)
};