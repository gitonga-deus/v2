'use client'

import React from 'react'

type PreProps = JSX.IntrinsicElements['pre']

const Pre = (props: PreProps) => {
	const { children, ...rest } = props

	const textInput = React.useRef<HTMLPreElement>(null)

	return (
		<>
			<pre className='relative overflow-x-scroll' ref={textInput} {...rest}>
				{children}
			</pre>
		</>
	)
}

export default Pre