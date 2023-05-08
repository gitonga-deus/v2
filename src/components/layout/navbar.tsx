'use client'

import { useState } from 'react'

import Link from 'next/link'

import clsx from 'clsx'
import { useKBar } from 'kbar'
import { usePathname } from 'next/navigation'

import { HEADER_LINKS } from '@/config/links'
import { IconCommand, IconMenu, IconCross } from '@tabler/icons-react'

function MobileMenu({ navShow, onToggleNav }: any) {
	return (
		<div className='md:hidden'>
			<div className={`fixed w-full h-full p-2 top-20 right-0 z-40 ease-in-out duration-500 ${navShow ? 'translate-x-0' : 'translate-x-full'} backdrop-blur-xl`}>
				<nav className='relative space-y-2 z-40'>
					{HEADER_LINKS.map((navLink, i) => (
						<div key={i} className='px-8'>
							<Link
								href={navLink.href}
								title={navLink.text}
								className='flex my-3 border-color-1 border-b text-base font-medium leading-8 tracking-normal text-shade-1'
								onClick={onToggleNav}
							>
								{navLink.text}
							</Link>
						</div>
					))}
				</nav>
			</div>
		</div>
	)
}

export default function Header() {
	let { query } = useKBar()

	let pathname = usePathname()
	if (pathname.includes('/articles/')) {
		pathname = '/articles';
	}
	const [navShow, setNavShow] = useState(false);

	const onToggleNav = () => {
		setNavShow((status) => {
			if (status) {
				document.body.style.overflow = 'auto'
			} else {
				document.body.style.overflow = 'hidden'
			} return !status
		});
	}

	return (
		<>
			<header className='fixed left-0 right-0 top-0 z-40 bg-theme/50 saturate-100 backdrop-blur-[10px]'>
				<div className='mx-auto flex flex-row-reverse border-b border-color-2 h-[80px] max-w-3xl items-center justify-between px-4'>
					<div className='flex items-center'>
						<button
							className='flex p-1 items-center justify-center rounded duration-500 text-shade-1 hover:ring-2 ring-neutral-500'
							onClick={() => query.toggle()}
							type='button'
							aria-label='Command Bar'
						>
							<IconCommand size={24} />
						</button>


						<div className="md:hidden">
							<button
								type='button'
								className='mx-1 h-8 w-8 rounded text-shade-1'
								aria-label='Toggle Menu'
								onClick={onToggleNav}
							>
								{navShow ? (
									<svg
										className='w-5 h-5'
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
										</path>
									</svg>
								) : (
									<IconMenu size={24} />
								)}
							</button>
						</div>
					</div>

					<div className='flex items-center gap-2'>
						<ul className='hidden space-x-2 md:flex'>
							{HEADER_LINKS.map((link) => (
								<li key={link.text}>
									<Link
										className={clsx(
											'rounded px-3 py-2 text-sm font-medium transition-colors duration-500',
											{
												['text-shade-2 hover:bg-color-1 hover:text-shade-1']:
													link.href !== pathname,
											},
											{
												['bg-color-2 text-shade-1']: link.href === pathname,
											}
										)}
										href={link.href}
									>
										{link.text}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</header>
			<MobileMenu navShow={navShow} onToggleNav={onToggleNav} />
		</>
	)
}