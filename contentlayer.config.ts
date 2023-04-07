import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import readingTime from "reading-time"
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus/";
import remarkExternalLinks from "remark-external-links";

const Article = defineDocumentType(() => ({
	name: "Article",
	filePathPattern: `**/*.mdx`,
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

const rehypeOptions = {
	theme: "material-theme-palenight",

	keepBackground: true,
	onVisitLine(node: any) {
		if (node.children.length === 0) {
			node.children = [{ type: "text", value: " " }];
		}
	},

	onVisitHighlightedLine(node: any) {
		node.properties.className.push("highlighted");
	},

	onVisitHighlightedWord(node: any, id: any) {
		node.properties.className = ["word"]
	}
}

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Article],
	mdx: {
		rehypePlugins: [[rehypePrettyCode, rehypeOptions, rehypePrism]],
		remarkPlugins: [remarkGfm, remarkExternalLinks],
	},
});
