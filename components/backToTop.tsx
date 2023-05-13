'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from './icons'

export default function BackToTop() {
	const [showButton, setShowButton] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => setShowButton(window.pageYOffset > 200)
		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	return (
		<button
			className='fixed flex items-center justify-center p-4 text-lg duration-500 border-none rounded-full cursor-pointer bottom-6 right-8 backdrop-blur-sm bg-color-1 text-shade-1 hover:bg-color-2'
			onClick={() =>
				window.scrollTo({
					top: showButton ? 0 : document.body.scrollHeight,
					behavior: 'smooth',
				})
			}
			style={{ transform: showButton ? 'rotate(0deg)' : 'rotate(180deg)' }}
			aria-label='Back to top'
		>
			<ChevronUp />
		</button>
	)
}