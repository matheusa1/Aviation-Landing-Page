import Image from "next/image"
import tw from "tailwind-styled-components"

interface BookNowOptionsProps {
  active?: 1 | 0
}

interface TitleProps {
  textCenter?: boolean
  color?: "black" | string
  textSize?: boolean
}

interface SubTextProps {
  textSize?: boolean
}

const div = tw.div<any>``

export const Container = tw.div<any>`
  flex
  flex-col
`

export const Background = tw.div`
  bg-gradientPage
  absolute
  top-0
  left-0
  w-full
  h-screen
  -z-50
`
export const Presentation = tw.div<any>`
  relative
  flex
  flex-col
  items-center
  mx-12
  my-10
  py-5
  before:content-[""]
  before:bg-mapFooter
  before:w-full
  before:h-full
  before:absolute
  before:top-0
  before:left-0
  before:-z-10
  before:opacity-60

  transition-all
  duration-500

  xl:mx-6
`

export const PresentationTop = tw.div<any>`
  relative
  mb-10
`

export const PresentationText = tw(Image)<any>`
  absolute
  mt-5
`

export const Text = tw.div<any>`
  text-white
  font-bold
  text-5xl
  capitalize
  mb-2

  transition-all
  duration-500

  md:text-3xl
  xs:text-xl
`
export const SubText = tw.div<SubTextProps>`
  text-[rgba(255,255,255,0.7)]
  font-inter
  font-normal

  ${({ textSize }) => (textSize ? "text-base" : "text-xs")}
  md:text-center
`

export const BookNowWrapper = tw.div<any>`
  flex
  flex-col
  mx-[7.5rem]
  drop-shadow-2xl
  mb-28

  transition-all
  duration-500

  lg:mx-auto
  sm:mx-12
`

export const BookNowOptions = tw.div<any>`
  w-fit
  flex
  rounded-t-2xl
  overflow-hidden

  transition-all
  duration-500

  sm:w-full
  xs:flex-col
`

export const BookNowOption = tw.div<BookNowOptionsProps>`
  py-4
  w-[11rem]
  flex
  justify-center
  items-center
  font-bold
  text-lg

  duration-500
  transition-colors

  border-[1px]
  ${({ active }) =>
    active
      ? "bg-purplePrimary text-white border-purplePrimary cursor-default"
      : "bg-white border-[#F3F4F6]  cursor-pointer hover:bg-slate-200 "}
  sm:w-full
`

export const BookNowContent = tw.div<any>`
  bg-white
  py-10
  px-16
  rounded-tr-2xl
  rounded-b-2xl
  flex
  flex-col
  items-center
  gap-6

  xl:px-2
  lg:rounded-t-none
`

export const BookNowTop = tw.div<any>`
  flex
  justify-between
  w-full

  transition-all
  duration-500

  lg:flex-col
  lg:w-fit
`
export const OurFeaturesWrapper = tw.div<any>`
  flex
  flex-col
  items-center
  w-fit
  mx-auto
  gap-10
  mb-24
`

export const Title = tw.h1<TitleProps>`
  font-bold

  ${({ textSize }) => (textSize ? `text-[40px]` : "text-[2.5rem]")}
  ${({ textCenter }) => textCenter && "text-center"}
  ${({ color }) => color && `text-${color}`}
`

export const Features = tw.div<any>`
  flex
  gap-6
  mx-auto

  transition-all
  duration-500

  lg:grid
  lg:grid-cols-2
  lg-gap-3

  xsSm:flex
  xsSm:flex-col
`

export const LetsFlyWrapper = tw.div<any>`
  flex
  px-20
  mb-24

  items-center

  lg:flex-col
  lg:gap-10
  xsSm:px-10
`

export const LetsFlyLeft = tw.div<any>`
  w-1/2
  flex
  justify-center

  lg:w-full
`

export const Img = tw(Image)`
  min-width-[556px]
  max-h-[461px]
`

export const LetsFlyRight = tw.div<any>`
  w-1/2
  flex
  flex-col

  items-center

  lg:w-full
`

export const LetsFlyTop = tw.div<any>`
  flex
  w-full
  gap-5
  items-center
  mb-4
`

export const LetsFlyText = tw.span<any>`
  font-black
  text-xl
  text-purplePrimary
  whitespace-nowrap
`

export const DashLine = tw.div<any>`
  w-full
  h-1/2
  border-b-2
  border-dashed
`

export const LetsFlyItems = tw.ul<any>`
  my-10
  flex
  flex-col
  gap-3
  relative

  before:content-[""]
  before:absolute
  before:top-2
  before:left-[3px]
  before:h-[70%]
  before:border-l-2
  before:border-dashed
  2xl:before:h-[80%]
`

export const LetsFlyItem = tw.li<any>`
  font-medium
  relative
  pl-3
  before:content-[""]
  before:absolute
  before:w-2
  before:h-2
  before:bg-purplePrimary
  before:top-1/4
  before:rounded-full
  before:left-0
`
export const PopularTicketsWrapper = tw.div<any>`
  flex
  py-12
  px-40
  bg-[#010223]
`

export const PopularTicketsLeft = tw.div<any>`
  flex
  flex-col
  gap-6
  w-1/2
`

export const PopularTicketsRight = tw.div<any>`
  w-1/2
  flex
`
export const Ticket = tw.div<any>`
  flex
  flex-col

  w-96
  ml-24
`

export const TicketTop = tw.div<any>`
  bg-white
  p-7
  rounded-t-2xl
  flex
  flex-col
  gap-6
`
export const TicketHeader = tw.div<any>`
  flex
  justify-between
`

export const EconomySaver = tw.div<any>`
  px-3
  py-2
  bg-[rgba(49,62,247,0.1)]
  rounded-full
`

export const EconomySaverText = tw.span<any>`
  font-medium
  text-purplePrimary
  whitespace-nowrap
  opacity-100
`

export const HeaderLeft = tw.div<any>`
  flex
  font-semibold
  gap-2
  items-center
  justify-center
`

export const TicketText = tw.span<any>`
  font-bold
`

export const TicketBottom = tw.div<any>`
  bg-white
  py-7
  px-4
  rounded-b-2xl
  h-10
`
