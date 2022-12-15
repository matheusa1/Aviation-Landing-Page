import React, { ReactElement } from 'react'
import { Title } from '../Title'

import * as TC from './styles'

import PicturesImage from '../../assets/picturesImage.png'
import { Button } from '../Button/styles'
import Image from 'next/image'

export const LetsFlyComponent = (): ReactElement => {
	return (
		<TC.LetsFlyWrapper>
			<TC.LetsFlyLeft>
				<Image
					src={PicturesImage}
					alt={''}
				/>
			</TC.LetsFlyLeft>
			<TC.LetsFlyRight>
				<TC.LetsFlyTop>
					<TC.LetsFlyText>Lets Fly</TC.LetsFlyText> <TC.DashLine />
				</TC.LetsFlyTop>
				<Title text_center={1}>
					It&apos;s one of the leading online flight booking platforms in the
					world
				</Title>
				<TC.LetsFlyItems>
					<TC.LetsFlyItem>
						Contrary to popular belief, Lorem Ipsum is not simply random text
					</TC.LetsFlyItem>
					<TC.LetsFlyItem>
						If you are going to use a passage of Lorem Ipsum
					</TC.LetsFlyItem>
					<TC.LetsFlyItem>
						Lorem Ipsum is therefore always free from repetition, injected
						humour, or non-characteristic words etc.
					</TC.LetsFlyItem>
					<TC.LetsFlyItem>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout.
					</TC.LetsFlyItem>
				</TC.LetsFlyItems>
				<Button
					px={10}
					py={4}
					shadow={1}
				>
					Book Now
				</Button>
			</TC.LetsFlyRight>
		</TC.LetsFlyWrapper>
	)
}
