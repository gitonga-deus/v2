'use client'

import { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import clsx from 'clsx'
import { useKBar } from 'kbar'

import { Command, MenuClose, Menu, Home } from '@/components/icons'

const navItems = [
	{
		href: '/articles',
		text: 'articles'
	},
];

const MobileMenu = ({ navShow, onToggleNav }: any) => {
	return (
		<div className='md:hidden'>
			<div className={`fixed w-full h-full p-2 top-20 right-0 z-40 ease-in-out duration-500 ${navShow ? 'translate-x-0' : 'translate-x-full'} backdrop-blur`}>
				<nav className='relative space-y-2 z-40'>
					{navItems.map((navLink, i) => (
						<div key={i} className='px-7'>
							<Link
								href={navLink.href}
								title={navLink.text}
								className='flex my-3 border-gray-600 border-b-[1px] items-center text-sm font-[500] leading-8 tracking-normal text-black'
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

const Navbar = () => {
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
			<header className="fixed top-0 left-0 right-0 z-40 backdrop-blur">
				<div className="flex h-[90px] border-b px-4 mx-auto max-w-3xl items-center justify-between">
					<Link
						href='/'
						className='hover:bg-shade-1 hover:text-black py-2 px-3 rounded-md'
					>
						<Home />
					</Link>


					<div className="flex items-center space-x-1">
						<ul className="hidden space-x-1 md:flex items-center">
							{navItems.map((navLink, i) => (
								<li key={i}>
									<Link
										href={navLink.href}
										className={clsx('rounded py-2 px-3 text-sm font-[500] transition-colors duration-300 tracking-tight capitalize',
											{
												['text-[#555] hover:bg-shade-1 hover:text-black']: navLink.href !== pathname
											},
											{
												['bg-shade-1 text-black']: navLink.href === pathname
											}
										)}
									>
										{navLink.text}
									</Link>
								</li>
							))}
							<div className='w-[1px] h-[20px] mx-[5px] bg-shade-3' />
						</ul>


						<button
							className='flex py-2 px-3 items-center justify-center rounded duration-300 hover:bg-shade-1 hover:text-black'
							onClick={() => query.toggle()}
							type='button'
							aria-label='Command Bar'
						>
							<Command />
						</button>


						<div className="md:hidden">
							<button
								type='button'
								className='mx-1 h-8 w-8 rounded text-zinc-800 dark:text-white'
								aria-label='Toggle Menu'
								onClick={onToggleNav}
							>
								{navShow ? (
									<MenuClose />
								) : (
									<Menu />
								)}
							</button>
						</div>
					</div>
				</div>
			</header >
			<MobileMenu navShow={navShow} onToggleNav={onToggleNav} />
		</>
	)
}

export default Navbar;