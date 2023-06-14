'use client'

import { Toaster } from 'react-hot-toast'

export default function CustomerToaster() {
	return (
		<Toaster
			position='top-right'
			toastOptions={{
				className: '!bg-shade-1 !text-shade-2 !rounded',
			}}
		/>
	)
}
