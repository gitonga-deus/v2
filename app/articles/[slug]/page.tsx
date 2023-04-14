import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';

import { allArticles } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

export const generateStaticParams = async () => {
	return (
		allArticles.map((article: any) => ({ slug: article._raw.flattenedPath }))
	)
}

export const generateMetadata = ({ params }: any) => {
	const article = allArticles.find(
		(article: any) => article._raw.flattenedPath === params.slug
	)

	return {
		title: article?.title,
		description: article?.summary
	};
};


const ArticleLayout = ({ params }: { params: { slug: string } }) => {
	const article = allArticles.find(
		(article: any) => article._raw.flattenedPath === params.slug
	);

	let MDXContent;

	if (!article) {
		return notFound();
	} else {
		MDXContent = getMDXComponent(article!.body.code);
	}

	return (
		<div className='py-8'>

			<h1 className='text-slate-900 text-xl tracking-tight font-bold'>
				{article.title}
			</h1>

			<div className='flex py-2 items-center text-shade-3 text-sm gap-2 tracking-tight'>
				<time dateTime={article.publishedAt}>
					{format(parseISO(article.publishedAt), 'MMM dd, yyyy')}
				</time>
				&#8226;
				<span>{article.readingTime.text}</span>
			</div>

			<article className='prose max-w-none text-[15px] tracking-tight'>
				<MDXContent />
			</article>
		</div>
	);
};

export default ArticleLayout;