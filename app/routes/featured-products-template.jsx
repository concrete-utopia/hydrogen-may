import React from 'react'
import { defer, redirect } from '@shopify/remix-oxygen'
import { getSelectedProductOptions } from '@shopify/hydrogen'
import { getVariantUrl } from '~/lib/variants'
import Hero from './products.$handle/sections/hero'
import HighlightDetails from './products.$handle/sections/highlight-details'
import HighlightSolution from './products.$handle/sections/highlight-solution'
import Reviews from './products.$handle/sections/reviews'
import Spotlight from './products.$handle/sections/spotlight'
import Recommended from './products.$handle/sections/recommended'
import Marquee from './products.$handle/sections/marquee'

import { Placeholder, FlexCol } from 'utopia-api'

export const meta = ({ data }) => {
  return [
    { title: `Hydrogen | ${data?.product.title ?? ''}` },
  ]
}

export async function loader({ request, context }) {
  const { storefront } = context

  const { product } = await storefront.query(
    PRODUCT_QUERY,
    {
      variables: {
        handle: 'builders-tote',
        selectedOptions: getSelectedProductOptions(request),
      },
    },
  )

  if (!product?.id) {
    throw new Response(null, { status: 404 })
  }

  // TODO: Package up all this stuff into a utility function
  // setDefaultSelectedVariant(product, 'first'); Also handle "available" for first available variant as well
  const firstVariant = product.variants.nodes[0]
  const firstVariantIsDefault = Boolean(
    firstVariant.selectedOptions.find(
      (option) =>
        option.name === 'Title' &&
        option.value === 'Default Title',
    ),
  )

  if (firstVariantIsDefault) {
    product.selectedVariant = firstVariant
  } else {
    if (!product.selectedVariant) {
      throw function ({ product, request }) {
        const url = new URL(request.url)
        const firstVariant = product.variants.nodes[0]

        return redirect(
          getVariantUrl({
            pathname: url.pathname,
            handle: product.handle,
            selectedOptions: firstVariant.selectedOptions,
            searchParams: new URLSearchParams(url.search),
          }),
          {
            status: 302,
          },
        )
      }
    }
  }
  // END TODO

  const variants = storefront.query(VARIANTS_QUERY, {
    variables: { handle: 'builders-tote' },
  })

  return defer({ product, variants })
}

export default function Product() {
  return (
    <FlexCol
      style={{ gap: 24, padding: '16px 16px 16px 16px' }}
    >
      <h1 style={{ fontSize: 24, fontWeight: 800 }}>
        Featured Product
      </h1>
      <Placeholder padded />
    </FlexCol>
  )
}

/***********************
 * DATA
 ***********************/

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    description
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`

const PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`

const VARIANTS_QUERY = `#graphql
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
  ${PRODUCT_VARIANTS_FRAGMENT}
`

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@remix-run/react').FetcherWithComponents} FetcherWithComponents */
/** @typedef {import('storefrontapi.generated').ProductFragment} ProductFragment */
/** @typedef {import('storefrontapi.generated').ProductVariantsQuery} ProductVariantsQuery */
/** @typedef {import('storefrontapi.generated').ProductVariantFragment} ProductVariantFragment */
/** @typedef {import('@shopify/hydrogen').VariantOption} VariantOption */
/** @typedef {import('@shopify/hydrogen/storefront-api-types').CartLineInput} CartLineInput */
/** @typedef {import('@shopify/hydrogen/storefront-api-types').SelectedOption} SelectedOption */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
