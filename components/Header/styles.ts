import tw from "tailwind-styled-components"

import Image from "next/image"
import Link from "next/link"

import { AiOutlineSchedule } from "react-icons/ai"
import { IoAirplaneOutline, IoTicketOutline } from "react-icons/io5"
import { BsPerson } from "react-icons/bs"

interface MenuItemsProps {
  active: 1 | 0
  onClick?: () => void
}

const div = tw.div<any>`` // temp-fix for tailwind-styled-components bug

export const Container = tw.div<any>`
  flex
  py-5
  px-28
  justify-between
  items-center

  transition-all
  duration-500

  xl:px-20
  lg:px-10

  md:flex-col
  md:gap-3
`

export const LogoWrapper = tw(Link)<any>``

export const LogoImage = tw(Image)<any>`
  w-40
  h-9

  md:w-28
  md:h-6

  transition
  duration-500
  ease-in-out
  hover:scale-110
  cursor:pointer
`

export const RightSide = tw.div<any>`
  text-white
  font-semibold
  flex
  items-center
  justify-center
  gap-12

  transition-all
  duration-500

  lg:gap-6
  mdLg:gap-12
  md:gap-3
  xs:flex-col
`

export const MenuWrapper = tw.div<any>`
  flex
  gap-12

  transition-all
  duration-500

  lg:gap-6
  mdLg:gap-12
  md:gap-6
`

export const MenuItem = tw(div)<MenuItemsProps>`
  h-12
  flex
  items-center
  transition
  duration-500
  ease-in-out
  ${({ active }) =>
    active && "border-b-2 border-purplePrimary text-purplePrimary"}
  ${({ active }) =>
    !active ? "hover:scale-110 cursor-pointer" : "cursor-default"}
`

export const MenuItemTitle = tw.span<any>`
  mdLg:hidden
`

export const IconAllFlights = tw(IoAirplaneOutline)`
  w-10
  h-10
  hidden

  mdLg:inline
`
export const IconSchedule = tw(AiOutlineSchedule)`
  w-10
  h-10
  hidden

  mdLg:inline
`
export const IconPassengers = tw(BsPerson)`
  w-10
  h-10
  hidden

  mdLg:inline
`
export const IconYourOrder = tw(IoTicketOutline)`
  w-10
  h-10
  hidden

  mdLg:inline
// `

export const MenuButton = tw(Link)`
  px-10
  py-2
  flex
  items-center
  justify-center
  border-2
  border-white
  rounded-full

  xs:w-40

  hover:opacity-75

  active:text-purplePrimary
  active:border-purplePrimary
  active:opacity-100
`
