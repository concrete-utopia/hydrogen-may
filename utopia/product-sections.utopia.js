import * as Utopia from 'utopia-api'
import Hero from '/app/routes/products.$handle/sections/hero'
import HighlightDetails from '/app/routes/products.$handle/sections/highlight-details'
import HighlightSolution from '/app/routes/products.$handle/sections/highlight-solution'
import Recommended from '/app/routes/products.$handle/sections/recommended'
import Reviews, {
  Review,
  ReviewStatistics,
} from '/app/routes/products.$handle/sections/reviews'
import Spotlight from '/app/routes/products.$handle/sections/spotlight'

const Components = {
  '/app/routes/products.$handle/sections/hero': {
    Hero: {
      component: Hero,
      properties: {},
      inspector: 'hidden',
    },
  },
  '/app/routes/products.$handle/sections/highlight-details':
    {
      HighlightDetails: {
        component: HighlightDetails,
        properties: {},
        inspector: 'hidden',
      },
    },
  '/app/routes/products.$handle/sections/highlight-solution':
    {
      HighlightSolution: {
        component: HighlightSolution,
        properties: {},
        inspector: 'hidden',
      },
    },
  '/app/routes/products.$handle/sections/recommended': {
    Recommended: {
      component: Recommended,
      properties: {},
      inspector: 'hidden',
    },
  },
  '/app/routes/products.$handle/sections/reviews': {
    Reviews: {
      component: Reviews,
      properties: {},
      inspector: 'hidden',
      focus: 'always',
    },
    Review: {
      component: Review,
      properties: {
        data: Utopia.objectControl({
          quote: Utopia.stringControl(),
          customer: Utopia.stringControl(),
        }),
        background: Utopia.radioControl([
          {
            label: 'white',
            value: 'white',
          },
          {
            label: 'accent',
            value: 'accent',
          },
          {
            label: 'black',
            value: 'black',
          },
        ]),
      },
      inspector: 'hidden',
      variants: [
        {
          label: 'Review with dummy data',
          imports: `import { Review } from '/app/routes/products.$handle/sections/reviews'`,
          code: `<Review data= {{
            id: '1',
            quote:
              'This is a really nice tote bag, perfect size for carry on travel or day trips. I really like that it zips up. Sturdy and the handles don’t slip off your shoulder! I love it.”',
            customer: 'Lynn W.',
          }} />`,
        },
      ],
    },
    ReviewStatistics: {
      component: ReviewStatistics,
      properties: {
        average: Utopia.numberControl(),
        count: Utopia.numberControl(),
      },
      inspector: 'hidden',
      children: 'not-supported',
      variants: [
        {
          label: 'ReviewStatistics',
          imports: `import { ReviewStatistics } from '/app/routes/products.$handle/sections/reviews'`,
          code: `<ReviewStatistics
            average={3.8}
            count={127}
          />`,
        },
      ],
    },
  },
  '/app/routes/products.$handle/sections/spotlight': {
    Spotlight: {
      component: Spotlight,
      properties: {},
      inspector: 'hidden',
    },
  },
}

export default Components
