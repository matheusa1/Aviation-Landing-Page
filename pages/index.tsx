import * as TC from "./styles"

import AirplaneImage from "../assets/airplane.svg"
import AviationText from "../assets/AviationText.png"

export default function Home() {
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
    </TC.Container>
  )
}
