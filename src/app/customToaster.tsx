'use client'

import { Toaster } from 'react-hot-toast'

const CustomToaster = () => {
	return (
		<Toaster
			position='top-right'
			toastOptions={{
				className: '!bg-color-2 !text-shade-1 !border !border-color-1',
			}}
		/>
	)
}

export default CustomToaster
