import ArticleCard from '@/components/ArticleCard';

import { allArticles } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function Home() {
	return (

		<div className="flex flex-col justify-center items-start border-gray-200 mx-auto pb-16">
			<div className="flex flex-col-reverse sm:flex-row items-start">
				<div className="flex flex-col pr-8">
					<h1 className="font-bold text-3xl md:text-5xl tracking-tight justify-start mb-4 text-black">
						Deus N. Gitonga
					</h1>

					<p className="text-[#666] text-base font-medium px-[2px] mb-4">
						Developer and Writer.
					</p>
				</div>
			</div>

			<div className='w-48 my-4 border-t border-gray-200' />

			<h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black">
				Featured Articles
			</h3>

			<div>
				{allArticles
					.slice(0, 6).sort((a, b) => (
						compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))))
					.map((article) => (
						<ArticleCard key={article._id} {...article} />
					))
				}
			</div >

		</div>
	);
}