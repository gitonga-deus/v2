import {
	defineDocumentType,
	makeSource,
} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import readingTime from 'reading-time'

import { s } from 'hastscript'

import { rehypePrettyCodeOptions } from './lib/rehypePrettyCode'
import { getLastUpdatedDate } from './lib/lastUpdated'

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
		lastUpdatedDate: {
			type: 'date',
			description: 'The date the post was last updated',
			resolve: getLastUpdatedDate,
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
						className: ['anchor'],
					},
				},
			],
		],
	},
})