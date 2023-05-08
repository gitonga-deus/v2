import { Article } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { parseISO, format } from 'date-fns'
import { HiOutlinePencil } from 'react-icons/hi'

import MDXComponents from '@/components/mdx/mdxcomponents'

type ContentProps = {
	slug: string
	article: Article
}

const Content = (props: ContentProps) => {
	const { article, slug } = props;

	const MDXComponent = useMDXComponent(article.body.code);

	return (
		<div className='mt-4 flex flex-col justify-between lg:flex-row'>
			<article className='prose text-base text-left text-shade-2 tracking-tight leading-8 max-w-none w-full'>

				<div className='py-2 px-3 bg-color-1 gap-1 flex w-52 items-center text-sm rounded-md text-shade-1'>
					<HiOutlinePencil size={20} />
					Updated {format(parseISO(article.lastUpdatedAt), 'MMM dd, yyyy')}
				</div>

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