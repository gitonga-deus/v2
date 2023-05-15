'use client'

import { Toaster } from 'react-hot-toast'

export default function CustomerToaster() {
	return (
		<Toaster
			position='top-right'
			toastOptions={{
				className: '!bg-color-2 !text-shade-1 !border !border-color-1',
			}}
		/>
	)
}
