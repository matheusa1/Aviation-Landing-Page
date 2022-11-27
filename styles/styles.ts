import Image from "next/image"
import tw from "tailwind-styled-components"

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

  md:mx-6
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
