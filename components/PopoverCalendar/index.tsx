import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import {
	Calendar,
	DayValue,
} from '@hassanmojab/react-modern-calendar-datepicker'

import * as TC from './styles'

interface PopoverCalendarProps {
	day: DayValue
	setDay: Dispatch<SetStateAction<DayValue>>
	minDate?: { year: number; month: number; day: number }
	dayInSelected: boolean
}

export const PopoverCalendar = (props: PopoverCalendarProps): ReactElement => {
	const { day, setDay, minDate, dayInSelected } = props
	const [alert, setAlert] = useState(false)

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
			{alert && <TC.Alert>Select Check-In first please</TC.Alert>}
			<Calendar
				value={day}
				onChange={dayInSelected ? setDay : () => setAlert(true)}
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
