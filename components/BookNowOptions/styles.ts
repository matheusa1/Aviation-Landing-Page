import tw from "tailwind-styled-components"

export const Container = tw.div<any>`
  flex
  items-center
  gap-2
  px-5
  py-2
  cursor-pointer

  w-full

  rounded-xl

  duration-300

  hover:bg-slate-100
  active:bg-slate-200
`

export const Icon = tw.div<any>`
  p-4
  bg-gray-200
  rounded-full
  w-fit
`

export const Items = tw.div<any>`
  flex
  flex-col
  w-full
`

export const Title = tw.span<any>`  
  font-semibold
  text-lg
  text-start

  transition-all
  duration-500

  xl:text-base
  lg:text-lg
`
export const SubTitle = tw.span<any>`
  text-gray-400
  font-normal
  w-full
  text-start
  
  truncate

  xl:text-sm
  pr-7
  xs:pr-12
`
