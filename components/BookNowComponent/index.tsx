import * as Popover from '@radix-ui/react-popover'
import React, { ReactElement, useState } from 'react'
import { BsPeople } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { HiOutlineCalendar } from 'react-icons/hi'
import { BookNowOptions } from '../BookNowOptions'
import { Button } from '../Button/styles'
import { PopoverCalendar } from '../PopoverCalendar'
import { PopoverGuest } from '../PopoverGuest'
import { PopoverLocation } from '../PopoverLocation'

import Data from '../../public/dataTemplate/data.json'

import * as TC from './styles'
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css'
import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker'

export const BookNowComponent = (): ReactElement => {
	const [bookNowOption, setBookNowOption] = useState(0)
	const [location, setLocation] = useState('')
	const [guestName, setGuestName] = useState('')
	const [dayIn, setDayIn] = useState<DayValue>()
	const [dayOut, setDayOut] = useState<DayValue>()

	return (
		<TC.BookNowWrapper>
			<TC.BookNowOptions>
				<TC.BookNowOption
					onClick={() => setBookNowOption(0)}
					active={bookNowOption === 0 ? 1 : 0}
				>
					Economy
				</TC.BookNowOption>
				<TC.BookNowOption
					onClick={() => setBookNowOption(1)}
					active={bookNowOption === 1 ? 1 : 0}
				>
					Business
				</TC.BookNowOption>
				<TC.BookNowOption
					onClick={() => setBookNowOption(2)}
					active={bookNowOption === 2 ? 1 : 0}
				>
					First
				</TC.BookNowOption>
			</TC.BookNowOptions>
			<TC.BookNowContent>
				<TC.BookNowTop>
					<Popover.Root>
						<Popover.Trigger>
							<BookNowOptions
								icon={<GoLocation className='h-6 w-6' />}
								title={'Location'}
								subTitle={location === '' ? 'Where are you going?' : location}
							/>
						</Popover.Trigger>
						<Popover.Portal>
							<Popover.Content>
								<PopoverLocation
									location={location}
									airports={Data.airports}
									setLocation={setLocation}
								/>
							</Popover.Content>
						</Popover.Portal>
					</Popover.Root>
					<Popover.Root>
						<Popover.Trigger>
							<BookNowOptions
								icon={<BsPeople className='h-6 w-6' />}
								title={'Travelers'}
								subTitle={guestName == '' ? 'Add Guest' : guestName}
							/>
						</Popover.Trigger>
						<Popover.Portal>
							<Popover.Content>
								<PopoverGuest
									setGuestName={setGuestName}
									guestName={guestName}
								/>
							</Popover.Content>
						</Popover.Portal>
					</Popover.Root>
					<Popover.Root>
						<Popover.Trigger>
							<BookNowOptions
								icon={<HiOutlineCalendar className='h-6 w-6' />}
								title={'Check-in'}
								subTitle={
									dayIn === undefined
										? 'Add date'
										: `${dayIn?.day}/${dayIn?.month}/${dayIn?.year}`
								}
							/>
						</Popover.Trigger>
						<Popover.Portal>
							<Popover.Content>
								<PopoverCalendar
									day={dayIn}
									setDay={setDayIn}
									dayInSelected
								/>
							</Popover.Content>
						</Popover.Portal>
					</Popover.Root>
					<Popover.Root>
						<Popover.Trigger>
							<BookNowOptions
								icon={<HiOutlineCalendar className='h-6 w-6' />}
								title={'Check-out'}
								subTitle={
									dayOut === undefined
										? 'Add date'
										: `${dayOut?.day}/${dayOut?.month}/${dayOut?.year}`
								}
							/>
						</Popover.Trigger>
						<Popover.Portal>
							<Popover.Content>
								<PopoverCalendar
									day={dayOut}
									setDay={setDayOut}
									minDate={dayIn ? dayIn : undefined}
									dayInSelected={dayIn ? true : false}
								/>
							</Popover.Content>
						</Popover.Portal>
					</Popover.Root>
				</TC.BookNowTop>
				<Button
					px={10}
					py={4}
					shadow={1}
				>
					Book Now
				</Button>
			</TC.BookNowContent>
		</TC.BookNowWrapper>
	)
}
