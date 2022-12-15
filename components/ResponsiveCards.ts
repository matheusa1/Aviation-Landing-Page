import tw from 'tailwind-styled-components'

export const ResponsiveCards = tw.div`
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
