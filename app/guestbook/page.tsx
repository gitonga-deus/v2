import type { Metadata } from 'next';

import { GitHub } from '@/components/icons';

export const metadata: Metadata = {
	title: 'Guestbook',
	description: 'Leave a message',
};


const Guestbook = () => {
	return (
		<section className='py-8'>
			<h1 className="text-shade-3 tracking-tight text-[15px] mb-2">soon...</h1>
		</section>
	)
}

export default Guestbook;