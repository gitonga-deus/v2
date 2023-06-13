import { Article } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import MDXComponents from '@/components/mdx'

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
				<article className='w-full text-base leading-8 prose text-left text-black max-w-none'>

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