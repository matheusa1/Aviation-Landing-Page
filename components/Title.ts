import tw from 'tailwind-styled-components'

interface TitleProps {
	text_center?: 1 | 0
	color?: 'black' | string
	text_size?: 1 | 0
}

export const Title = tw.h1<TitleProps>`
  font-bold

  ${({ text_size }) => (text_size ? `text-[40px]` : 'text-[2.5rem]')}
  ${({ text_center }) => text_center && 'text-center'}
  ${({ color }) => color && `text-${color}`}
`
