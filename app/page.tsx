import Link from 'next/link';

import Intro from '@/components/intro'
import CustomLink from '@/components/link';

import { allArticles } from 'contentlayer/generated';

import { compareDesc, format, parseISO } from 'date-fns';

const Home = () => {
	return (
		<section>
			<Intro />

			<h1 className='text-base tracking-tight font-semibold leading-8'>Recent Articles</h1>

			{allArticles.slice(0, 4).sort((a, b) => (compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))))
				.map((article) => {
					const { slug, title, summary, publishedAt, readingTime } = article;

					return <>
						<Link
							key={slug}
							className='block select-none p-2 my-1 -mx-2 rounded-md duration-500 transition-colors hover:bg-gray-200'
							href={`article/${slug}`}
						>
							<div className='flex py-1 items-center text-accent-5 gap-2 text-sm tracking-tight'>
								<time dateTime={publishedAt}>
									{format(parseISO(publishedAt), 'MMM dd, yyyy')}
								</time>
								&#8226;
								<span>{readingTime.text}</span>
							</div>

							<h2 className='py-1 text-base font-semibold leading-6 tracking-tight'>{title}</h2>
							<p className='text-[15px] tracking-tight text-accent-5'>{summary}</p>
						</Link>
					</>
				})
			}

			<div className='flex'>
				<CustomLink
					href='/blog'
					className='my-2 bg-gray-200 text-black p-2 -mx-2 rounded-md flex items-center gap-4 text-[15px] font-medium'
				>
					more posts...
				</CustomLink>
			</div>
		</section>
	)
}

export default Home;