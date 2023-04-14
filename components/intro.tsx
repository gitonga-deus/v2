import clsx from 'clsx';
import { cormorant } from "@/utils/fonts";

const introText = [
	'I\'m a frontend and javascript developer based in Nairobi, Kenya.',
]

const Intro = () => {
	return (
		<div
			className='space-y-8 pt-8 pb-4'
		>
			<div className='flex flex-col-reverse gap-8 md:flex-row md:justify-between'>
				<div className='space-y-4 max-w-3xl'>

					<div className='space-y-4'>
						<h1
							className={clsx(
								'text-3xl md:text-5xl font-bold text-gitonga-fg tracking-tight',
								cormorant.className
							)}
						>
							hello, i&apos;m Gitonga
						</h1>
						<h2 className='font-medium text-gitonga-fg text-base md:text-lg'>
							Developer • Writer
						</h2>

						<p
							className="text-shade-3 font-regular text-[15px] leading-relaxed"
						>
							Welcome to my digital nook. I'm a frontend and javascript developer based in Nairobi and here, I share my thoughts on software development, design, and other things I find interesting.
						</p>
					</div>
				</div>
			</div>
			<hr className='my-4 w-[5rem] text-shade-3' />
		</div>
	)
}

export default Intro;
