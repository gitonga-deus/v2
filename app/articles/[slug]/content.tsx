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
			<article className='prose text-base text-shade-2 tracking-tight leading-8 max-w-none w-full'>
				<MDXComponent
					components={{
						...MDXComponents,
					}}
				/>
			</article>
		</div>
	)
}

export default Content