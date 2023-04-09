export type WithChildren = { children: React.ReactNode }

export type WithClassName<T = {}> = T & {
	className?: string
}

export type WithProps<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<U>, U = any> = React.ComponentProps<T>