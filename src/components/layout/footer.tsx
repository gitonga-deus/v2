'use client'

export default function Footer () {
	return (
		<footer>
			<div className="py-6 max-w-3xl border-t border-color-2 mx-auto px-8">
				<div className="flex text-base items-center font-medium tracking-normal text-shade-1">
					&copy; {new Date().getFullYear()}{' '} Deus Gitonga.
				</div>
			</div>
		</footer>
	)
}

