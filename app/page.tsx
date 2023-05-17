import Link from 'next/link'

import { ArrowRight } from '@/components/icons';
import ArticleCard from '@/components/article/ArticleCard';

import { allArticles } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

export default function Home() {
	const user = {
		name: 'Deus Gitonga — Developer',
		headline: [
			'Hello and welcome to my website!',
			'Here, I share my experience as a frontend developer 👨🏼‍💻 and everything I\'m learning about on Next.js, TypeScript and things I find interesting. Have a good read!'
		],
	}
	return (
		<>
			<div className='pt-4'>
				<h1 className='text-xl mb-4 font-bold md:text-4xl text-shade-1'>
					{user.name}
				</h1>

				{user.headline.map((item, i) => (
					<p className='text-base tracking-normal my-2 leading-7 text-left text-shade-2' key={i}>
						{item}
					</p>
				))}
			</div>

			<div className='w-48 my-10 border-b border-color-1' />

			<h1 className='text-2xl  font-bold leading-8 text-shade-1 font-sans'>Featured Articles</h1>

			<div>
				{allArticles.slice(0, 6).sort((a, b) => (
					compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))))
					.map((article) => (
						<ArticleCard key={article._id} {...article} />
					))
				}

				<button className='my-4'>
					<Link
						href='/articles'
						className='animated lowercase flex items-center gap-2 text-base font-medium py-1 text-shade-1'
					>
						All Articles
						<ArrowRight />
					</Link>
				</button>
			</div >
		</>
	)
}
