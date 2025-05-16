import Title from '@/components/template/Title'

export interface PageProps {}

export const Page = (props: PageProps) => {
	return (
		<div className="flex flex-col gap-5">
			<Title
				main="Using Context"
				secondary="Using React.JS Context API"
			/>
		</div>
	)
}

export default Page
