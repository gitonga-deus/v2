const Footer = () => {
	return (
		<footer>
			<div className="py-4 max-w-3xl border-t border-color-1 mx-auto px-8">

				<div className="flex text-base items-center py-1 font-medium tracking-normal text-shade-1">
					&copy; {new Date().getFullYear()} 
					{' '} Deus Gitonga
				</div>
			</div>
		</footer>
	)
}

export default Footer;