import React, { ReactElement } from 'react'
import { BestTraveler } from '../BestTraveler'
import { Title } from '../Title'

import * as TC from './styles'

import Bg1 from '../../assets/bg1.png'
import Bg2 from '../../assets/bg2.png'
import A1 from '../../assets/a1.png'
import A2 from '../../assets/a2.png'
import A4 from '../../assets/a4.png'

export const BestTravelersComponent = (): ReactElement => {
	return (
		<TC.BestTravelersWrapper>
			<Title text_center={1}>Best Travelers Of This Month</Title>
			<TC.BestTravelers>
				<BestTraveler
					name={'Raju Mullah'}
					desc={'@rajumulllah'}
					bgImage={Bg1}
					avatar={A1}
				/>
				<BestTraveler
					name={'Zaire Vetrovs'}
					desc={'@zairevetrovs'}
					bgImage={Bg2}
					avatar={A2}
				/>
				<BestTraveler
					name={'Marcus Dias'}
					desc={'@marcusdias'}
					bgImage={Bg1}
					avatar={A1}
				/>
				<BestTraveler
					name={'Davis Schleifer'}
					desc={'@davisschleifer'}
					bgImage={Bg2}
					avatar={A4}
				/>
			</TC.BestTravelers>
		</TC.BestTravelersWrapper>
	)
}
