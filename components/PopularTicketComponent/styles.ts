import tw from 'tailwind-styled-components'

export const PopularTicketsWrapper = tw.div`
  flex
  items-center
  justify-center
  pt-12
  pb-24
  px-40
  bg-[#010223]



  xl:flex-col
  xl:gap-10
  mdLg:px-20
  xs:px-10
`

export const PopularTicketsLeft = tw.div`
  flex
  flex-col
  gap-6
  w-1/2

  xl:w-full
  xl:items-center
`

export const PopularTicketsRight = tw.div`
  
  flex
  justify-center
  ml-24 
  xl:ml-0
`
