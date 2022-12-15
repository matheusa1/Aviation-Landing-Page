import React, { ReactElement } from 'react'
import { SubText } from '../SubText'
import { Title } from '../Title'

import * as TC from './styles'

import AirDelivery from '../../assets/AirDelivery.png'
import Image from 'next/image'
import { TicketComponent } from '../TicketComponent'

export const PopularTicketComponent = (): ReactElement => {
	return (
		<TC.PopularTicketsWrapper>
			<TC.PopularTicketsLeft>
				<Title
					text_size={1}
					text_center={1}
					color='white'
				>
					Book Popular Flight Tickets
				</Title>
				<SubText
					text_size={1}
					text_center={1}
				>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry&apos;s
				</SubText>
				<Image
					src={AirDelivery}
					alt=''
					className='shrink-0'
				/>
			</TC.PopularTicketsLeft>
			<TC.PopularTicketsRight>
				<TicketComponent
					startCountry={'UK'}
					endCountry={'BD'}
					HowManyTicket={1}
					Passenger={'Raju Mullah'}
					type={'Economy'}
					subtract
					bgWhite={false}
				/>
			</TC.PopularTicketsRight>
		</TC.PopularTicketsWrapper>
	)
}
