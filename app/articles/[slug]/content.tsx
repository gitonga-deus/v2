import { Article } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import MDXComponents from '@/components/mdx/mdxcomponents'

type ContentProps = {
	article: Article
	slug: string
}

const Content = (props: ContentProps) => {
	const { article, slug } = props

	const MDXComponent = useMDXComponent(article.body.code)

	return (
		<div className='mt-4 flex flex-col justify-between lg:flex-row'>
			<article className='w-full'>
				<div className='prose prose-zinc text-base text-shade-1 tracking-tight leading-7 max-w-none'>
					<MDXComponent
						components={{
							...MDXComponents,
						}}
					/>
				</div>
			</article>
		</div>
	)
}

export default Content