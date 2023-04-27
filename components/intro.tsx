const heroText = [
	'Welcome to my little corner of the internet! I\'m all about making websites that look good and work great.', 'Join me as we explore the latest tech trends and programming tips, with a side of humor and a dash of coffee.',
]

const Hero = () => {
	return (
		<>
			<div className='pt-8'>
				<div className='space-y-2 md:max-w-full'>
					<h1 className='text-2xl md:text-3xl font-semibold text-shade-1 tracking-tight'>
						Deus Gitonga — Developer <code>&</code> Writer
					</h1>

					{heroText.map((text, i) => (
						<p className='text-base leading-7 text-left text-shade-2 tracking-tight' key={i}>
							{text}
						</p>
					))}
				</div>
			</div>
			<div className='w-32 border-b border-color-1 my-8 ' />
		</>
	)
}

export default Hero