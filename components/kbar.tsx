'use client'

import clsx from 'clsx'
import { WithChildren } from '@/types/common'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { BsCodeSlash } from 'react-icons/bs'
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
					<div className='select-none px-4 pb-2 pt-4 text-[10px] text-shade-1 uppercase tracking-[1px]'>
						{item}
					</div>
				) : (
					<div
						className={clsx(
							'mx-3 flex cursor-pointer items-center justify-between text-shade-1 rounded px-3 py-3 transition-colors',
							active ? 'bg-[#69696980]' : 'bg-transparent'
						)}
					>
						<div className='flex items-center'>
							{item.icon && <div className='mr-3'>{item.icon}</div>}
							<span className='text-base'>{item.name}</span>
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
			icon: <BsCodeSlash size={20} />,
		},
		{
			id: 'github',
			name: 'GitHub',
			keywords: 'github',
			section: 'Social Links',
			perform: () => window.open('https://github.com/gitonga-deus', '_blank'),
			icon: <FiGithub size={20} />,
		},
		{
			id: 'linkedin',
			name: 'LinkedIn',
			keywords: 'linkedin',
			section: 'Social Links',
			perform: () => window.open('https://linkedin.com/in/gitonga-deus/', '_blank'),
			icon: <FiLinkedin size={20} />,
		},
	]

	return (
		<>
			<KBarProvider actions={actions}>
				<KBarPortal>
					<KBarPositioner className='z-50 bg-[#0d1117]/10 backdrop-blur'>
						<KBarAnimator className='w-full max-w-lg rounded-lg border border-[#69696980] bg-gitonga-fg'>
							<KBarSearch
								className='w-full bg-transparent text-shade-1 px-4 py-3 outline-none'
								defaultPlaceholder='Search...'
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