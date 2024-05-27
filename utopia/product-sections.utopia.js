import * as Utopia from 'utopia-api'
import Hero from '/app/routes/products.$handle/sections/hero'
import HighlightDetails from '/app/routes/products.$handle/sections/highlight-details'
import HighlightSolution from '/app/routes/products.$handle/sections/highlight-solution'
import Recommended from '/app/routes/products.$handle/sections/recommended'
import Reviews from '/app/routes/products.$handle/sections/reviews'
import Spotlight from '/app/routes/products.$handle/sections/spotlight'

const Components = {
  '/app/routes/products.$handle/sections/hero': {
    Hero: {
      component: Hero,
      properties: {},
      inspector: 'hidden',
      focus: 'always',
    },
  },
  '/app/routes/products.$handle/sections/highlight-details':
    {
      HighlightDetails: {
        component: HighlightDetails,
        properties: {},
        inspector: 'hidden',
        focus: 'always',
      },
    },
  '/app/routes/products.$handle/sections/highlight-solution':
    {
      HighlightSolution: {
        component: HighlightSolution,
        properties: {},
        inspector: 'hidden',
        focus: 'always',
      },
    },
  '/app/routes/products.$handle/sections/recommended': {
    Recommended: {
      component: Recommended,
      properties: {},
      inspector: 'hidden',
      focus: 'always',
    },
  },
  '/app/routes/products.$handle/sections/reviews': {
    Reviews: {
      component: Reviews,
      properties: {},
      inspector: 'hidden',
      focus: 'always',
    },
  },
  '/app/routes/products.$handle/sections/spotlight': {
    Spotlight: {
      component: Spotlight,
      properties: {},
      inspector: 'hidden',
      focus: 'always',
    },
  },
}

export default Components
