import Image from 'next/image'
import React from 'react'

function Logo() {
	return (
		<header
			className="flex items-center h-20
        border-b border-zinc-800 px-6"
		>
			<div className="flex items-center gap-2">
				<Image
					src="https://logospng.org/download/volkswagen/logo-volkswagen-4096.png"
					alt="logo"
					height={50}
					width={50}
				/>
				<span className="text-xl font-black">
					Wolkswagen
				</span>
			</div>
		</header>
	)
}

export default Logo
