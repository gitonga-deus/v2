import {
	defineDocumentType,
	makeSource,
} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import readingTime from 'reading-time'

import { rehypePrettyCodeOptions } from './lib/rehypePrettyCode'

const Article = defineDocumentType(() => ({
	name: "Article",
	filePathPattern: "**/*.mdx",
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			description: "The title of the article",
			required: true,
		},
		summary: {
			type: "string",
			description: "The description of the article",
			required: true,
		},
		publishedAt: {
			type: "date",
			description: "The date of the article",
			required: true,
		},
	},
	computedFields: {
		slug: {
			type: "string",
			resolve: (doc) => `${doc._raw.flattenedPath}`,
		},
		readingTime: {
			type: 'json',
			resolve: (doc) => readingTime(doc.body.raw),
		},
	},
}));

export default makeSource({
	contentDirPath: 'articles',
	documentTypes: [Article],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[rehypePrettyCode, rehypePrettyCodeOptions],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['absolute left-0 top-0 bottom-0 w-full group'],
					},
				},
			],
		],
	},
})