import tw from 'tailwind-styled-components'

export const Container = tw.div`
  bg-white
  flex
  flex-col
  gap-4
  items-center
  p-2
  shadow-2xl
  rounded-xl
`

export const Alert = tw.span`
  text-sm
  font-bold
  text-red-500
`
