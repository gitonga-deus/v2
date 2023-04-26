'use client'

import { useState, FC, useEffect } from 'react'
import { BsChevronUp } from 'react-icons/bs'

const BackToTop: FC = () => {
	const [showButton, setShowButton] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => setShowButton(window.pageYOffset > 200)
		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	return (
		<button
			className='flex justify-center items-center p-5 bottom-6 right-6 text-2xl rounded-full bg-[#6d6d6d40] hover:bg-[#6d6d6d80] fixed border-none text-shade-2 duration-500 backdrop-blur-md'
			onClick={() =>
				window.scrollTo({
					top: showButton ? 0 : document.body.scrollHeight,
					behavior: 'smooth',
				})
			}
			style={{ transform: showButton ? 'rotate(0deg)' : 'rotate(180deg)' }}
			aria-label='Back to top'
		>
			<BsChevronUp size={20} />
		</button>
	)
}

export default BackToTop