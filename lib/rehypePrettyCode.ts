import { Options } from 'rehype-pretty-code'

export const rehypePrettyCodeOptions: Partial<Options> = {
	theme: {
		light: 'min-light',
		dark: 'min-dark',
	},
	onVisitLine(node: any) {

		if (node.children.length === 0) {
			node.children = [{ type: 'text', value: ' ' }]
		}
	},
	onVisitHighlightedLine(node: any) {
		node.properties.className.push('highlighted')
	},
	onVisitHighlightedWord(node: any) {
		node.properties.className = ['word']
	},
}