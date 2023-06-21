import Link from 'next/link'

import { ArrowRight } from '@/components/icon'
import ArticleCard from '@/components/ArticleCard';

import { compareDesc } from 'date-fns';
import { allArticles } from 'contentlayer/generated';

export default function Home() {

	return (
		<>
			<div className="flex flex-col justify-center items-start border-gray-200 mx-auto pb-16">

				<div className="flex flex-col-reverse sm:flex-row items-start">
					<div className="flex flex-col pr-8">
						<h1 className="font-bold text-3xl md:text-5xl mb-4 text-black dark:text-white">
							Deus N. Gitonga
						</h1>

						<p className="text-[#666] dark:text-accent-6 text-base font-medium mb-4">
							Developer and Writer.
						</p>
					</div>
				</div>

				<div className='w-48 my-4 border-t border-accent-2 dark:border-accent-2' />

				<h3 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-black dark:text-white">
					Featured Articles
				</h3>

				<div>
					{allArticles
						.sort((a, b) => (
							compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))))
						.slice(0, 3)
						.map((article) => (
							<ArticleCard key={article._id} {...article} />
						))
					}
				</div>

				<Link
					href={'/articles'}
					className='py-4 text-base'
				>
					<div
						className="flex items-center gap-1 group text-black dark:text-accent-5 font-semibold transition ease-in-out duration-200"
					>	read more
						<span
							aria-hidden="true"
							className="translate-x-0 group-hover:translate-x-2 transition-transform ease-in-out duration-200"
						>
							<ArrowRight />
						</span>
					</div>
				</Link>
			</div>
		</>
	);
}

