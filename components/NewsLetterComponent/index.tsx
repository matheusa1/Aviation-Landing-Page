import React, { ReactElement } from 'react'
import { Title } from '../Title'

import * as TC from './styles'

export const NewsLetterComponent = (): ReactElement => {
	return (
		<TC.NewsLetterWrapper>
			<Title text_center={1}>Subscribe Newsletter & get letest news</Title>
			<TC.InputWrapper>
				<TC.Input
					type='text'
					placeholder='Enter your email address'
				/>
				<TC.InputButton
					px={4}
					py={2}
				>
					Subscribe
				</TC.InputButton>
			</TC.InputWrapper>
		</TC.NewsLetterWrapper>
	)
}
