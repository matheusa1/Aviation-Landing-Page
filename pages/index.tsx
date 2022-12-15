import * as TC from '../styles/styles'

import { PresentationComponent } from '../components/PresentationComponent'
import { BookNowComponent } from '../components/BookNowComponent'
import { OurFeaturesComponent } from '../components/OurFeaturesComponent'
import { LetsFlyComponent } from '../components/LetsFlyComponent'
import { PopularTicketComponent } from '../components/PopularTicketComponent'
import { BestTravelersComponent } from '../components/BestTravelersComponent'
import { FeedbackComponent } from '../components/FeedbackComponent'
import { MakeMemoriesComponent } from '../components/MakeMemoriesComponent'
import { NewsLetterComponent } from '../components/NewsLetterComponent'
import { ReactElement } from 'react'

export default function Home(): ReactElement {
	return (
		<TC.Container>
			<TC.Background />

			<PresentationComponent />

			<BookNowComponent />

			<OurFeaturesComponent />

			<LetsFlyComponent />

			<PopularTicketComponent />

			<BestTravelersComponent />

			<FeedbackComponent />

			<MakeMemoriesComponent />

			<NewsLetterComponent />
		</TC.Container>
	)
}
