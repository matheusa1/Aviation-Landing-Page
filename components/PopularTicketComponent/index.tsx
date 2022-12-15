import React, { ReactElement } from 'react'
import { CgAirplane } from 'react-icons/cg'
import { SubText } from '../SubText'
import { Title } from '../Title'

import * as TC from './styles'

import AirDelivery from '../../assets/AirDelivery.png'
import BarCode from '../../assets/barCode.png'
import SubtractTicket from '../../assets/subtractTicket.png'
import Image from 'next/image'

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
				<TC.Ticket>
					<TC.TicketTop>
						<TC.TicketHeader>
							<TC.EconomySaver>
								<TC.EconomySaverText>Economy Saver</TC.EconomySaverText>
							</TC.EconomySaver>
							<TC.HeaderLeft>
								UK
								<CgAirplane className='h-6 w-6 text-purplePrimary' />
								BD
							</TC.HeaderLeft>
						</TC.TicketHeader>
						<TC.TicketText>6 Flight Tickets</TC.TicketText>
						<TC.TicketData>
							<TC.TicketDataItem>
								<TC.TicketDataTitle>Passenger</TC.TicketDataTitle>
								<TC.TicketDataInfo>Raju Mullah</TC.TicketDataInfo>
							</TC.TicketDataItem>
							<TC.TicketDataItem>
								<TC.TicketDataTitle>Date</TC.TicketDataTitle>
								<TC.TicketDataInfo>20 Nov 2022</TC.TicketDataInfo>
							</TC.TicketDataItem>
							<TC.TicketDataItem>
								<TC.TicketDataTitle>Flight</TC.TicketDataTitle>
								<TC.TicketDataInfo>#5486626661</TC.TicketDataInfo>
							</TC.TicketDataItem>
							<TC.TicketDataItem>
								<TC.TicketDataTitle>Gate</TC.TicketDataTitle>
								<TC.TicketDataInfo>20 A</TC.TicketDataInfo>
							</TC.TicketDataItem>
							<TC.TicketDataItem>
								<TC.TicketDataTitle>Class</TC.TicketDataTitle>
								<TC.TicketDataInfo>Economy</TC.TicketDataInfo>
							</TC.TicketDataItem>
							<TC.TicketDataItem>
								<TC.TicketDataTitle>Seats</TC.TicketDataTitle>
								<TC.TicketDataInfo>5B - 11B</TC.TicketDataInfo>
							</TC.TicketDataItem>
						</TC.TicketData>
					</TC.TicketTop>
					<TC.TicketBottom>
						<Image
							src={BarCode}
							alt={'BarCode'}
						/>
					</TC.TicketBottom>
					<TC.SubTract
						src={SubtractTicket}
						alt=''
						left={5}
					/>
					<TC.SubTract
						src={SubtractTicket}
						alt=''
						left={10}
					/>
					<TC.SubTract
						src={SubtractTicket}
						alt=''
						left={1}
					/>
				</TC.Ticket>
			</TC.PopularTicketsRight>
		</TC.PopularTicketsWrapper>
	)
}
