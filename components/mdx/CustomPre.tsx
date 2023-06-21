'use client'

import React from 'react'

type PreProps = JSX.IntrinsicElements['pre']

const CustomPre = (props: PreProps) => {
	const { children, ...rest } = props;

	return (
		<>
			<pre
				{...rest}
				className='relative overflow-x-scroll'
			>
				{children}
			</pre>
		</>
	)
}

export default CustomPre;