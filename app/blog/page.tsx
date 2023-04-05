import Link from 'next/link';
import type { Metadata } from 'next';

import { allBlogs } from 'contentlayer/generated';

import { compareDesc, format, parseISO } from 'date-fns';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Thoughts, explorations, and how-to guides from a wandering mind.',
};

export default async function BlogPage() {

	return (
		<section className='py-8'>
			<h1 className="font-bold text-zinc-800 text-2xl mb-2">Blog</h1>

			<p className='text-[15px] py-1 leading-7 tracking-normal text-accent-5'>
				A space for exploring my mind. Here, I share everything I know about JavaScript, React, and Blockchain.
			</p>

			<hr className='my-2 -mx-2 text-accent-5' />

			{allBlogs
				.sort((a, b) => (
					compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
				))
				.map((post) => {
					const { slug, title, summary, publishedAt, readingTime } = post;

					return <>
						<Link
							key={slug}
							className="block select-none p-2 my-2 -mx-2 rounded-md transition-colors hover:bg-gray-100"
							href={`/blog/${slug}`}
						>
							<div className="flex py-1 items-center text-accent-5 gap-2 text-sm tracking-tight">
								<time dateTime={publishedAt}>
									{format(parseISO(publishedAt), 'MMM dd, yyyy')}
								</time>
								<div className='w-[1px] h-[15px] bg-accent-5' />
								<span className='capitalize'>{readingTime.text}</span>
							</div>

							<h2 className="py-1 text-base font-semibold leading-6 tracking-tight">{title}</h2>
							<p className="text-[15px] tracking-tight text-accent-5">{summary}</p>
						</Link>
					</>
				})
			}
		</section>
	);
}