'use client'

import clsx from 'clsx'
import { WithChildren } from '@/types/common'
import { Code, GitHub, LinkedIn } from './icons'
import {
	Action, KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarSearch, KBarResults, useMatches
} from 'kbar'

type KBarProps = WithChildren

const Results = () => {
	const { results } = useMatches()

	return (
		<KBarResults
			items={results}
			onRender={({ item, active }) =>
				typeof item === 'string' ? (
					<div className='select-none px-4 pb-2 pt-4 text-[10px] uppercase tracking-[1px]'>
						{item}
					</div>
				) : (
					<div
						className={clsx(
							'mx-3 flex cursor-pointer items-center justify-between rounded px-3 py-3 transition-colors',
							active ? 'bg-shade-1' : 'bg-transparent'
						)}
					>
						<div className='flex items-center'>
							{item.icon && <div className='mr-4'>{item.icon}</div>}
							<span className='text-md'>{item.name}</span>
						</div>
					</div>
				)
			}
		/>
	)
}

const KBar = (props: KBarProps) => {
	const { children } = props

	const actions: Action[] = [
		{
			id: 'source-code',
			name: 'Source code',
			keywords: 'source code github',
			section: 'General',
			perform: () =>
				window.open('https://github.com/gitonga-deus/v2', '_blank'),
			icon: <Code />,
		},
		{
			id: 'github',
			name: 'GitHub',
			keywords: 'github',
			section: 'Social',
			perform: () => window.open('https://github.com/gitonga-deus', '_blank'),
			icon: <GitHub />,
		},
		{
			id: 'linkedin',
			name: 'LinkedIn',
			keywords: 'linkedin',
			section: 'Social',
			perform: () => window.open('https://linkedin.com/in/gitonga-deus/', '_blank'),
			icon: <LinkedIn />,
		},
	]

	return (
		<>
			<KBarProvider actions={actions}>
				<KBarPortal>
					<KBarPositioner className='z-50 bg-[#0d1117]/10 backdrop-blur'>
					<KBarAnimator className='w-full max-w-lg rounded-lg border bg-white'>
							<KBarSearch
								className='w-full bg-transparent px-4 py-3 outline-none'
								defaultPlaceholder='Type command or search'
							/>
							<Results />
							<div className='h-4'></div>
						</KBarAnimator>
					</KBarPositioner>
				</KBarPortal>
				{children}
			</KBarProvider>
		</>
	)
}

export default KBar