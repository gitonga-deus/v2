import Image from './Image'
import CustomPre from './CustomPre'
import ExternalLink from './ExternalLink'

const MDXComponents = {
	pre: CustomPre,
	a: ExternalLink,

	Image: Image,
}

export default MDXComponents;