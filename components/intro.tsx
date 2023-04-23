const heroText = [
	'Hey 👋🏻 there, welcome to my little corner of the internet! I\'m all about making websites that look good and work great.', 'Join me as we explore the latest tech trends and programming tips, with a side of humor and a dash of coffee.',
]

const Hero = () => {
	return (
		<>
			<div className='pt-8'>
				<div className='space-y-2 md:max-w-full'>
					<h2 className='text-3xl font-semibold text-gitonga-fg tracking-tight'>
						DnG
					</h2>

					{heroText.map((text, i) => (
						<p className='text-base leading-7 text-left text-shade-3 tracking-tight' key={i}>
							{text}
						</p>
					))}
				</div>
			</div>
			<hr className='w-[8rem] mt-8 mb-4' />
		</>
	)
}

export default Hero