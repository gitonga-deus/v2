import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About',
	description: 'Learn more about me',
};

export default function About() {
	return (
		<>
			<h1 className="mb-2 text-3xl font-bold tracking-tight text-black">About Me</h1>

			<p className='text-base leading-7 text-gray-500'>
				Under Construction...
			</p>
		</>
	)
}