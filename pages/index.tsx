import { useState } from "react"

import * as TC from "../styles/styles"

import AirplaneImage from "../assets/airplane.svg"
import AviationText from "../assets/AviationText.png"
import PicturesImage from "../assets/picturesImage.png"
import AirDelivery from "../assets/AirDelivery.png"

import { CiLocationOn } from "react-icons/ci"
import { BsPeople } from "react-icons/bs"
import { HiOutlineCalendar } from "react-icons/hi"
import { RiContactsBookLine } from "react-icons/ri"
import { TbDiscount2 } from "react-icons/tb"
import { BiLockOpenAlt } from "react-icons/bi"
import { MdOutlineSupportAgent } from "react-icons/md"
import { CgAirplane } from "react-icons/cg"

import { Button } from "../components/Button/styles"
import { BookNowOptions } from "../components/BookNowOptions"
import { FeatureItem } from "../components/FeatureItem"
import Image from "next/image"

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
          <Image
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
            Business
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

      <TC.LetsFlyWrapper>
        <TC.LetsFlyLeft>
          <TC.Img
            src={PicturesImage}
            alt={""}
          />
        </TC.LetsFlyLeft>
        <TC.LetsFlyRight>
          <TC.LetsFlyTop>
            <TC.LetsFlyText>Lets Fly</TC.LetsFlyText> <TC.DashLine />
          </TC.LetsFlyTop>
          <TC.Title textCenter>
            It’s one of the leading online flight booking platforms in the world
          </TC.Title>
          <TC.LetsFlyItems>
            <TC.LetsFlyItem>
              Contrary to popular belief, Lorem Ipsum is not simply random text
            </TC.LetsFlyItem>
            <TC.LetsFlyItem>
              If you are going to use a passage of Lorem Ipsum
            </TC.LetsFlyItem>
            <TC.LetsFlyItem>
              Lorem Ipsum is therefore always free from repetition, injected
              humour, or non-characteristic words etc.
            </TC.LetsFlyItem>
            <TC.LetsFlyItem>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </TC.LetsFlyItem>
          </TC.LetsFlyItems>
          <Button
            px={10}
            py={4}
            shadow={1}>
            Book Now
          </Button>
        </TC.LetsFlyRight>
      </TC.LetsFlyWrapper>

      <TC.PopularTicketsWrapper>
        <TC.PopularTicketsLeft>
          <TC.Title
            textSize
            color="white">
            Book Popular Flight Tickets
          </TC.Title>
          <TC.SubText textSize>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s
          </TC.SubText>
          <Image
            src={AirDelivery}
            alt=""
          />
        </TC.PopularTicketsLeft>
        <TC.PopularTicketsRight>
          <TC.Ticket>
            <TC.TicketTop>
              <TC.TicketHeader>
                <TC.EconomySaver>
                  <TC.EconomySaverText>Economy Saver</TC.EconomySaverText>
                </TC.EconomySaver>
                <TC.HeaderLeft>
                  UK
                  <CgAirplane className="h-6 w-6 text-purplePrimary" />
                  BD
                </TC.HeaderLeft>
              </TC.TicketHeader>
              <TC.TicketText>6 Flight Tickets</TC.TicketText>
            </TC.TicketTop>
            <TC.TicketBottom></TC.TicketBottom>
          </TC.Ticket>
        </TC.PopularTicketsRight>
      </TC.PopularTicketsWrapper>
    </TC.Container>
  )
}
