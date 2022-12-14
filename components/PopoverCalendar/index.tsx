import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import {
	Calendar,
	DayValue,
} from '@hassanmojab/react-modern-calendar-datepicker'

import * as TC from './styles'

interface PopoverCalendarProps {
	day: DayValue
	setDay: Dispatch<SetStateAction<DayValue>>
	minDate?: { year: number; month: number; day: number }
}

export const PopoverCalendar = (props: PopoverCalendarProps): ReactElement => {
	const { day, setDay, minDate } = props

	const min =
		minDate !== undefined
			? { year: minDate.year, month: minDate.month, day: minDate.day }
			: {
					day: new Date().getDate(),
					month: new Date().getMonth() + 1,
					year: new Date().getFullYear(),
			  }

	return (
		<TC.Container>
			<Calendar
				value={day}
				onChange={setDay}
				shouldHighlightWeekends
				minimumDate={{
					year: min.year,
					month: min.month,
					day: min.day,
				}}
			/>
		</TC.Container>
	)
}
