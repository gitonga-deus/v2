import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Snippets',
	description: 'A collection of code snippets – Node.js scripts and CSS tricks.',
};

export default function Snippets() {
	return (
		<>
			<h1 className="mb-2 text-3xl font-bold tracking-tight text-black dark:text-white">Snippets</h1>

			<p className='text-base leading-7 text-accent-4 dark:text-accent-6'>
				Under Construction...
			</p>
		</>
	)
}