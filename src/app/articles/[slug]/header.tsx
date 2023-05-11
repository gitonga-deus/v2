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
		<>
			<div className="pt-24">
				<h1 className='text-xl font-bold text-shade-1 md:text-4xl'>
					<Balancer ratio={0.3}>
						{title}
					</Balancer>
				</h1>

				<div className='flex items-center py-2 text-sm text-shade-1'>
					<div className='flex gap-1'>
						<time dateTime={date}>
							{format(parseISO(date), 'MMM dd, yyyy')}
						</time>
						&#8226;
						<span>{readingTime}</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header