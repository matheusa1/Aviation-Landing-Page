import { useState } from "react"

import * as TC from "../styles/styles"

import AirplaneImage from "../assets/airplane.svg"
import AviationText from "../assets/AviationText.png"
import { CiLocationOn } from "react-icons/ci"
import { BsPeople } from "react-icons/bs"
import { HiOutlineCalendar } from "react-icons/hi"
import { RiContactsBookLine } from "react-icons/ri"
import { TbDiscount2 } from "react-icons/tb"
import { BiLockOpenAlt } from "react-icons/bi"
import { MdOutlineSupportAgent } from "react-icons/md"

import { Button } from "../components/Button/styles"
import { BookNowOptions } from "../components/BookNowOptions"
import { FeatureItem } from "../components/FeatureItem"

export default function Home() {
  const [bookNowOption, setBookNowOption] = useState(0)

  const desc =
    "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."

  return (
    <TC.Container>
      <TC.Background />
      <TC.Presentation>
        <TC.PresentationTop>
          <TC.PresentationText
            alt="Presentation Text"
            src={AviationText}
          />
          <TC.AirplaneImage
            alt="Airplane Image"
            src={AirplaneImage}
          />
        </TC.PresentationTop>
        <TC.Text>Travel Around The World</TC.Text>
        <TC.SubText>
          One of the advantages of being disorganized is that one is always
          having surprising discoveries
        </TC.SubText>
      </TC.Presentation>
      <TC.BookNowWrapper>
        <TC.BookNowOptions>
          <TC.BookNowOption
            onClick={() => setBookNowOption(0)}
            active={bookNowOption === 0 ? 1 : 0}>
            Economy
          </TC.BookNowOption>
          <TC.BookNowOption
            onClick={() => setBookNowOption(1)}
            active={bookNowOption === 1 ? 1 : 0}>
            Busniness
          </TC.BookNowOption>
          <TC.BookNowOption
            onClick={() => setBookNowOption(2)}
            active={bookNowOption === 2 ? 1 : 0}>
            First
          </TC.BookNowOption>
        </TC.BookNowOptions>
        <TC.BookNowContent>
          <TC.BookNowTop>
            <BookNowOptions
              icon={<CiLocationOn className="h-6 w-6" />}
              title={"Location"}
              subTitle={"Where are you going?"}
            />
            <BookNowOptions
              icon={<BsPeople className="h-6 w-6" />}
              title={"Travelers"}
              subTitle={"Add Guest"}
            />
            <BookNowOptions
              icon={<HiOutlineCalendar className="h-6 w-6" />}
              title={"Check-in"}
              subTitle={"Add date"}
            />
            <BookNowOptions
              icon={<HiOutlineCalendar className="h-6 w-6" />}
              title={"Check-out"}
              subTitle={"Add date"}
            />
          </TC.BookNowTop>
          <Button
            px={10}
            py={4}
            shadow={1}>
            Book Now
          </Button>
        </TC.BookNowContent>
      </TC.BookNowWrapper>
      <TC.OurFeaturesWrapper>
        <TC.Title>Our Features</TC.Title>
        <TC.Features>
          <FeatureItem
            icon={<RiContactsBookLine className="h-10 w-10" />}
            title={"Best Guide"}
            description={desc}
            link={"/"}
            mt
          />
          <FeatureItem
            icon={<TbDiscount2 className="h-10 w-10" />}
            title={"More Discount"}
            description={desc}
            link={"/"}
          />
          <FeatureItem
            icon={<BiLockOpenAlt className="h-10 w-10" />}
            title={"Private"}
            description={desc}
            link={"/"}
            mt
          />
          <FeatureItem
            icon={<MdOutlineSupportAgent className="h-10 w-10" />}
            title={"Online Support"}
            description={desc}
            link={"/"}
          />
        </TC.Features>
      </TC.OurFeaturesWrapper>
    </TC.Container>
  )
}
