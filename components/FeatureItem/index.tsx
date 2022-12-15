import Link from 'next/link'
import { ReactElement } from 'react'
import * as TC from './styles'

interface FeatureItemProps {
	icon: any
	title: string
	description: string
	link: string
	mt?: number
}

export const FeatureItem = ({
	icon,
	title,
	description,
	link,
	mt,
}: FeatureItemProps): ReactElement => {
	return (
		<TC.Container mt={mt}>
			<TC.IconWrapper>{icon}</TC.IconWrapper>
			<TC.Title>{title}</TC.Title>
			<TC.Description>{description}</TC.Description>
			<Link href={link}>
				<TC.Icon />
			</Link>
		</TC.Container>
	)
}
