import Image from 'next/image'
import tw from 'tailwind-styled-components'

interface SubTractProps {
	left?: number
}

interface TicketTopProps {
	white: boolean
}

export const Ticket = tw.div`
  flex
  flex-col

  w-96
  shrink-0

  relative

  xl:ml-0
  
  xs:w-80
`

export const TicketTop = tw.div<TicketTopProps>`
  bg-white
  p-7
  rounded-t-2xl
  flex
  flex-col
  gap-6
  relative

  border-b-[1px]
  border-textSubtitle
  border-dashed

  before:content-[""]
  before:absolute
  before:w-8
  before:h-8
  before:-bottom-4
  before:-left-4
  before:bg-[#010223]
  before:rounded-full

  after:content-[""]
  after:absolute
  after:w-8
  after:h-8
  after:-bottom-4
  after:-right-4
  after:bg-[#010223]
  after:rounded-full
`
export const TicketHeader = tw.div`
  flex
  justify-between
`

export const EconomySaver = tw.div`
  px-3
  py-2
  bg-[rgba(49,62,247,0.1)]
  rounded-full
`

export const EconomySaverText = tw.span`
  font-medium
  text-purplePrimary
  whitespace-nowrap
  opacity-100
`

export const HeaderLeft = tw.div`
  flex
  font-semibold
  gap-2
  items-center
  justify-center
`

export const TicketText = tw.span`
  font-bold
`

export const TicketData = tw.div`
  grid
  grid-cols-2
  gap-4
`

export const TicketDataItem = tw.div`
  flex
  flex-col
  gap-1
`

export const TicketDataTitle = tw.div`
  font-medium
  text-sm
  text-textSubtitle
`

export const TicketDataInfo = tw.div`
  font-semibold
  text-black
`

export const TicketBottom = tw.div`
  bg-white
  py-7
  px-4
  rounded-b-2xl
`

export const SubTract = tw(Image)<SubTractProps>`
  absolute
  ${({ left }) => {
		if (left === 5) {
			return 'left-5'
		} else if (left === 10) {
			return 'left-10 top-5'
		} else return 'left-14 top-10'
	}}
`
