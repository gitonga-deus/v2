'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import { HEADER_LINKS, SOCIAL_LINKS } from '@/config/links'
import { Close, Menu } from '../icons'

function MobileMenu({ navShow, onToggleNav }: any) {
	return (
		<div className='md:hidden'>
			<div className={`fixed w-full h-full p-2 top-20 right-0 z-40 ease-in-out duration-500 ${navShow ? 'translate-x-0' : 'translate-x-full'} backdrop-blur`}>
				<nav className='relative z-40 space-y-2'>
					{HEADER_LINKS.map((navLink, i) => (
						<div key={i} className='px-8'>
							<Link
								href={navLink.href}
								title={navLink.text}
								className='flex my-3 text-base font-medium leading-8 tracking-normal border-b border-color-1 text-shade-1'
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

	let pathname = usePathname()
	if (pathname.includes('/articles/')) {
		pathname = '/articles';
	}
	const [navShow, setNavShow] = useState(false);
	const [showBlur, setShowBlur] = useState(false)

	const onToggleNav = () => {
		setNavShow((status) => {
			if (status) {
				document.body.style.overflow = 'auto'
			} else {
				document.body.style.overflow = 'hidden'
			} return !status
		});
	}

	useEffect(() => {
		function handleScroll() {
			const position = window.scrollY
			setShowBlur(position > 40)
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<>
			<header className={clsx(
				'sticky top-0 z-30 max-w-3xl mx-auto bg-theme/10 saturate-100 backdrop-blur',
				showBlur
					? "bg-opacity-20 backdrop-blur"
					: "bg-opacity-0 backdrop-blur-none",
				'duration-100'
			)}>
				<div className='flex flex-row-reverse h-[90px] items-center justify-between px-8'>
					<div className='flex items-center'>
						<div className='flex items-center gap-2 mr-2'>
							{SOCIAL_LINKS.map((item, i) => (
								<Link
									key={i}
									href={item.href}
									target='_blank' rel='noreferrer noopener'
									className='text-shade-2 hover:text-shade-1 duration-300'
								>
									{item.icon}
								</Link>
							))}
						</div>


						<div className="md:hidden">
							<button
								type='button'
								className='w-8 h-8 mx-1 rounded text-shade-1'
								aria-label='Toggle Menu'
								onClick={onToggleNav}
							>
								{navShow ? (
									<Close />
								) : (
									<Menu />
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
											'rounded px-3 lowercase py-2 text-[15px] transition-colors duration-500',
											{
												['text-shade-2 hover:bg-color-1 hover:text-shade-1']:
													link.href !== pathname,
											},
											{
												['bg-color-2 text-shade-1']: link.href === pathname,
											}
										)}
										href={link.href}
										scroll={false}
									>
										{link.text}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div
					className={clsx("divider-x transition-opacity mx-6", 'duration-100', showBlur ? "opacity-100" : "opacity-0")}
				/>
			</header>

			<MobileMenu navShow={navShow} onToggleNav={onToggleNav} />
		</>
	)
}