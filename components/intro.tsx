import clsx from 'clsx'

import { abril } from "@/utils/fonts";

const introText = [
	'Welcome to my digital nook. I\'m a self-taught frontend and javascript developer and here, I share my thoughts on everything from the latest web development trends to tips and tricks for building beautiful and responsive interfaces.',
	'Let\'s build amazing things together!',
]

const Intro = () => {
	return (
		<div
			className='space-y-8 pt-8 pb-4'
		>
			<div className='flex flex-col-reverse gap-8 md:flex-row md:justify-between'>
				<div className='space-y-4 max-w-3xl'>
					<h1 className={clsx('mb-1 text-4xl tracking-tight text-zinc-800 md:text-6xl', abril.className)}>
						Hey, I&#39;m Deus,
					</h1>
					{introText.map((paragraph, i) => (
						<p className='text-[15px] leading-7 tracking-normal text-shade-3' key={i}>
							{paragraph}
						</p>
					))}
				</div>
			</div>
			<hr className='mt-4 -mx-2 text-shade-3' />
		</div>
	)
}

export default Intro;