import Link from 'next/link';

const ExternalLink = ({ href, children }: any) => (
	<a
		className="text-gray-500 hover:text-gray-600 transition"
		target="_blank"
		rel="noopener noreferrer"
		href={href}
	>
		{children}
	</a>
);

export default function Footer() {
	return (
		<footer className="flex flex-col justify-center text-base items-start max-w-2xl mx-auto w-full mb-8 mt-16">
			<hr className="w-full border-1 border-gray-200 mb-8" />

			<div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 text-[15px] sm:grid-cols-3">
				<div className="flex flex-col space-y-4">
					<Link href="/">
						<p className="text-gray-500 hover:text-gray-600 transition">Home</p>
					</Link>
					<Link href="/about">
						<p className="text-gray-500 hover:text-gray-600 transition">
							About
						</p>
					</Link>
					<Link href="/articles">
						<p className="text-gray-500 hover:text-gray-600 transition">
							Articles
						</p>
					</Link>
				</div>
				<div className="flex flex-col space-y-4">
					<ExternalLink href="https://github.com/gitonga-deus">GitHub</ExternalLink>
					<ExternalLink href="https://www.linkedin.com/in/gitonga-deus/">LinkedIn</ExternalLink>
				</div>
				<div className="flex flex-col space-y-4">
					<Link href="/snippets">
						<p className="text-gray-500 hover:text-gray-600 transition">
							Snippets
						</p>
					</Link>
				</div>
			</div>
		</footer>
	);
}