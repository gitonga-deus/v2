'use client'

import React from 'react'
import { parseISO, format } from 'date-fns'

import Link from '@/components/mdx/link'
import { ChevronLeft } from '@/components/icons'


type HeaderProps = {
	date: string
	title: string
	readingTime: string
}

const Header = (props: HeaderProps) => {
	const { date, title, readingTime } = props

	return (
		<div className="pt-6">
			<div className='my-8 -mx-2 flex items-center font-medium text-sm'>
				<ChevronLeft />
				<Link href='/articles' className='text-shade-2'>
					Back to Articles
				</Link>
			</div>

			<h1 className='text-shade-1 text-xl md:text-3xl font-semibold'>
				{title}
			</h1>

			<div className='flex py-2 items-center text-shade-2 text-sm gap-1 tracking-tight'>
				<time dateTime={date}>
					{format(parseISO(date), 'MMM dd, yyyy')}
				</time>
				/
				<span>{readingTime}</span>
			</div>
		</div>
	)
}

export default Header