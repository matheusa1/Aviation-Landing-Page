import tw from 'tailwind-styled-components'
import { Button } from '../Button/styles'

export const NewsLetterWrapper = tw.div`
  bg-[rgba(49,62,247,0.05)]
  px-[450px]
  py-24
  flex
  flex-col
  gap-10

  items-center

  xl:px-60
  lg:px-40

  md:px-10
`

export const InputWrapper = tw.div`
  relative
  
  sm:w-full
`

export const Input = tw.input`
  px-6
  py-5
  rounded-full
  w-[500px]
  outline-0

  text-xl

  sm:w-full
  sm:text-base
`

export const InputButton = tw(Button)`
  absolute
  top-1/2
  translate-y-[-50%]
  right-3
`
