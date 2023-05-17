import { Article } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { parseISO, format } from 'date-fns'
import { Pen } from '@/components/icons'

import MDXComponents from '@/components/mdx/mdxcomponents'

type ContentProps = {
	slug: string
	article: Article
}

const Content = (props: ContentProps) => {
	const { article, slug } = props;

	const MDXComponent = useMDXComponent(article.body.code);

	return (
		<>
			<div className='flex flex-col justify-between my-4 lg:flex-row'>
				<article className='w-full text-base leading-8 prose text-left text-shade-2 max-w-none'>

					<button
						className='flex items-center gap-2 px-3 py-2 text-sm tracking-wide font-serif rounded bg-color-2 w-50 text-shade-1 cursor-not-allowed'
					>
						<Pen />
						Updated {format(parseISO(article.lastUpdatedAt), 'MMM dd, yyyy')}
					</button>

					<MDXComponent
						components={{
							...MDXComponents,
						}}
					/>
				</article>
			</div>
		</>
	)
}

export default Content