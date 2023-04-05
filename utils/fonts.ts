import { Inter, Abril_Fatface, Josefin_Slab } from 'next/font/google'

export const inter = Inter({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["400", "500", "600", "700"],
});

export const abril = Abril_Fatface({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-arvo",
	weight: ["400"],
});

export const josefin = Josefin_Slab({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-josefin",
	weight: ["400", "600", "700"],
});