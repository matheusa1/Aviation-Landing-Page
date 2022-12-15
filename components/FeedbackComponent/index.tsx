import Image from 'next/image'
import React, { ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards, Autoplay } from 'swiper'

import { Title } from '../Title'

import Data from '../../public/dataTemplate/data.json'

import * as TC from './styles'
import { FeedBackCard } from '../FeedBackCard'

import MapFeedBack from '../../assets/MapFeedback.png'

export const FeedbackComponent = (): ReactElement => {
	return (
		<TC.FeedBackWrapper>
			<TC.TextTop>What&apos;s our customer saying</TC.TextTop>
			<Title text_center={1}>Our Customer FeedBack</Title>
			<TC.FeedBackBottomSide>
				<Image
					className='mx-auto lg:h-full lg:w-full'
					src={MapFeedBack}
					alt={'FeedBacks Images'}
				/>
				<TC.FeedBacks>
					<Swiper
						effect={'cards'}
						autoplay={{
							delay: 2500,
							disableOnInteraction: true,
						}}
						grabCursor={true}
						modules={[EffectCards, Autoplay]}
						className='mx-auto h-fit w-[500px] sm:w-[300px] '
					>
						{Data.feedbacks.map((item, index) => {
							return (
								<SwiperSlide
									key={index}
									className='flex items-center justify-center rounded-2xl shadow-2xl'
								>
									<FeedBackCard
										feedback={item.feedback}
										name={item.name}
										avatar={item.avatar}
										rate={item.rate}
									/>
								</SwiperSlide>
							)
						})}
					</Swiper>
					<TC.FeedBacksText>Swipe the card &gt;&gt;</TC.FeedBacksText>
				</TC.FeedBacks>
			</TC.FeedBackBottomSide>
		</TC.FeedBackWrapper>
	)
}
