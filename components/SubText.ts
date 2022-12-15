import tw from 'tailwind-styled-components'

interface SubTextProps {
	text_center?: 1 | 0
	text_size?: 1 | 0
}

export const SubText = tw.span<SubTextProps>`
  text-[rgba(255,255,255,0.7)]
  font-inter
  font-normal

  ${({ text_center }) => text_center && 'text-center'}
  ${({ text_size }) => (text_size ? 'text-base' : 'text-xs')}
  md:text-center
`
