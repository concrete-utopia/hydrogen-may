import { ProductCard } from '@h2/ProductCard'
import { Heading, Span } from '@h2/new/Text'
import {
  Container,
  Flex,
  Grid,
  Section,
} from '@h2/new/Layout'

export default function BestSellers() {
  const product = {
    handle: 'builder-tote',
    title: 'Builder Tote',
    variants: {
      nodes: [
        {
          availableForSale: true,
          price: {
            amount: '38.00',
            currencyCode: 'CAD',
          },
          compareAtPrice: {
            amount: '42.00',
            currencyCode: 'CAD',
          },
          image: {
            id: 'gid://Shopify/placeholder/1234',
            altText: 'Placeholder',
            height: '600',
            width: '400',
            url: 'https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png',
          },
        },
      ],
    },
  }
  return (
    <Section className='pt-32'>
      <Container
        as='header'
        className='z-20 pointer-events-none'
      >
        <Heading
          weight='regular'
          uppercase
          size={8}
          className='relative -mx-1 -mb-8'
        >
          <Flex as='span' justify='between'>
            <Span font='display'>Best</Span>
            <Span
              font='sans'
              className='-mr-2 scale-95 translate-y-1'
            >
              Sellers
            </Span>
          </Flex>
        </Heading>
      </Container>
      <Container>
        <Grid
          columns={12}
          rows={10}
          gapY='xl'
          gap='l'
          className='aspect-[5/7]'
        >
          <ProductCard
            className='col-span-5 col-start-1 row-start-1 pr-12'
            product={product}
          />
          <ProductCard
            className='col-span-3 col-start-7 row-start-2'
            product={product}
          />
          <ProductCard
            className='col-span-3 col-start-10 row-start-1'
            product={product}
          />
          <ProductCard
            className='col-span-3 col-start-1 row-start-6'
            product={product}
          />
          <ProductCard
            className='col-span-3 col-start-4 row-start-5'
            product={product}
          />
          <ProductCard
            className='col-span-4 col-start-9 row-start-5 mt-8'
            product={product}
          />
        </Grid>
      </Container>
    </Section>
  )
}
