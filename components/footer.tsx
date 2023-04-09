const Footer = () => {
	return (
		<footer className="max-w-3xl my-2">

			<hr className="my-4 -mx-2 text-shade-3" />


			<div className="text-sm leading-7 items-center py-1 font-[500] text-black dark:text-white uppercase">
				<span className="text-base">&copy; </span>{new Date().getFullYear()}
			</div>
		</footer>
	)
}

export default Footer;