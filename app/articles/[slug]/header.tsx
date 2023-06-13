'use client'

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
			<div className="pt-4">
				<h1 className='text-xl font-bold text-theme md:text-4xl tracking-tight'>
					<Balancer ratio={0.3}>
						{title}
					</Balancer>
				</h1>


				<div className='flex items-center gap-2 py-3 px-[2px] text-sm tracking-tight text-gray-500'>
					<time dateTime={date}>
						{format(parseISO(date), 'MMM dd, yyyy')}
					</time>
					/
					<span>{readingTime}</span>
				</div>
			</div>
		</>
	);
}

export default Header