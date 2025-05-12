import {
	IconLayoutDashboard,
	IconLogout,
	IconSettings,
	IconUser,
	IconVideo,
} from '@tabler/icons-react'
import MenuItem from './MenuItem'

export default function Menu() {
	return (
		<nav className="flex flex-col gap-2 p-7">
			<MenuItem
				url="/start"
				icon={<IconLayoutDashboard />}
				text="Dashboard"
			/>
			<MenuItem
				url="start/admin"
				icon={<IconUser />}
				text="Users"
			/>
			<MenuItem
				url="courses"
				icon={<IconVideo />}
				text="Courses"
			/>
			<MenuItem
				url="settings"
				icon={<IconSettings />}
				text="Settings"
			/>
			<MenuItem
				url="/start"
				icon={<IconLogout />}
				text="Log Out"
			/>
		</nav>
	)
}
