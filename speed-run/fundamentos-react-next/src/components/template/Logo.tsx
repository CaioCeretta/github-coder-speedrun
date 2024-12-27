import { IconBrandReact } from '@tabler/icons-react'

export default function Logo() {
	return (
		<div className="flex items-center gap-3">
			<IconBrandReact size={40} stroke={1} />
			<span className="text-lg font-light">
				React & Next
			</span>
		</div>
	)
}
