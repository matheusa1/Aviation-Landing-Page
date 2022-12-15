import tw from 'tailwind-styled-components'

interface BookNowOptionsProps {
	active?: 1 | 0
}

export const BookNowWrapper = tw.div`
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

export const BookNowOptions = tw.div`
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
			? 'bg-purplePrimary text-white border-purplePrimary cursor-default'
			: 'bg-white border-[#F3F4F6]  cursor-pointer hover:bg-slate-200 '}
  sm:w-full
`

export const BookNowContent = tw.div`
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

export const BookNowTop = tw.div`
  w-full
  grid
  grid-cols-4

  transition-all
  duration-500

  lg:grid-cols-1
  lg:w-fit
`

export const Alert = tw.span`
  text-red-500
  text-sm
  font-bold
`

export const ResultTicketsWrapper = tw.div`
  flex
  items-center
  justify-center
  mt-8
  p-4
  bg-[#010223]

  rounded-2xl
  w-fit
  self-center

  gap-10

  lg:flex-col
`
