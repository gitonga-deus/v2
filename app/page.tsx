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
			<div className='pt-8'>
				<div className='pb-2 space-y-2 text-white md:max-w-full'>
					<h1 className='text-2xl font-bold tracking-tight md:text-4xl text-shade-1'>
						{user.name}
					</h1>

					{user.headline.map((item, i) => (
						<p className='text-base leading-7 text-left text-shade-2' key={i}>
							{item}
						</p>
					))}
				</div>
			</div>
			<div className='w-40 my-8 border-b border-color-2' />

			<h1 className='text-xl font-semibold leading-8 tracking-tight text-shade-1'>Featured Articles</h1>

			<div>
				{allArticles.slice(0, 6).sort((a, b) => (
					compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))))
					.map((article) => {
						const { slug, title, summary, publishedAt, readingTime } = article;

						return (
							<Link
								key={slug}
								className='block p-2 my-2 -mx-2 transition-all duration-500 rounded-md select-none hover:bg-color-1 hover:highlighted'
								href={`articles/${slug}`}
							>
								<div className='flex items-center gap-2 pt-1 text-sm tracking-tight text-shade-2'>
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
						className='p-2 text-base font-medium tracking-tight transition-all duration-500 rounded text-shade-1 border border-color-1 hover:bg-color-2'
					>
						Read More
					</Link>
				</div>
			</div>
		</>
	)
}
