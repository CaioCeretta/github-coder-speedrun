export interface DisplayProps {
	value: any
}

export const Display = ({ value }: DisplayProps) => {
	return <span className="text-8xl">{value}</span>
}

export default Display
