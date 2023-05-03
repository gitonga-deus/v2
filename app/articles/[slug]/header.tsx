'use client'

import React from 'react'
import Balancer from 'react-wrap-balancer'

import { parseISO, format } from 'date-fns'

type HeaderProps = {
	date: string
	title: string
	readingTime: string
}

const Header = (props: HeaderProps) => {
	const { date, title, readingTime } = props

	return (
		<div className="pt-10 pb-2">
			<h1 className='text-shade-1 text-xl md:text-4xl font-bold'>
				<Balancer ratio={0.3}>
					{title}
				</Balancer>
			</h1>

			<div className='flex py-2 items-center text-shade-3 text-sm'>
				<div className='flex gap-1'>
					<time dateTime={date}>
						{format(parseISO(date), 'MMM dd, yyyy')}
					</time>
					&#8226;
					<span>{readingTime}</span>
				</div>
			</div>
		</div>
	);
}

export default Header