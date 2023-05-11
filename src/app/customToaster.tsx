'use client'

import { Toaster } from 'react-hot-toast'

const CustomToaster = () => {
	return (
		<Toaster
			position='bottom-right'
			toastOptions={{
				className: '!bg-shade-1 !text-theme !border !border-shade-2',
			}}
		/>
	)
}

export default CustomToaster