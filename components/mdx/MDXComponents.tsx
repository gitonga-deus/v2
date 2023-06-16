import Image from 'next/image'

import CustomPre from './CustomPre'
import ExternalLink from './ExternalLink'

function RoundedImage(props: any){
	return <Image alt={props.alt} className='rounded-lg object-center' width={672} height={480} {...props} loading='lazy'/>
}

const MDXComponents = {
	pre: CustomPre,
	a: ExternalLink,

	Image: RoundedImage,
}

export default MDXComponents;