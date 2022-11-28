import * as TC from "./styles"

interface BookNowOptionsProps {
  icon: any
  title: string
  subTitle: string
}

export const BookNowOptions = ({
  icon,
  title,
  subTitle,
}: BookNowOptionsProps) => {
  return (
    <TC.Container>
      <TC.Icon>{icon}</TC.Icon> 
      <TC.Items>
        <TC.Title>{title}</TC.Title>
        <TC.SubTitle>{subTitle}</TC.SubTitle>
      </TC.Items>
    </TC.Container>
  )
}
