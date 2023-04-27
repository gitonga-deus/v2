import Link from 'next/link';

import Intro from '@/components/intro'

import { allArticles } from 'contentlayer/generated';

import { compareDesc, format, parseISO } from 'date-fns';

const Home = () => {
	return (
		<section>
			<Intro />

			<h1 className='text-lg text-shade-2 tracking-tight font-semibold leading-8'>articles</h1>

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
					</>
				})
			}

			<div className='flex'>
				<Link
					href='/articles'
					className='my-2 text-shade-1 p-2 -mx-2 rounded-md flex items-center gap-4 text-base font-medium tracking-tight hover:bg-article-hover'
				>
					more articles...
				</Link>
			</div>

			{/* <hr className='w-[8rem] mt-8 mb-4' /> */}

		</section>
	)
}

export default Home;