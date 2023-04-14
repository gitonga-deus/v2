import { Inter, Cormorant_Garamond } from 'next/font/google'

export const inter = Inter({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["400", "500", "600", "700"],
});

export const cormorant = Cormorant_Garamond({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-cormorant",
	weight: ["400", "500", "600", "700"],
});