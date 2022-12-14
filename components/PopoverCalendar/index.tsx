import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import { Calendar, DayValue } from 'react-modern-calendar-datepicker'

import * as TC from './styles'

interface PopoverCalendarProps {
	day: DayValue
	setDay: Dispatch<SetStateAction<DayValue>>
}

export const PopoverCalendar = (props: PopoverCalendarProps): ReactElement => {
	const { day, setDay } = props
	return (
		<TC.Container>
			<Calendar
				value={day}
				onChange={setDay}
				shouldHighlightWeekends
			/>
		</TC.Container>
	)
}
