'use client'

import { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import clsx from 'clsx'

import { GitHub, MenuClose, Menu, LinkedIn, Home } from './icons'

const navItems = [
	{
		href: '/blog',
		text: 'blog'
	},
	{
		href: '/guestbook',
		text: 'guestbook'
	},
];

const MobileMenu = ({ navShow, onToggleNav }: any) => {
	return (
		<div className='md:hidden'>
			<div className={`fixed w-full h-full p-2 top-20 right-0 z-40 ease-in-out duration-500 ${navShow ? 'translate-x-0' : 'translate-x-full'} bg-white/90 saturate-[1.8] backdrop-blur-[10px]`}>
				<nav className='relative space-y-2 z-40'>
					{navItems.map((navLink, i) => (
						<div key={i} className='px-7'>
							<Link
								href={navLink.href}
								title={navLink.text}
								className='flex my-3 border-b border-gray-300 items-center text-sm font-[500] leading-8 tracking-normal text-gray-700'
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

	const pathname = usePathname()
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
			<header className="fixed top-0 left-0 right-0 max-w-3xl mx-auto z-40 bg-white/60 border-b saturate-[1.8] backdrop-blur-[10px]">
				<div className="mx-auto flex h-[100px]  px-8 items-center justify-between">
					<div className="hover:text-accent-5">
						<Link
							href='/'
						>
							<Home />
						</Link>
					</div>

					<div className="flex items-center gap-2">
						<ul className="hidden space-x-1 md:flex items-center">
							{navItems.map((navLink, i) => (
								<>
									<li key={i}>
										<Link
											href={navLink.href}
											className={clsx('rounded py-1.5 px-4 text-sm font-[500] transition-colors duration-300',
												{
													['text-[#555] dark:text-white hover:bg-[#555] hover:text-white']: navLink.href !== pathname
												},
												{
													['bg-[#555] text-white']: navLink.href === pathname
												}
											)}
										>
											{navLink.text}
										</Link>
									</li>
								</>
							))}
							<div className='w-[1px] h-[20px] mx-[5px] bg-accent-5' />
						</ul>

						<div className="items-center flex gap-3">
							<Link
								href=''
								target='_blank'
							>
								<LinkedIn />
							</Link>

							<Link
								href=''
								target='_blank'
							>
								<GitHub />
							</Link>
						</div>

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