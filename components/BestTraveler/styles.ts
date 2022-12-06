import tw from "tailwind-styled-components"

export const Container = tw.div<any>`
  flex
  flex-col
  items-center
  rounded-full
  shadow-xl

  duration-300

  hover:scale-105
  hover:shadow-2xl
`

export const Bottom = tw.div<any>`
  relative
  h-44

  flex
  flex-col
  justify-end
  py-10
  w-full
  items-center
  rounded-b-full
`

export const Name = tw.span`
  text-2xl
  font-semibold
`

export const Desc = tw.span`
  font-medium
  text-textSubtitle
`
