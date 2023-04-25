import NextLink from 'next/link'
import React from 'react'

const Link = (props: any) => {
	const { href, children, ...rest } = props

	if (href.startsWith('/')) {
		return (
			<NextLink href={href} className='animated' {...rest}>
				{children}
			</NextLink>
		)
	}

	if (href.startsWith('#')) {
		return (
			<a href={href} {...rest}>
				{children}
			</a>
		)
	}

	return (
		<a
			target='_blank'
			rel='noopener noreferrer'
			href={href}
			className='animated'
			{...rest}
		>
			{children}
		</a>
	)
}

export default Link;