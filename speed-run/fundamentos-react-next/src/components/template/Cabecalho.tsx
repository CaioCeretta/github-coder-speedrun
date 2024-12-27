/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import React from 'react'
import Logo from './Logo'

export interface CabecalhoProps {}

function Cabecalho(props: CabecalhoProps) {
	return (
		<header
			className="flex items-center h-20
        border-b border-zinc-800 px-6"
		>
			<Logo />
		</header>
	)
}

export default Cabecalho
