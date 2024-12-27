import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
	title: 'React & Next',
	description: 'Speedrun Web da Formação.DEV!',
}

const font = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${font.className} antialiased`}>
				{children}
			</body>
		</html>
	)
}
