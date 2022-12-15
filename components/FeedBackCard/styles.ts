import tw from 'tailwind-styled-components'

export const CardWrapper = tw.div`
  w-[500px]
  px-5
  py-8
  gap-6
  flex
  flex-col
  bg-white

  rounded-2xl

  sm:w-[300px]
`

export const CardHeader = tw.div`
  flex
  gap-4
  items-center
`

export const Info = tw.div`
  flex
  flex-col
  gap-2
  w-full
`

export const Name = tw.strong`
  text-xl
`

export const CardBody = tw.div``

export const FeedBack = tw.span`
  italic
`
