import Image, { StaticImageData } from "next/image"
import * as TC from "./styles"

interface BestTravelerProps {
  name: string
  desc: string
  bgImage: StaticImageData
  avatar: StaticImageData
}

export const BestTraveler = ({
  name,
  desc,
  bgImage,
  avatar
}: BestTravelerProps) => {
  return (
    <TC.Container>
      <Image
        src={bgImage}
        alt={""}
        priority
      />
      <TC.Bottom>
        <Image
          src={avatar}
          alt={""}
          priority
          className='absolute -top-5 left-1/2 -translate-x-1/2'
        />
        <TC.Name>{name}</TC.Name>
        <TC.Desc>{desc}</TC.Desc>
      </TC.Bottom>
    </TC.Container>
  )
}
