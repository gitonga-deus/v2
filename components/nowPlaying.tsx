'use client'

import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

import { Spotify } from './icons'

type Song = {
	isPlaying?: boolean
	name: string
	artist: string
	album: string
	albumImage: string
	songUrl: string
}

const NowPlaying = () => {
	const { data } = useSWR<Song>('/api/spotify', fetcher)

	return (
		<div className='flex items-center gap-2 md:visible invisible'>
			<Spotify />

			<div className='inline-flex w-full items-center justify-center gap-1 text-sm font-medium md:justify-start'>
				<p>
					{data?.isPlaying && data.songUrl ? (
						<a href={data.songUrl} target='_blank' rel='noopener noreferrer'>
							{data.name} - {data.artist}
						</a>
					) : (
						'Not Playing'
					)}
				</p>
			</div>
		</div>
	)
}

export default NowPlaying