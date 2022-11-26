import React from "react"
import * as TC from "./styles"

import Logo from "../../assets/logo.svg"

export const Footer: React.FC = () => {
  return (
    <TC.Container>
      <TC.TopSide>
        <TC.LeftSide>
          <TC.Logo
            src={Logo}
            alt="Logo"
          />
          <TC.Text>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </TC.Text>
          <TC.Platforms>
            <TC.PlatformWrapper href={"/"}>
              <TC.PlatformFacebook />
            </TC.PlatformWrapper>
            <TC.PlatformWrapper href={"/"}>
              <TC.PlatformLinkedIn />
            </TC.PlatformWrapper>
            <TC.PlatformWrapper href={"/"}>
              <TC.PlatformTwitter />
            </TC.PlatformWrapper>
          </TC.Platforms>
        </TC.LeftSide>
        <TC.RightSide>
          <TC.Column>
            <TC.Title>Address</TC.Title>
            <TC.TextsWrapper>
              <TC.TextLink href={"/"}>Integrations</TC.TextLink>
              <TC.TextLink href={"/"}>Hello</TC.TextLink>
              <TC.TextLink href={"/"}>Intercom</TC.TextLink>
              <TC.TextLink href={"/"}>Customer</TC.TextLink>
            </TC.TextsWrapper>
          </TC.Column>
          <TC.Column>
            <TC.Title>About</TC.Title>
            <TC.TextsWrapper>
              <TC.TextLink href={"/"}>Our Blog</TC.TextLink>
              <TC.TextLink href={"/"}>Customers</TC.TextLink>
              <TC.TextLink href={"/"}>Our Team</TC.TextLink>
              <TC.TextLink href={"/"}>Carrers</TC.TextLink>
              <TC.TextLink href={"/"}>Integrations</TC.TextLink>
            </TC.TextsWrapper>
          </TC.Column>
          <TC.Column>
            <TC.Title>Support</TC.Title>
            <TC.TextsWrapper>
              <TC.TextLink href={"/"}>Test Zoom</TC.TextLink>
              <TC.TextLink href={"/"}>Account</TC.TextLink>
              <TC.TextLink href={"/"}>Support Center</TC.TextLink>
              <TC.TextLink href={"/"}>Live Training</TC.TextLink>
              <TC.TextLink href={"/"}>Accessibility</TC.TextLink>
            </TC.TextsWrapper>
          </TC.Column>
        </TC.RightSide>
      </TC.TopSide>
      <TC.BottomSide>
        <TC.CopyText>
          Copyright © 2022 FT PLANE 2022 All right reserved
        </TC.CopyText>
      </TC.BottomSide>
    </TC.Container>
  )
}
