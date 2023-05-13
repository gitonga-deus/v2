import { WithChildren } from '@/types'

type KbdProps = WithChildren

const Kbd = (props: KbdProps) => {
	const { children } = props

	return (
		<kbd className='text-shade-2'>
			{children}
		</kbd>
	)
}

export default Kbd