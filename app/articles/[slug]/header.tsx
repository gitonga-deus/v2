'use client'

import React from 'react'
import { parseISO, format } from 'date-fns'

type HeaderProps = {
	date: string
	title: string
	readingTime: string
}

const Header = (props: HeaderProps) => {
	const { date, title, readingTime } = props

	return (
		<div className="pt-12">
			<h1 className='text-shade-1 text-xl md:text-2xl font-semibold'>
				{title}
			</h1>

			<code className='flex py-2 items-center text-shade-3 text-sm gap-1 tracking-tight'>
				<time dateTime={date}>
					{format(parseISO(date), 'MMM dd, yyyy')}
				</time>
				/
				<span>{readingTime}</span>
			</code>
		</div>
	)
}

export default Header