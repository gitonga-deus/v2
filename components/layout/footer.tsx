import Link from 'next/link';

import { SOCIAL_LINKS } from '@/config';

const ExternalLink = ({ href, children }: any) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="text-accent-5 hover:text-accent-6 transition hover:font-semibold"
	>
		{children}
	</a>
);

export default function Footer() {
	return (
		<footer className="flex flex-col justify-center text-base text-accent-5 dark:text-accent-6 items-start max-w-2xl mx-auto w-full mt-24 py-10">
			<hr className="w-full border-1 border-accent-2 mb-8" />

			<div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-12 sm:grid-cols-3">
				<div className="flex flex-col space-y-4">
					<Link href="/">
						<p className="hover:font-semibold transition">
							Home
						</p>
					</Link>
					<Link href="/articles">
						<p className="hover:font-semibold transition">
							Articles
						</p>
					</Link>
				</div>
				<div className="flex flex-col space-y-4">
					{SOCIAL_LINKS.map((social, i) => (
						<ExternalLink
							key={i}
							href={social.href}
						>
							{social.text}
						</ExternalLink>
					))}
				</div>
				<div className="flex flex-col space-y-4">
					<ExternalLink href={'https://gitonga.me/rss.xml'}>RSS</ExternalLink>
				</div>
			</div>
		</footer>
	);
}
