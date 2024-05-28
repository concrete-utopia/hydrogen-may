import * as Utopia from 'utopia-api'
import Hero from '/app/routes/_index/sections/hero'
import BestSellers from '/app/routes/_index/sections/best-sellers'
import Collections from '/app/routes/_index/sections/collections'
import FeaturedProducts from '/app/routes/_index/sections/featured-products'
import OurPromise from '/app/routes/_index/sections/our-promise'

const Components = {
  '/app/routes/_index/sections/hero': {
    Hero: {
      component: Hero,
      properties: {},
      inspector: 'hidden',
    },
  },
  '/app/routes/_index/sections/best-sellers': {
    BestSellers: {
      component: BestSellers,
      properties: {},
      inspector: 'hidden',
    },
  },
  '/app/routes/_index/sections/collections': {
    Collections: {
      component: Collections,
      properties: {},
      inspector: 'hidden',
    },
  },
  '/app/routes/_index/sections/featured-products': {
    FeaturedProducts: {
      component: FeaturedProducts,
      properties: {},
      inspector: 'hidden',
    },
  },
  '/app/routes/_index/sections/our-promise': {
    OurPromise: {
      component: OurPromise,
      properties: {},
      inspector: 'hidden',
    },
  },
}

export default Components
