import Kbd from './kbd'
import CustomLink from './link'
import Pre from './pre'

const MDXComponents = {
	a: CustomLink,
	pre: Pre,

	// Custom components
	Kbd,
}

export default MDXComponents