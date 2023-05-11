'use client'

import clsx from 'clsx'
import { WithChildren } from '@/types/common'
import { IconCode, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import {
	Action, KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarSearch, KBarResults, useMatches
} from 'kbar'

type CommandBarProps = WithChildren

function Results() {
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
							'mx-3 flex cursor-pointer items-center justify-between rounded px-3 py-3 transition-colors',
							active ? 'bg-color-2' : 'bg-transparent'
						)}
					>
						<div className='flex items-center text-shade-1'>
							{item.icon && <div className='mr-4'>{item.icon}</div>}
							<span className='text-base'>{item.name}</span>
						</div>
					</div>
				)
			}
		/>
	)
}

export default function CommandBar (props: CommandBarProps) {
	const { children } = props

	const actions: Action[] = [
		{
			id: 'source-code',
			name: 'Source Code',
			keywords: 'source code github',
			section: 'General',
			perform: () =>
				window.open('https://github.com/gitonga-deus/v2', '_blank'),
			icon: <IconCode size={24} />,
		},
		{
			id: 'github',
			name: 'GitHub',
			keywords: 'github',
			section: 'Social Links',
			perform: () => window.open('https://github.com/gitonga-deus', '_blank'),
			icon: <IconBrandGithub size={24} />,
		},
		{
			id: 'linkedin',
			name: 'LinkedIn',
			keywords: 'linkedin',
			section: 'Social Links',
			perform: () => window.open('https://linkedin.com/in/gitonga-deus/', '_blank'),
			icon: <IconBrandLinkedin size={24} />,
		},
	]

	return (
		<>
			<KBarProvider actions={actions}>
				<KBarPortal>
					<KBarPositioner className='z-50 bg-theme/10 backdrop-blur'>
						<KBarAnimator className='w-full max-w-lg border rounded-lg border-color-1 bg-theme'>
							<KBarSearch
								className='w-full px-4 py-3 bg-transparent outline-none text-shade-2'
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