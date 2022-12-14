import Image from 'next/image'
import StarRatings from 'react-star-ratings'

import * as TC from './styles'

interface FeedBackCardProps {
	feedback: string
	name: string
	avatar: string
	rate: number
}

export const FeedBackCard = (props: FeedBackCardProps) => {
	const feedback = props.feedback
	const name = props.name
	const avatar = props.avatar
	const rate = props.rate

	return (
		<TC.CardWrapper>
			<TC.CardHeader>
				<Image
					src={avatar}
					alt={''}
					width={50}
					height={50}
					style={{ width: 'auto', height: 'auto' }}
				/>
				<TC.Info>
					<TC.Name>{name}</TC.Name>
					<StarRatings
						rating={rate}
						starRatedColor='#FFD700'
						starEmptyColor='#9e8600'
						starDimension='1.2rem'
					/>
				</TC.Info>
			</TC.CardHeader>
			<TC.CardBody>
				<TC.FeedBack>{feedback}</TC.FeedBack>
			</TC.CardBody>
		</TC.CardWrapper>
	)
}
