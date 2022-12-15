import React, { ReactElement } from 'react'
import { ResponsiveCards } from '../ResponsiveCards'
import { Title } from '../Title'

import * as TC from './styles'

import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

export const MakeMemoriesComponent = (): ReactElement => {
	return (
		<TC.MakeMemoriesWrapper>
			<Title text_center={1}>Make memories with us</Title>
			<ResponsiveCards>
				<TC.MakeMemoriesImage
					src={img1}
					alt={''}
				/>
				<TC.MakeMemoriesImage
					src={img2}
					alt={''}
					mt={1}
				/>
				<TC.MakeMemoriesImage
					src={img3}
					alt={''}
				/>
				<TC.MakeMemoriesImage
					src={img4}
					alt={''}
					mt={1}
				/>
			</ResponsiveCards>
		</TC.MakeMemoriesWrapper>
	)
}
