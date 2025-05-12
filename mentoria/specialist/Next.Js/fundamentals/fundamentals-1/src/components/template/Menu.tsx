import {
	IconLayoutDashboard,
	IconSettings,
	IconUser,
	IconVideo,
} from '@tabler/icons-react'
import MenuItem from './MenuItem'

export default function Menu() {
	return (
		<nav className="flex flex-col gap-2 p-7">
			<MenuItem
				icon={<IconLayoutDashboard />}
				text="Dashboard"
			/>
			<MenuItem icon={<IconUser />} text="Users" />
			<MenuItem icon={<IconVideo />} text="Courses" />
			<MenuItem icon={<IconSettings />} text="Settings" />
		</nav>
	)
}
