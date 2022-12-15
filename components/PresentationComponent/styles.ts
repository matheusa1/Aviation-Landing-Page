import Image from 'next/image'
import tw from 'tailwind-styled-components'

export const Presentation = tw.div`
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

export const PresentationTop = tw.div`
  relative
  mb-10
`

export const PresentationText = tw(Image)`
  absolute
  mt-5
`

export const Text = tw.div`
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
