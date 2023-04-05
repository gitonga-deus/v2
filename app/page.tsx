import Link from 'next/link';

import Intro from '@/components/intro'

import { allBlogs } from 'contentlayer/generated';

import { compareDesc, format, parseISO } from 'date-fns';

const Home = () => {
	return (
		<section>
			<Intro />

			<h1 className='text-xl mb-1 tracking-tight font-semibold leading-8'>Blog Posts</h1>

			{allBlogs.slice(0, 4).sort((a, b) => (compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))))
				.map((post) => {
					const { slug, title, summary, publishedAt, readingTime } = post;

					return <>
						<Link
							key={slug}
							className='block select-none p-2 my-2 -mx-2 rounded-md transition-colors hover:bg-gray-100'
							href={`/blog/${slug}`}
						>
							<div className='flex py-1 items-center text-accent-5 gap-2 text-sm tracking-tight'>
								<time dateTime={publishedAt}>
									{format(parseISO(publishedAt), 'MMM dd, yyyy')}
								</time>
								<div className='w-[1px] h-[15px] bg-accent-5' />
								<span className='capitalize'>{readingTime.text}</span>
							</div>

							<h2 className='py-1 text-base font-semibold leading-6 tracking-tight'>{title}</h2>
							<p className='text-[15px] tracking-tight text-accent-5'>{summary}</p>
						</Link>
					</>
				})
			}

			<div className='flex '>
				<Link
					href='/blog'
					className='my-2 hover:bg-gray-100 hover:text-black p-2 -mx-2 rounded-md flex items-center gap-4 text-[15px] font-medium text-accent-5'
				>
					<span>more posts...</span>
				</Link>
			</div>
		</section>
	)
}

export default Home;