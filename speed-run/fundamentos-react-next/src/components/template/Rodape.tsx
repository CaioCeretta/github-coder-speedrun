import { IconHeartFilled } from '@tabler/icons-react'

export default function Rodape() {
	return (
		<footer className="flex items-center gap-1.5 px-5 h-16 justify-end border-t border-zinc-800">
			<span>Feito com</span>
			<IconHeartFilled
				size={14}
				className="text-red-500 "
			/>
			<span>por Cod3r</span>
		</footer>
	)
}
