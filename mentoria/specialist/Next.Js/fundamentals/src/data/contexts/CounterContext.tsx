'use client'

import { createContext, useState } from 'react'

interface CounterContextProps {
	number: number
}

const CounterContext = createContext<CounterContextProps>(
	{} as any
)

export function CounterProvider(props: any) {
	const [number] = useState<number>(778899)

	return (
		<CounterContext.Provider
			value={{ number: 123, abc: 'abc' }}
		>
			<h1>Counter Provider</h1>
			{props.children}
		</CounterContext.Provider>
	)
}

export default CounterContext
