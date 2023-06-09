import Link from 'next/link'

import { compareDesc } from 'date-fns';
import { allArticles } from 'contentlayer/generated';

import ArticleCard from '@/components/ArticleCard';

export default function Home() {

	return (
		<>
			<div className="flex flex-col justify-center items-start mx-auto pb-16">

				<div className="flex flex-col-reverse sm:flex-row items-start">
					<div className="flex flex-col pr-8">
						<p className="text-accent-5 font-medium px-[2px] text-base mb-4">
							hey 👋, I'm 
						</p>
						<h1 className="font-bold text-3xl md:text-5xl mb-4 text-accent-8">
							Deus N. Gitonga
						</h1>
					</div>
				</div>

				<div className='w-48 my-8 border-t border-accent-2' />

				<h3 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-accent-8">
					Featured Articles
				</h3>

				<div>
					{allArticles
						.sort((a, b) => (
							compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))))
						.slice(0, 4)
						.map((article) => (
							<ArticleCard key={article._id} {...article} />
						))
					}
				</div>

				<Link
					href={'/articles'}
					className='pt-4 text-base animated'
				>
					<div
						className="flex items-center gap-1 group text-accent-8 font-semibold transition ease-in-out duration-200"
					>
						read more
					</div>
				</Link>
			</div>
		</>
	);
}

