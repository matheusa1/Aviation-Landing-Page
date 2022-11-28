import tw from "tailwind-styled-components"

export const Container = tw.div<any>`
  flex
  items-center
  gap-2
  px-5
  py-2

  rounded-xl

  hover:bg-slate-100
  active:bg-slate-200
`

export const Icon = tw.div<any>`
  p-4
  bg-gray-200
  rounded-full
`

export const Items = tw.div<any>`
  flex
  flex-col
`

export const Title = tw.label<any>`
  font-semibold
  text-lg

  xl:text-base
  lg:text-lg
`
export const SubTitle = tw.label<any>`
  text-gray-400
  font-normal
  xl:text-sm
`
