import tw from "tailwind-styled-components"

interface ButtonProps {
  px?: number
  py?: number
  shadow?: 1 | 0
}

export const Button = tw.button<ButtonProps>`
  bg-purplePrimary
  text-white
  rounded-full
  font-semibold

  hover:bg-hoverPurplePrimary
  active:bg-activePurplePrimary

  drop-shadow-custom

  ${({ px }) => (px ? `px-${px}` : "")}
  ${({ py }) => (py ? `py-${py}` : "")}
`
