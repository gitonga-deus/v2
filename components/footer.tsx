import NowPlaying from "./nowPlaying";

const Footer = () => {
	return (
		<footer className="max-w-3xl my-8">
			<hr className="my-4 -mx-2 text-shade-3" />
			<div className="flex flex-col items-center justify-between mt-6 md:flex-row-reverse">
				<div className="text-sm items-center py-1 font-medium text-black">
					&copy; {new Date().getFullYear()}
				</div>

				<NowPlaying />
			</div>
		</footer>
	)
}

export default Footer;