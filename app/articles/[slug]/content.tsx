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
			<div className='flex flex-col justify-between mt-4 lg:flex-row'>
				<article className='w-full text-base leading-8 tracking-tight prose text-left text-shade-2 max-w-none'>

					<div className='flex items-center gap-1 px-3 py-2 text-sm rounded-md bg-color-1 w-52 text-shade-1'>
						<Pen />
						Updated {format(parseISO(article.lastUpdatedAt), 'MMM dd, yyyy')}
					</div>

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