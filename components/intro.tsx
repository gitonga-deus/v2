import clsx from 'clsx'

import { cormorant } from "@/utils/fonts";


const Intro = () => {
	return (
		<>
			<div
				className='space-y-4 pt-8 pb-2'
			>
				<h1
					className={clsx(
						'text-3xl md:text-5xl font-bold text-gitonga-fg tracking-tight',
						cormorant.className
					)}
				>
					Hi, I&apos;m Gitonga
				</h1>
				<h2 className='font-medium text-gitonga-fg text-base md:text-lg'>
					Developer • Writer
				</h2>

				<p className="text-shade-3 font-regular text-[15px] leading-relaxed">
					Welcome to my digital nook. I&apos;m a frontend and javascript developer based in Nairobi and here, I share my thoughts on software development, design, and other things I find interesting.
				</p>

			</div>
			<hr className='my-4 w-[6rem] text-shade-3' />
		</>
	)
}

export default Intro;
