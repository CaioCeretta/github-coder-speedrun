'use client'

import { createContext } from 'react'

const CounterContext = createContext(0)

export function CounterProvider(props: any) {
	return (
		<CounterContext.Provider value={0}>
			<h1>Counter Provider</h1>
			{props.children}
		</CounterContext.Provider>
	)
}

export default CounterContext
