'use client'

import { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import clsx from 'clsx'
import { useKBar } from 'kbar'

import { GoHome } from 'react-icons/go'
import { RiCommandFill } from 'react-icons/ri'
import { IoCloseOutline } from 'react-icons/io5'
import { RxTextAlignRight } from 'react-icons/rx'

const navItems = [
	{
		href: '/articles',
		text: 'articles'
	},
];

const MobileMenu = ({ navShow, onToggleNav }: any) => {
	return (
		<div className='md:hidden'>
			<div className={`fixed w-full h-full p-2 top-20 right-0 z-40 ease-in-out duration-500 ${navShow ? 'translate-x-0' : 'translate-x-full'} backdrop-blur-xl`}>
				<nav className='relative space-y-2 z-40'>
					{navItems.map((navLink, i) => (
						<div key={i} className='px-8'>
							<Link
								href={navLink.href}
								title={navLink.text}
								className='flex my-3 border-color-1 border-b text-base font-medium leading-8 tracking-normal text-shade-3'
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
			<header className='fixed left-0 right-0 top-0 z-40 saturate-[1.0] backdrop-blur-[10px]'>
				<div className='mx-auto flex h-[80px] border-b border-color-1 max-w-3xl items-center justify-between px-8'>
					<Link
						href='/'
						className='text-shade-1 py-2 px-3 rounded-md'
					>
						<GoHome size={22} />
					</Link>


					<div className="flex items-center space-x-1">
						<ul className="hidden space-x-1 md:flex items-center">
							{navItems.map((navLink, i) => (
								<li key={i}>
									<Link
										href={navLink.href}
										className={clsx('rounded py-2 px-3 text-sm font-[500] transition-colors duration-300 tracking-tight',
											{
												['text-shade-1']: navLink.href !== pathname
											},
											{
												['bg-color-2 text-shade-1']: navLink.href === pathname
											}
										)}
									>
										{navLink.text}
									</Link>
								</li>
							))}
							<div className='w-[1px] h-[20px] mx-[5px] bg-color-2' />
						</ul>


						<button
							className='flex py-1 px-2 items-center justify-center rounded duration-300 text-shade-1'
							onClick={() => query.toggle()}
							type='button'
							aria-label='Command Bar'
						>
							<RiCommandFill size={22} />
						</button>


						<div className="md:hidden">
							<button
								type='button'
								className='mx-1 h-8 w-8 rounded text-shade-1'
								aria-label='Toggle Menu'
								onClick={onToggleNav}
							>
								{navShow ? (
									<IoCloseOutline size={24} />
								) : (
									<RxTextAlignRight size={24} />
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