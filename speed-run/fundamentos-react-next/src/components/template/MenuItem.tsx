import Link from 'next/link'
import type { ElementType } from 'react'

export interface MenuItemProps {
	texto: string
	icone?: ElementType
	link: string
}

export default function MenuItem(props: MenuItemProps) {
	return (
		<Link
			className="px-4 py-2 rounded-md hover:bg-white/10
          flex gap-2 items-center"
			href={props.link}
		>
			{/* We have different options in the icon passed as props, we could say that the icon is of ReactNode type, and when
      passing it, we pass the whole element, such as <MenuItem icone={<HomeIcon />} ...>, or we could say that the icon
      is of the ElementType type, which we would do it like this, we sould simply pass the icon, such as icone={HomeIcon}
      and then on the component receiving that property, we utilize it like this, instantiating the tag
      
      One advantage of doing it like this is that we don't have to stick with the element and the attributes we are receiving,
      we can patternize in a more efficient waym the properties of the icons, such as the example below
      */}
			{props.icone && (
				<props.icone stroke={1.5} size={24} />
			)}
			<span>{props.texto}</span>
		</Link>
	)
}
