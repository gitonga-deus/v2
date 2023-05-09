'use client'

import { useState, useEffect } from 'react'
import { IconChevronUp } from '@tabler/icons-react'

export default function BackToTop() {
	const [showButton, setShowButton] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => setShowButton(window.pageYOffset > 200)
		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	return (
		<button
			className='flex justify-center items-center p-4 bottom-6 right-8 text-lg cursor-pointer fixed border-none backdrop-blur-sm rounded-full bg-color-1 text-shade-1 hover:bg-color-2 duration-500'
			onClick={() =>
				window.scrollTo({
					top: showButton ? 0 : document.body.scrollHeight,
					behavior: 'smooth',
				})
			}
			style={{ transform: showButton ? 'rotate(0deg)' : 'rotate(180deg)' }}
			aria-label='Back to top'
		>
			<IconChevronUp size={24} />
		</button>
	)
}