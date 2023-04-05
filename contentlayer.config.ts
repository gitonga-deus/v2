import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import readingTime from 'reading-time'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const computedFields: ComputedFields = {
	readingTime: {
		type: 'json',
		resolve: (doc) => readingTime(doc.body.raw),
	},
	slug: {
		type: 'string',
		resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
	},
}

export const Blog = defineDocumentType(() => ({
	name: 'Blog',
	filePathPattern: '**/*.mdx',
	bodyType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		publishedAt: {
			type: 'string',
			required: true,
		},
		summary: {
			type: 'string',
			required: true,
		},
	},
	computedFields
}))

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Blog],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: 'one-dark-pro',
					onVisitLine({ node }: any) {
						if (node.children.length === 0) {
							node.children = [
								{
									type: 'text',
									value: ''
								}
							]
						}
					},
					onVisitedHighlightedLine({ node }: any) {
						node.properties.className.push('line--highlighted');
					},
					onVisitHighlightedWord({ node }: any) {
						node.properties.className = ['word--highlighted'];
					}
				}
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['anchor'],
					}
				}
			]
		],
	},
	disableImportAliasWarning: true,
})