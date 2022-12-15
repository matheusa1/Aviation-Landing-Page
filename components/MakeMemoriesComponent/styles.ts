import Image from 'next/image'
import tw from 'tailwind-styled-components'

interface MakeMemoriesImageProps {
	mt?: number
}

export const MakeMemoriesWrapper = tw.div`
  flex
  flex-col
  gap-10
  px-10

  mb-24
`

export const MakeMemories = tw.div`
  flex
  gap-12
  px-20
  justify-center
`

export const MakeMemoriesImage = tw(Image)<MakeMemoriesImageProps>`  
  w-64
  h-96

  rounded-full

  duration-300

  hover:scale-105
  hover:shadow-2xl

  xl:w-60
  xl:h-80

  
  ${({ mt }) => mt && `mt-12`}
  
  lg:mt-0
  lg:w-64
  lg:h-96

`
