import Image from "next/image"
import tw from "tailwind-styled-components"

interface BookNowOptionsProps {
  active?: 1 | 0
}

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
export const AirplaneImage = tw(Image)<any>` 
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
export const SubText = tw.div<any>`
  text-[rgba(255,255,255,0.7)]
  text-xs
  font-inter
  font-normal

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

export const Title = tw.div<any>`
  text-[2.5rem]
  font-bold
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
