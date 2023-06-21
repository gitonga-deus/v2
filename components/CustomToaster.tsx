'use client'

import { Toaster } from 'react-hot-toast'

export default function CustomerToaster() {
	return (
		<Toaster
			position='top-right'
			toastOptions={{
				className: '!bg-accent-1 !text-accent-6 !rounded',
			}}
		/>
	)
}
