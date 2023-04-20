const Footer = () => {
	return (
		<footer className="max-w-3xl my-8">
			<hr className="my-4 -mx-2 text-shade-3" />

			<div className="flex text-sm items-center gap-1 py-1 font-medium text-black">
				&copy;{new Date().getFullYear()}
				<h1 className="">Deus Gitonga</h1>
				<hr className="w-[16px] text-black" />
				<i className="">Nairobi, Kenya</i>
			</div>



		</footer>
	)
}

export default Footer;