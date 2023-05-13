'use client'

export default function Footer () {
	return (
		<footer>
			<div className="max-w-4xl px-8 py-6 mx-auto border-t border-color-2">
				<div className="flex items-center text-base font-medium tracking-normal text-shade-1">
					&copy; {new Date().getFullYear()}{' '} Deus Gitonga.
				</div>
			</div>
		</footer>
	)
}

