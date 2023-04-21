import Image from 'next/image'

import avatar from '../public/avatar.png'

const heroText = [
	'Hey there, welcome to my little corner of the internet! I\'m all about making websites that look good and work great.', 'Join me as we explore the latest tech trends and programming tips, with a side of humor and a dash of coffee.',
]

const Hero = () => {
	return (
		<>
			<div className='pt-8'>
				<div className='flex flex-col-reverse md:items-center gap-4 md:flex-row md:justify-between'>
					<div className='space-y-2 md:max-w-[30rem]'>
						<h1 className='text-2xl font-semibold text-gitonga-fg tracking-tight capitalize'>
							hi 👋🏻, i&apos;m deus gitonga
						</h1>
						<h2 className='text-lg font-medium text-shade-2 tracking-tight'>
							developer • writer
						</h2>

						{heroText.map((text, i) => (
							<p className='text-base leading-6 text-left text-gitonga-fg tracking-tight' key={i}>
								{text}
							</p>
						))}
					</div>
					<div className=''>
						<Image
							width={160} height={160} src={avatar} alt='avatar' loading='eager'
							className='shadow-md rounded-lg border'
						/>
					</div>
				</div>

			</div>
			<hr className='w-[5rem] mt-8 mb-4' />
		</>
	)
}

export default Hero