import Link from 'next/link';

import Hero from '@/components/hero'

import { allArticles } from 'contentlayer/generated';

import { compareDesc, format, parseISO } from 'date-fns';

const Home = () => {
	return (
		<section>
			<Hero />

			<h1 className='text-lg text-shade-1 tracking-tight font-semibold leading-8'>Featured Articles</h1>

			{allArticles.slice(0, 6).sort((a, b) => (
				compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))))
				.map((article) => {
					const { slug, title, summary, publishedAt, readingTime } = article;

					return <>
						<Link
							key={slug}
							className='block select-none p-2 my-1 -mx-2 rounded-md hover:bg-article-hover duration-500 hover:scale-100 transition-all'
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
					</>
				})
			}

			<div className='flex'>
				<Link
					href='/articles'
					className='my-2 text-shade-1 p-2 -mx-2 rounded-md flex items-center gap-4 text-base font-medium tracking-tight duration-500 hover:scale-100 transition-all hover:bg-article-hover'
				>
					more articles...
				</Link>
			</div>
		</section>
	)
}

export default Home;