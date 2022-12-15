import tw from 'tailwind-styled-components'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

interface ContainerProps {
	mt?: number
}

export const Container = tw.div<ContainerProps>`
  px-7
  py-12
  flex
  flex-col
  items-center
  shadow-custom
  rounded-[180px]
  w-72
  h-fit

  ${({ mt }) => mt === 1 && 'mt-10'}

  duration-500
  hover:shadow-2xl
  hover:scale-110

  xl:w-56
  xl:px-3
  xl-py-6


  lg:mt-0
`

export const IconWrapper = tw.div`
  p-3
  rounded-full
  bg-gray-200
  mb-4
`

export const Title = tw.strong`
  text-2xl
  font-extrabold
  mb-2

  xl:text-xl
`

export const Description = tw.span`
  font-normal
  opacity-65
  text-center
  mb-8
`

export const Icon = tw(BsFillArrowRightCircleFill)`
  w-12
  h-12

  duration-500

  hover:text-purplePrimary
  active:text-activePurplePrimary
`
