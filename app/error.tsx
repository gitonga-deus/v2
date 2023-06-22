'use client';

import Link from 'next/link'
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {

		console.error(error);
	}, [error]);

	return (
		<div className="py-6 sm:py-8 lg:py-12">
			<div className="mx-auto px-4 md:px-8">
				<div className="flex flex-col items-center">
					<p
						className="mb-4 text-sm font-semibold uppercase text-accent-7 md:text-base"
					>
						That’s a 404
					</p>
					<h1
						className="mb-2 text-center text-2xl font-bold text-accent-8 md:text-3xl"
					>
						Page Not Found
					</h1>

					<p
						className="mb-12 text-center text-accent-5 text-lg"
					>
						The page you’re looking for doesn’t exist.
					</p>

					<Link
						href="/"
						className="inline-block rounded bg-accent-2 hover:bg-accent-3 px-4 py-2 text-center text-sm font-semibold text-accent-8 outline-none transition duration-300 md:text-base"
					>
						Return Home
					</Link>
				</div>
			</div>
		</div>
	);
}