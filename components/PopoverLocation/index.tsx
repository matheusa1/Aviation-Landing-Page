import React, { Dispatch, ReactElement, SetStateAction } from 'react'

import * as TC from './styles'

interface Props {
	airports: {
		id: number
		name: string
		country: string
	}[]
	setLocation: Dispatch<
		SetStateAction<{ id: number; name: string; country: string }>
	>
	location: { id: number; name: string; country: string }
}

interface airport {
	id: number
	name: string
	country: string
}

export const PopoverLocation = ({
	airports,
	setLocation,
	location,
}: Props): ReactElement => {
	return (
		<TC.Container>
			<TC.Title>Airports</TC.Title>
			<TC.AirportsList>
				{airports.map((airport) => {
					return (
						<TC.AirportItem
							selected={location.name === airport.name}
							key={airport.id}
							onClick={() => setLocation(airport)}
						>
							<TC.AirportName>{airport.name}</TC.AirportName>
						</TC.AirportItem>
					)
				})}
				<TC.AirportItem
					onClick={() => setLocation({ id: 0, name: '', country: '' })}
				>
					<TC.AirportName>Nenhum</TC.AirportName>
				</TC.AirportItem>
			</TC.AirportsList>
		</TC.Container>
	)
}
