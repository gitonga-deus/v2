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
		<div className="pt-6">
			<h1 className='text-slate-900 text-xl tracking-tight font-bold'>
				{title}
			</h1>

			<div className='flex py-2 items-center text-shade-3 text-sm gap-2 tracking-tight'>
				<time dateTime={date}>
					{format(parseISO(date), 'MMM dd, yyyy')}
				</time>
				&#8226;
				<span>{readingTime}</span>
			</div>
		</div>
	)
}

export default Header