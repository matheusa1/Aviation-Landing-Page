import tw from 'tailwind-styled-components'

export const FeedBackWrapper = tw.div`
  flex
  flex-col

  items-center

  px-32
  mb-24

  mdLg:px-14
  xs:px-10
`

export const TextTop = tw.span`
  font-semibold
  text-xl
  text-purplePrimary
  mb-4
`

export const FeedBackBottomSide = tw.div`
  mt-16
  flex
  gap-10
  w-full
  justify-center
  items-center

  xl:flex-col

`

export const FeedBacks = tw.div`
  flex
  mx-auto
  flex-col
  items-center
  gap-12
`

export const FeedBacksText = tw.span`
  text-textSubtitle
`
