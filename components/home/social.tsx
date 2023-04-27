import type { FC } from 'react'

import { SiLinkedin } from 'react-icons/si'
import { RxDiscordLogo } from 'react-icons/rx'
import { FiGithub } from 'react-icons/fi/index'

export const Socials: FC = () => {
	return (
		<div className='mt-6 text-sm flex gap-2 items-center'>
			{[
				{
					aria: 'GitHub',
					icon: FiGithub,
					href: 'https://github.com/gitonga-deus',
				}, {
					aria: 'Discord',
					icon: RxDiscordLogo,
					href: 'https://discord.com/users/518432133111611397',
				}, {
					aria: 'Linkedin',
					icon: SiLinkedin,
					href: 'https://linkedin.com/in/gitonga-deus',
				}
			].map((link, index) => (
				<a
					href={link.href}
					target='_blank'
					rel='noreferrer'
					className='h-5 w-5 mr-2'
					key={index}
					aria-label={link.aria}
				>
					<link.icon size={20} />
				</a>
			))}
		</div>
	)
}