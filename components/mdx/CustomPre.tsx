'use client'

import React from 'react'
import { toast } from 'react-hot-toast'

type PreProps = JSX.IntrinsicElements['pre']

const CustomPre = (props: PreProps) => {
	const { children, ...rest } = props

	const textInput = React.useRef<HTMLPreElement>(null)
	const [isCopied, setCopied] = React.useState(false)

	const onCopy = async () => {
		setCopied(true)

		if (!navigator?.clipboard) {
			toast.error('Access to clipboard rejected!')
		}

		try {
			if (textInput.current?.textContent) {
				await navigator.clipboard.writeText(textInput.current.textContent)
				toast.success('Copied')
			}
		} catch {
			toast.error('Failed to copy!')
		}
	}

	React.useEffect(() => {
		if (!isCopied) return

		const timerId = setTimeout(() => {
			setCopied(false)
		}, 2000)

		return () => {
			clearTimeout(timerId)
		}
	}, [isCopied])

	return (
		<>
			<pre
				{...rest}
				ref={textInput}
				className='relative overflow-x-scroll'
			>
				{children}
			</pre>
			{/* <button
				type='button'
				onClick={onCopy}
				title='Copy to clipboard'
				aria-label='Copy to clipboard'
				className='absolute right-4 top-4 transition'
			>
				{isCopied ? <Check /> : <Copy />}
			</button> */}
		</>
	)
}

export default CustomPre;