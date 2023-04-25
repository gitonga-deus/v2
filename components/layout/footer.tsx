const Footer = () => {
	return (
		<footer>
			<div className="py-4 max-w-3xl border-t mx-auto px-8">

				<div className="flex text-base items-center py-1 font-medium text-black uppercase">
					&copy; {new Date().getFullYear()}
					<div className='w-[1px] h-[15px] mx-1 bg-shade-3' />
					Deus Gitonga.
				</div>
			</div>
		</footer>
	)
}

export default Footer;