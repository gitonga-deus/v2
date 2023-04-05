type GitHubProps = {
	width: string
	height: string
}

type MenuCloseProps = {
	width: string
	height: string
}

type MenuProps = {
	width: string
	height: string
}

type LinkedInProps = {
	width: string
	height: string
}

type SearchIconProps = {
	width: string
	height: string
}

export function GitHub({ width, height }: GitHubProps) {
	return (
		<svg
			width={width}
			height={height}
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

export function MenuClose({ width, height }: MenuCloseProps) {
	return (
		<svg
			width={width} height={height} viewBox="0 0 24 24"
			stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
			strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision"
		>
			<path d="M18 6L6 18" />
			<path d="M6 6l12 12" />
		</svg>
	)
}

export function Menu({ width, height }: MenuProps) {
	return (
		<svg
			width={width} height={height}
			viewBox='0 0 15 15' fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"
			></path>
		</svg>
	)
}

export function LinkedIn({ width, height }: LinkedInProps) {
	return (
		<svg
			width={width} height={height}
			viewBox="0 0 15 15" fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"
			></path>
		</svg>
	)
}

export function SearchIcon({ width, height }: SearchIconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className='icon icon-tabler icon-tabler-search absolute top-1/2 left-4 -translate-y-1/2'
			width={width} height={height}
			viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
			strokeLinecap="round" strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx="10" cy="10" r="7" />
			<line x1="21" y1="21" x2="15" y2="15" />
		</svg>
	)
}