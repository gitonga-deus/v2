'use client'

import { useState } from 'react'

import clsx from 'clsx'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

export type ImageProps = {
	imageClassName?: string
} & NextImageProps

const Image = (props: ImageProps) => {
	const { alt, src, className, imageClassName, ...rest } = props
	const [isLoading, setLoading] = useState(true)

	return (
		<div
			className={clsx(
				'rounded',
				isLoading && 'animate-pulse',
				className
			)}
		>
			<NextImage
				className={clsx(
					'my-4 transition-[scale,filter] rounded duration-700',
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