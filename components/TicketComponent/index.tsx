import React, { ReactElement, useEffect, useState } from 'react'

import * as TC from './styles'

import BarCode from '../../assets/barCode.png'
import SubtractTicket from '../../assets/subtractTicket.png'

import Image from 'next/image'
import { CgAirplane } from 'react-icons/cg'
import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker'

interface TicketComponentProps {
	startCountry: string
	endCountry: string
	HowManyTicket: number
	Passenger: string
	DateData?: DayValue
	type: string
	subtract?: boolean
	bgWhite: boolean
}

export const TicketComponent = (props: TicketComponentProps): ReactElement => {
	const {
		startCountry,
		endCountry,
		HowManyTicket,
		Passenger,
		DateData,
		type,
		subtract,
		bgWhite,
	} = props

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]

	const letters = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	]

	const now = new Date()

	const [day, setDay] = useState<number>(now.getDate())
	const [month, setMonth] = useState(months[now.getMonth()])
	const [year, setYear] = useState<number>(now.getFullYear())

	const [ticketNumber, setTicketNumber] = React.useState('')
	const [gate, setGate] = React.useState('')
	const [seatNumber, setSeatNumber] = React.useState('')

	const createTicketNumber = () => {
		let temp = ''
		for (let i = 0; i < 10; i++) {
			temp += Math.floor(Math.random() * 10)
		}
		setTicketNumber(temp)
	}

	const createGate = () => {
		let temp = ''
		temp += Math.floor(Math.random() * 20)
		temp += ' '
		temp += letters[Math.floor(Math.random() * 24)]

		setGate(temp)
	}

	const createSeatNumber = () => {
		let temp = ''
		temp += Math.floor(Math.random() * 30)
		temp += letters[Math.floor(Math.random() * 6)]

		setSeatNumber(temp)
	}

	useEffect(() => {
		createTicketNumber()
		createGate()
		createSeatNumber()
		if (DateData) {
			setDay(DateData.day)
			setMonth(months[DateData.month - 1])
			setYear(DateData.year)
		}
	}, [])

	useEffect(() => {
		if (DateData) {
			setDay(DateData.day)
			setMonth(months[DateData.month - 1])
			setYear(DateData.year)
		}
	}, [DateData])

	return (
		<TC.Ticket>
			<TC.TicketTop white={bgWhite}>
				<TC.TicketHeader>
					<TC.EconomySaver>
						<TC.EconomySaverText>{`${type} Saver`}</TC.EconomySaverText>
					</TC.EconomySaver>
					<TC.HeaderLeft>
						{`${startCountry}`}
						<CgAirplane className='h-6 w-6 text-purplePrimary' />
						{`${endCountry}`}
					</TC.HeaderLeft>
				</TC.TicketHeader>
				<TC.TicketText>{`${HowManyTicket} Flight Tickets`}</TC.TicketText>
				<TC.TicketData>
					<TC.TicketDataItem>
						<TC.TicketDataTitle>Passenger</TC.TicketDataTitle>
						<TC.TicketDataInfo>{`${Passenger}`}</TC.TicketDataInfo>
					</TC.TicketDataItem>
					<TC.TicketDataItem>
						<TC.TicketDataTitle>Date</TC.TicketDataTitle>
						<TC.TicketDataInfo>{`${day} ${month} ${year}`}</TC.TicketDataInfo>
					</TC.TicketDataItem>
					<TC.TicketDataItem>
						<TC.TicketDataTitle>Flight</TC.TicketDataTitle>
						<TC.TicketDataInfo>{`#${ticketNumber}`}</TC.TicketDataInfo>
					</TC.TicketDataItem>
					<TC.TicketDataItem>
						<TC.TicketDataTitle>Gate</TC.TicketDataTitle>
						<TC.TicketDataInfo>{`${gate}`}</TC.TicketDataInfo>
					</TC.TicketDataItem>
					<TC.TicketDataItem>
						<TC.TicketDataTitle>Class</TC.TicketDataTitle>
						<TC.TicketDataInfo>{`${type}`}</TC.TicketDataInfo>
					</TC.TicketDataItem>
					<TC.TicketDataItem>
						<TC.TicketDataTitle>Seat</TC.TicketDataTitle>
						<TC.TicketDataInfo>{`${seatNumber}`}</TC.TicketDataInfo>
					</TC.TicketDataItem>
				</TC.TicketData>
			</TC.TicketTop>
			<TC.TicketBottom>
				<Image
					src={BarCode}
					alt={'BarCode'}
				/>
			</TC.TicketBottom>
			{subtract && (
				<>
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
				</>
			)}
		</TC.Ticket>
	)
}
