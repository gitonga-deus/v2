'use client'

import { FC, MouseEventHandler } from 'react'
import { Socials } from './social'
import Image from 'next/image'
import useWindowSize, { Size } from '@/lib/hooks/useWindowSize'


const HomePage: FC = () => {
	const size: Size = useWindowSize()

	return (
		<div className='flex flex-col items-center'>
			<div className='flex flex-col items-center'>
				<div className='text-shade-1 w-full text-base leading-7 tracking-tight'>
					<h1 className='py-4 text-2xl font-medium'>Deus Gitonga — Developer {' '}<code>&</code>{' '} Writer</h1>
					<p>Welcome to my little corner of the internet! I'm all about making websites that look good and work great.</p>
					<p>
						Join me as we explore the latest tech trends and programming tips, with a side of humor and a dash of coffee.
					</p>
					<Socials />

					<div className='border-b w-32 my-8 border-links-bg' />
				</div>
			</div>
			{/* {typeof size.width !== 'undefined' ? (
				size.width < 800 ? (
					<Gallery />
				) : (
					<Photos />
				)
			) : null} */}
		</div>
	)
}

export default HomePage;