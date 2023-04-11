export function GitHub() {
	return (
		<svg
			className='w-5 h-5'
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_9914_10)">
				<path
					d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="clip0_9914_10">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}

export function MenuClose() {
	return (
		<svg
			className='w-5 h-5' viewBox="0 0 24 24"
			stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
			strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision"
		>
			<path d="M18 6L6 18" />
			<path d="M6 6l12 12" />
		</svg>
	)
}

export function Menu() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
			<path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
		</svg>

	)
}

export function LinkedIn() {
	return (
		<svg
			className='w-5 h-5'
			viewBox="0 0 15 15" fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"
			></path>
		</svg>
	)
}

export function Home() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
			stroke="currentColor" className="w-5 h-5 hover:text-black duration-300 transition-colors">
			<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
		</svg>

	)
}

export function ArrowUpRight() {
	return (
		<svg
			className='w-4 h-4 relative mx-[2px] inline-block'
			xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
		</svg>
	)
}

export function Code() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
			/>
		</svg>

	)
}

export function Link() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none" viewBox="0 0 24 24"
			strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
			/>
		</svg>

	)
}

export function Command() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 font-bold"
			viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
			fill="none" strokeLinecap="round" strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" />
		</svg>
	)
}