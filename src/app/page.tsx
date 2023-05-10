import Link from 'next/link'

import { allArticles } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

export default function Home() {
	const user = {
		name: 'Deus Gitonga — Developer and Writer',
		headline: [
			'Hello and welcome to my website!',
			'Here, I share my experience as a frontend developer and everything I\'m learning about on Next.js, TypeScript and things I find interesting. Have a good read'
		],
	}
	return (
		<>
			<div className='pt-12'>
				<div className='space-y-2 pb-2 md:max-w-full text-white'>
					<h1 className='text-2xl md:text-4xl font-bold text-shade-1 tracking-tight'>
						{user.name}
					</h1>

					{user.headline.map((item, i) => (
						<p className='text-base leading-7 text-left text-shade-2' key={i}>
							{item}
						</p>
					))}
				</div>
			</div>
			<div className='w-40 border-b border-color-2 my-8' />

			<h1 className='text-xl text-shade-1 tracking-tight font-semibold leading-8'>Featured Articles</h1>

			<div>
				{allArticles.slice(0, 6).sort((a, b) => (
					compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))))
					.map((article) => {
						const { slug, title, summary, publishedAt, readingTime } = article;

						return (
							<Link
								key={slug}
								className='block select-none p-2 my-1 -mx-2 rounded-md hover:bg-color-1 duration-500 hover:highlighted transition-all'
								href={`articles/${slug}`}
							>
								<div className='flex pt-1 items-center gap-2 text-shade-2 text-sm tracking-tight'>
									<time dateTime={publishedAt}>
										{format(parseISO(publishedAt), 'MMM dd, yyyy')}
									</time>
									&#8226;
									<span>{readingTime.text}</span>
								</div>

								<h1
									className='py-1 text-[17px] text-shade-1 font-semibold'
								>
									{title}
								</h1>
								<p className='text-base tracking-tight text-shade-2'>{summary}</p>
							</Link>
						)
					})
				}

				<div className='mt-6'>
					<Link
						href='/articles'
						className='text-shade-1 px-4 py-2 rounded text-base font-medium tracking-tight duration-500 transition-all bg-color-1 hover:bg-color-2'
					>
						Read More
					</Link>
				</div>
			</div>
		</>
	)
}
