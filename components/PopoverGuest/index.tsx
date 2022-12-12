import React, { Dispatch, ReactElement, SetStateAction } from "react"

import * as TC from "./styles"

interface Props {
  setGuestName: Dispatch<SetStateAction<string>>
  guestName: string
}

export const PopoverGuest = ({
  setGuestName,
  guestName
}: Props): ReactElement => {
  return (
    <TC.Container>
      <TC.Input
        value={guestName}
        onChange={e => setGuestName(e.target.value)}
      />
    </TC.Container>
  )
}
