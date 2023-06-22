import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About',
	description: 'Learn more about me',
};

export default function About() {
	return (
		<>
			<h1 className="mb-2 text-3xl font-bold tracking-tight text-accent-8">About Me</h1>

			<p className='text-base leading-7 text-accent-5'>
				Under Construction...
			</p>
		</>
	)
}