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
			<div className='text-shade-3 my-8 -mx-2 flex items-center font-medium text-sm'>
				<ChevronLeft />
				<Link href='/articles'>
					back to articles
				</Link>
			</div>

			<h1 className='text-slate-900 text-xl md:text-2xl tracking-tight font-bold'>
				{title}
			</h1>

			<div className='flex py-2 items-center text-shade-2 text-sm gap-1 tracking-tight'>
				<time dateTime={date}>
					{format(parseISO(date), 'MMM dd, yyyy')}
				</time>
				<div className='w-[1px] h-[15px] mx-1 bg-shade-2' />
				<span>{readingTime}</span>
			</div>
		</div>
	)
}

export default Header