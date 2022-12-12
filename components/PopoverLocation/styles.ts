import tw from "tailwind-styled-components"
import * as Popover from "@radix-ui/react-popover"

interface AirportItemProps {
  selected?: boolean
}

export const Container = tw.div`
  bg-white
  p-4
  rounded-xl
  shadow-2xl

  flex
  flex-col
  gap-4
`

export const Title = tw.strong`
  text-center
`

export const AirportsList = tw.div`
  flex
  flex-col
  gap-2
`

export const AirportItem = tw(Popover.Close)<AirportItemProps>`
  p-2

  rounded-xl
  text-start

  hover:bg-gray-100
  active:bg-gray-200

  ${props => props.selected && "bg-gray-200"}
`

export const AirportName = tw.span`
  xs:text-sm
`
