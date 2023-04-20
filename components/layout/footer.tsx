const Footer = () => {
	return (
		<footer className="max-w-3xl my-8">
			<hr className="my-4 -mx-2 text-shade-3" />

			<div className="flex text-sm items-center py-1 font-medium text-black uppercase">
				&copy; {new Date().getFullYear()}
				<div className='w-[1px] h-[20px] mx-[5px] bg-shade-3' />
				Deus Gitonga.
			</div>
		</footer>
	)
}

export default Footer;