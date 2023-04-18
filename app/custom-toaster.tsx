'use client'

import { Toaster } from 'react-hot-toast'

const CustomToaster = () => {
	return (
		<Toaster
			position='top-right'
			toastOptions={{
				className: '!bg-shade-1 !text-gitonga-fg !border !border-shade-5',
			}}
		/>
	)
}

export default CustomToaster