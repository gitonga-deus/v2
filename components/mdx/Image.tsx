'use client'

import clsx from 'clsx'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import React from 'react'

export type ImageProps = {
	imageClassName?: string
} & NextImageProps

const Image = (props: ImageProps) => {
	const { alt, src, className, imageClassName, ...rest } = props
	const [isLoading, setLoading] = React.useState(true)

	return (
		<div
			className={clsx(
				'overflow-hidden rounded',
				isLoading && 'animate-pulse',
				className
			)}
		>
			<NextImage
				className={clsx(
					'my-0 transition-[scale,filter] duration-700',
					isLoading && 'scale-[1.02] blur-xl grayscale',
					imageClassName
				)}
				src={src}
				alt={alt}
				loading='lazy'
				quality={100}
				onLoadingComplete={() => setLoading(false)}
				{...rest}
			/>
		</div>
	)
}
export default Image;