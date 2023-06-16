'use client'

import Balancer from 'react-wrap-balancer'

import { parseISO, format } from 'date-fns'
import { Clock, Calendar } from '@/components/icon'

type HeaderProps = {
	date: string
	title: string
	readingTime: string
}

const Header = (props: HeaderProps) => {
	const { date, title, readingTime } = props

	return (
		<>
			<div className="py-2 font-sans">
				<h1 className='text-xl font-bold text-theme md:text-4xl tracking-tight'>
					<Balancer ratio={0.7}>
						{title}
					</Balancer>
				</h1>


				<div className='flex items-center gap-2 py-3 text-sm text-gray-500'>
					<div className='flex gap-1 items-center'>
						<Calendar />
						<time dateTime={date}>
							{format(parseISO(date), 'MMM dd, yyyy')}
						</time>
					</div>
					<div className='flex gap-1 items-center'>
						<Clock />
						<span>{readingTime}</span>
					</div>
				</div>			
			</div>
		</>
	);
}

export default Header