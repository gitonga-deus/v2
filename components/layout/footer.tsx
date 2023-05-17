'use client'

import clsx from 'clsx'
export default function Footer() {
	return (
		<footer>
			<div className="max-w-3xl px-8 space-y-6 mb-8 mx-auto">
				<div
					className={clsx("divider-x -mx-2")}
				/>
				<div className="flex items-center text-base font-medium tracking-normal text-shade-1">
					&copy; {new Date().getFullYear()}{' '} Deus Gitonga.
				</div>
			</div>
		</footer>
	)
}

