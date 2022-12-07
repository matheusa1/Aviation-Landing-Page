import { useState } from "react"

import * as TC from "../styles/styles"

import AirplaneImage from "../assets/airplane.svg"
import AviationText from "../assets/AviationText.png"
import PicturesImage from "../assets/picturesImage.png"
import AirDelivery from "../assets/AirDelivery.png"
import BarCode from "../assets/barCode.png"
import SubtractTicket from "../assets/subtractTicket.png"
import Bg1 from "../assets/bg1.png"
import Bg2 from "../assets/bg2.png"
import A1 from "../assets/a1.png"
import A2 from "../assets/a2.png"
import A4 from "../assets/a4.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"

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
import { BestTraveler } from "../components/BestTraveler"

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
            mt={1}
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
            mt={1}
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
          <TC.Title textcenter={1}>
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
            textsize={1}
            textcenter={1}
            color="white">
            Book Popular Flight Tickets
          </TC.Title>
          <TC.SubText
            textsize={1}
            textcenter={1}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s
          </TC.SubText>
          <Image
            src={AirDelivery}
            alt=""
            className="shrink-0"
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
              <TC.TicketData>
                <TC.TicketDataItem>
                  <TC.TicketDataTitle>Passenger</TC.TicketDataTitle>
                  <TC.TicketDataInfo>Raju Mullah</TC.TicketDataInfo>
                </TC.TicketDataItem>
                <TC.TicketDataItem>
                  <TC.TicketDataTitle>Date</TC.TicketDataTitle>
                  <TC.TicketDataInfo>20 Nov 2022</TC.TicketDataInfo>
                </TC.TicketDataItem>
                <TC.TicketDataItem>
                  <TC.TicketDataTitle>Flight</TC.TicketDataTitle>
                  <TC.TicketDataInfo>#5486626661</TC.TicketDataInfo>
                </TC.TicketDataItem>
                <TC.TicketDataItem>
                  <TC.TicketDataTitle>Gate</TC.TicketDataTitle>
                  <TC.TicketDataInfo>20 A</TC.TicketDataInfo>
                </TC.TicketDataItem>
                <TC.TicketDataItem>
                  <TC.TicketDataTitle>Class</TC.TicketDataTitle>
                  <TC.TicketDataInfo>Economy</TC.TicketDataInfo>
                </TC.TicketDataItem>
                <TC.TicketDataItem>
                  <TC.TicketDataTitle>Seats</TC.TicketDataTitle>
                  <TC.TicketDataInfo>5B - 11B</TC.TicketDataInfo>
                </TC.TicketDataItem>
              </TC.TicketData>
            </TC.TicketTop>
            <TC.TicketBottom>
              <Image
                src={BarCode}
                alt={"BarCode"}
              />
            </TC.TicketBottom>
            <TC.SubTract
              src={SubtractTicket}
              alt=""
              left={5}
            />
            <TC.SubTract
              src={SubtractTicket}
              alt=""
              left={10}
            />
            <TC.SubTract
              src={SubtractTicket}
              alt=""
              left={1}
            />
          </TC.Ticket>
        </TC.PopularTicketsRight>
      </TC.PopularTicketsWrapper>

      <TC.BestTravelersWrapper>
        <TC.Title textcenter>Best Travelers Of This Month</TC.Title>
        <TC.BestTravelers>
          <BestTraveler
            name={"Raju Mullah"}
            desc={"@rajumulllah"}
            bgImage={Bg1}
            avatar={A1}
          />
          <BestTraveler
            name={"Zaire Vetrovs"}
            desc={"@zairevetrovs"}
            bgImage={Bg2}
            avatar={A2}
          />
          <BestTraveler
            name={"Marcus Dias"}
            desc={"@marcusdias"}
            bgImage={Bg1}
            avatar={A1}
          />
          <BestTraveler
            name={"Davis Schleifer"}
            desc={"@davisschleifer"}
            bgImage={Bg2}
            avatar={A4}
          />
        </TC.BestTravelers>
      </TC.BestTravelersWrapper>

      <TC.MakeMemoriesWrapper>
        <TC.Title textcenter={1}>Make memories with us</TC.Title>
        <TC.Features>
          <TC.MakeMemoriesImage
            src={img1}
            alt={""}
          />
          <TC.MakeMemoriesImage
            src={img2}
            alt={""}
            mt={1}
          />
          <TC.MakeMemoriesImage
            src={img3}
            alt={""}
          />
          <TC.MakeMemoriesImage
            src={img4}
            alt={""}
            mt={1}
          />
        </TC.Features>
      </TC.MakeMemoriesWrapper>
    </TC.Container>
  )
}
