import React, { ReactElement } from 'react'

import * as TC from './styles'

import AirplaneImage from '../../assets/airplane.svg'
import AviationText from '../../assets/AviationText.png'

import Image from 'next/image'
import { SubText } from '../SubText'

export const PresentationComponent = (): ReactElement => {
	return (
		<TC.Presentation>
			<TC.PresentationTop>
				<TC.PresentationText
					alt='Presentation Text'
					src={AviationText}
				/>
				<Image
					alt='Airplane Image'
					src={AirplaneImage}
				/>
			</TC.PresentationTop>
			<TC.Text>Travel Around The World</TC.Text>
			<SubText>
				One of the advantages of being disorganized is that one is always having
				surprising discoveries
			</SubText>
		</TC.Presentation>
	)
}
