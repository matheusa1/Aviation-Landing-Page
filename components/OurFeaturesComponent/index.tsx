import React, { ReactElement } from 'react'
import { BiLockOpenAlt } from 'react-icons/bi'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { RiContactsBookLine } from 'react-icons/ri'
import { TbDiscount2 } from 'react-icons/tb'
import { FeatureItem } from '../FeatureItem'
import { ResponsiveCards } from '../ResponsiveCards'
import { Title } from '../Title'

import * as TC from './styles'

export const OurFeaturesComponent = (): ReactElement => {
	const desc =
		'Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.'
	return (
		<TC.OurFeaturesWrapper>
			<Title>Our Features</Title>
			<ResponsiveCards>
				<FeatureItem
					icon={<RiContactsBookLine className='h-10 w-10' />}
					title={'Best Guide'}
					description={desc}
					link={'/'}
					mt={1}
				/>
				<FeatureItem
					icon={<TbDiscount2 className='h-10 w-10' />}
					title={'More Discount'}
					description={desc}
					link={'/'}
				/>
				<FeatureItem
					icon={<BiLockOpenAlt className='h-10 w-10' />}
					title={'Private'}
					description={desc}
					link={'/'}
					mt={1}
				/>
				<FeatureItem
					icon={<MdOutlineSupportAgent className='h-10 w-10' />}
					title={'Online Support'}
					description={desc}
					link={'/'}
				/>
			</ResponsiveCards>
		</TC.OurFeaturesWrapper>
	)
}
