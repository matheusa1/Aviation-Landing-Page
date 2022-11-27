import React from "react"
import * as TC from "./styles"
import Logo from "../../assets/logo.svg"

export const Header: React.FC = () => {
  const [buttonSelected, setButtonSelected] = React.useState(0)

  return (
    <TC.Container>
      <TC.LogoWrapper href={"/"}>
        <TC.LogoImage
          src={Logo}
          alt={"sim"}
        />
      </TC.LogoWrapper>
      <TC.RightSide>
        <TC.MenuWrapper>
          <TC.MenuItem
            active={buttonSelected === 0 ? 1 : 0}
            onClick={() => setButtonSelected(0)}>
            <TC.MenuItemTitle>All Flight</TC.MenuItemTitle>
            <TC.IconAllFlights />
          </TC.MenuItem>
          <TC.MenuItem
            active={buttonSelected === 1 ? 1 : 0}
            onClick={() => setButtonSelected(1)}>
            <TC.MenuItemTitle>Schedule</TC.MenuItemTitle>
            <TC.IconSchedule />
          </TC.MenuItem>
          <TC.MenuItem
            active={buttonSelected === 2 ? 1 : 0}
            onClick={() => setButtonSelected(2)}>
            <TC.MenuItemTitle>Passengers</TC.MenuItemTitle>
            <TC.IconPassengers />
          </TC.MenuItem>
          <TC.MenuItem
            active={buttonSelected === 3 ? 1 : 0}
            onClick={() => setButtonSelected(3)}>
            <TC.MenuItemTitle>Your Order</TC.MenuItemTitle>
            <TC.IconYourOrder />
          </TC.MenuItem>
        </TC.MenuWrapper>
        <TC.MenuButton href={"/"}>Let&apos;s Fly</TC.MenuButton>
      </TC.RightSide>
    </TC.Container>
  )
}
