import clsx from 'clsx'

const Intro = () => {
	return (
		<>
			<div
				className='space-y-4 pt-12 pb-2'
			>
				<h1
					className={clsx(
						'text-2xl md:text-3xl font-semibold text-shade-3 tracking-tight',

					)}
				>
					Hello! ¡Holá! Bonjour!👋🏻, <span className='text-gitonga-fg'>I&apos;m Gitonga. </span>
				</h1>

				<p className="text-shade-3 font-regular text-base leading-6 tracking-tight">
					Welcome to my blog. I&apos;m a frontend and javascript developer based in Nairobi and here, I share my thoughts on software development, design, and other things I find interesting.
				</p>

			</div>
			<hr className='my-4 w-[6rem] text-shade-3' />
		</>
	)
}

export default Intro;
