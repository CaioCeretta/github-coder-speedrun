'use client'

import Title from '@/components/template/Title'
import CounterContext from '@/data/contexts/CounterContext'
import { useContext } from 'react'

export interface PageProps {}

export const Page = (props: PageProps) => {
	const obj = useContext(CounterContext)

	return (
		<div className="flex flex-col gap-5">
			<Title
				main="Using Context"
				secondary="Using React.JS Context API"
			/>
			<div className="text-8xl">{obj.number}</div>
		</div>
	)
}

export default Page
