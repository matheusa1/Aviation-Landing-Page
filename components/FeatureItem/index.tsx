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
}: FeatureItemProps) => {
	return (
		<TC.Container mt={mt}>
			<TC.IconWrapper>{icon}</TC.IconWrapper>
			<TC.Title>{title}</TC.Title>
			<TC.Description>{description}</TC.Description>
			<TC.Button href={link}>
				<TC.Icon />
			</TC.Button>
		</TC.Container>
	)
}
