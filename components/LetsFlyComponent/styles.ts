import tw from 'tailwind-styled-components'

export const LetsFlyWrapper = tw.div`
  flex
  px-20
  mb-24

  items-center

  lg:flex-col
  lg:gap-10
  xsSm:px-10
`

export const LetsFlyLeft = tw.div`
  w-1/2
  flex
  justify-center

  lg:w-full
`

export const LetsFlyRight = tw.div`
  w-1/2
  flex
  flex-col

  items-center

  lg:w-full
`

export const LetsFlyTop = tw.div`
  flex
  w-full
  gap-5
  items-center
  mb-4
`

export const LetsFlyText = tw.span`
  font-black
  text-xl
  text-purplePrimary
  whitespace-nowrap
`

export const DashLine = tw.div`
  w-full
  h-1/2
  border-b-2
  border-dashed
`

export const LetsFlyItems = tw.ul`
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

export const LetsFlyItem = tw.li`
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
