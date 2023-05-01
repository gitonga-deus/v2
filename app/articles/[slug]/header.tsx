'use client'

import React from 'react'
import Balancer from 'react-wrap-balancer'

import { parseISO, format } from 'date-fns'

type HeaderProps = {
	date: string
	title: string
	author: string
	readingTime: string
}

const Header = (props: HeaderProps) => {
	const { date, title, readingTime, author } = props

	return (
		<div className="pt-10 pb-2">
			<h1 className='text-shade-1 text-xl md:text-4xl font-bold'>
				<Balancer ratio={0.3}>
					{title}
				</Balancer>
			</h1>

			<div className='flex py-2 justify-between items-center text-shade-3 text-sm gap-1 tracking-tight'>
				<div className='flex gap-1'>
					<span>{author}</span>
					/
					<time dateTime={date}>
						{format(parseISO(date), 'MMM dd, yyyy')}
					</time>
				</div>

				<div className='flex gap-1 text-shade-3'>
					<span>{readingTime}</span>
				</div>
			</div>
		</div>
	);
}

export default Header