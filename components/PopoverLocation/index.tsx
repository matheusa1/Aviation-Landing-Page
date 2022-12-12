import React, { Dispatch, ReactElement, SetStateAction } from "react"

import * as TC from "./styles"

interface Props {
  airports: {
    id: number
    name: string
  }[]
  setLocation: Dispatch<SetStateAction<string>>
  location: string
}

export const PopoverLocation = ({
  airports,
  setLocation,
  location
}: Props): ReactElement => {
  return (
    <TC.Container>
      <TC.Title>Airports</TC.Title>
      <TC.AirportsList>
        {airports.map(airports => {
          return (
            <TC.AirportItem
              selected={location === airports.name}
              key={airports.id}
              onClick={() => setLocation(airports.name)}>
              <TC.AirportName>{airports.name}</TC.AirportName>
            </TC.AirportItem>
          )
        })}
        <TC.AirportItem onClick={() => setLocation("")}>
          <TC.AirportName>Nenhum</TC.AirportName>
        </TC.AirportItem>
      </TC.AirportsList>
    </TC.Container>
  )
}
