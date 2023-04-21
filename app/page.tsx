import Link from 'next/link';

import Intro from '@/components/intro'

import { allArticles } from 'contentlayer/generated';

import { compareDesc, format, parseISO } from 'date-fns';

const Home = () => {
	return (
		<section>
			<Intro />

			<h1 className='text-lg text-shade-2 tracking-tight font-semibold leading-8'>articles</h1>

			{allArticles.slice(0, 4).sort((a, b) => (
				compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))))
				.map((article) => {
					const { slug, title, summary, publishedAt, readingTime } = article;

					return <>
						<Link
							key={slug}
							className='block select-none p-2 my-1 -mx-2 rounded-md duration-500 transition-colors hover:bg-shade-1'
							href={`articles/${slug}`}
						>
							<div className='flex pt-1 items-center text-shade-3 text-sm tracking-tight'>
								<time dateTime={publishedAt}>
									{format(parseISO(publishedAt), 'MMM dd, yyyy')}
								</time>
								<div className="mx-1">
									&#8226;
								</div>
								<span>{readingTime.text}</span>
							</div>

							<h2 className='py-1 text-base text-gitonga-fg font-semibold leading-6 tracking-tight'>{title}</h2>
							<p className='text-base tracking-tight text-shade-3'>{summary}...</p>
						</Link>
					</>
				})
			}

			<div className='flex'>
				<Link
					href='/articles'
					className='my-2 hover:bg-shade-1 text-gitonga-fg p-2 -mx-2 rounded-md flex items-center gap-4 text-base font-medium tracking-tight'
				>
					more posts...
				</Link>
			</div>
		</section>
	)
}

export default Home;