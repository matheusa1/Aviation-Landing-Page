import tw from "tailwind-styled-components"

import Image from "next/image"

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import Link from "next/link"

export const Container = tw.div<any>`
  bg-mapFooter
  px-28
  pt-24
  pb-7
  flex
  flex-col

  transition-all
  duration-500

  xl:px-20
  xs:px-10
`

export const TopSide = tw.div<any>`
  flex
  pb-10
  border-b-[3px]
  border-b-[rgba(255,255,255,0.1)]
  justify-between

  transition-all
  duration-500

  md:flex-col
  md:items-center
  md:gap-4
`

export const LeftSide = tw.div<any>`
  flex
  flex-col
  gap-6

  transition-all
  duration-500

  max-w-xs
  lg:max-w-[240px]
  md:items-center
  xs:max-w-none
  xs:w-full
`

export const Logo = tw(Image)<any>``

export const Text = tw.span`
  text-textSubtitle
  font-normal

  transition-all
  duration-500

  md:text-center
`

export const Platforms = tw.div<any>`
  flex
  gap-4
`

export const PlatformWrapper = tw(Link)<any>`
  bg-white
  w-10
  h-10
  rounded-full
  flex
  items-center
  justify-center
  cursor-pointer

  hover:opacity-75
  active:bg-purplePrimary
  active:opacity-75
`

export const PlatformFacebook = tw(FaFacebookF)`
  w-5
  h-5
`

export const PlatformLinkedIn = tw(FaLinkedinIn)`
  w-5
  h-5
`

export const PlatformTwitter = tw(FaTwitter)`
  w-5
  h-5
`

export const RightSide = tw.div<any>`
  flex
  gap-52

  transition-all
  duration-500

  xl:gap-28
  lg:gap-14

  xs:flex-col
  xs:gap-6
`

export const Column = tw.div<any>`
  flex
  flex-col
  gap-3
`

export const Title = tw.strong<any>`
  text-white
  text-2xl
  mx-auto
`
export const TextsWrapper = tw.div<any>`
  flex
  flex-col
  gap-3
  items-center
`

export const TextLink = tw(Link)`
  text-textSubtitle
  font-normal
  text-center


  transition-transform
  duration-500
  ease-in-out
  hover:text-white
  hover:scale-110
  active:text-purplePrimary
`

export const BottomSide = tw.div<any>`
transition-all
duration-500

  py-8
  mt-2
  md:mt-0

  text-center
`
export const CopyText = tw.span`
  text-white
`
