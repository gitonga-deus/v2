'use client'

import clsx from 'clsx'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

import Link from 'next/link'
import { useTheme } from 'next-themes'

import { HEADER_LINKS } from '@/config'


export default function Navbar() {
	let pathname = usePathname()

	if (pathname.includes('/articles/')) {
		pathname = '/articles';
	}

	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	return (
		<>
			<div className='flex flex-col justify-center'>
				<div className='flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16 bg-opacity-60'>
					<div className="flex items-center gap-2">
						{HEADER_LINKS.map((navItem, i) => (

							<Link
								key={i}
								className={clsx(
									'rounded px-2 font-medium capitalize py-[6px] text-[15px] gap-2',
									{
										['font-normal text-accent-4 dark:text-accent-5']:
											navItem.href !== pathname,
									},
									{
										['font-semibold text-accent-8 dark:text-accent-7 bg-gray-200 dark:bg-[#444]']: navItem.href === pathname,
									}
								)}
								href={navItem.href}
								scroll={false}
							>
								{navItem.text}
							</Link>

						))}
					</div>

					<button
						aria-label="Toggle Dark Mode"
						type="button"
						className="w-9 h-9 bg-gray-200 rounded-md flex items-center justify-center hover:ring-2 ring-gray-300 dark:ring-gray-500 transition-all dark:bg-[#444]"
						onClick={() =>
							setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
						}
					>
						{mounted && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								className="w-5 h-5 text-gray-800 dark:text-gray-200"
							>
								{resolvedTheme === 'dark' ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
									/>
								)}
							</svg>
						)}
					</button>
				</div>
			</div>
		</>
	)
}