import {
	defineDocumentType,
	makeSource,
} from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import readingTime from 'reading-time'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import { rehypePrettyCodeOptions } from './src/lib/rehypePrettyCode'

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
		lastUpdatedAt: {
			type: "date",
			description: "The date the article was last updated",
			required: true
		}
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
	contentDirPath: 'src/content',
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
						className: ['anchor'],
					},
				},
			],
		],
	},
})