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
				url="/exercises/communication/direct"
				icon={<IconVideo />}
				text="Direct Communication"
			/>
			<MenuItem
				url="settings"
				icon={<IconSettings />}
				text="Settings"
			/>
			<MenuItem
				url="/"
				icon={<IconLogout />}
				text="Log Out"
			/>
		</nav>
	)
}
