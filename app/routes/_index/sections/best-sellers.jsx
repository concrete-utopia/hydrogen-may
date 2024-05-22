import {ProductCard} from '@h2/ProductCard';
import {Heading} from '@h2/Text';
import {Container, Grid, Section} from '@h2/new/Layout';

export default function BestSellers() {
  const product = {
    handle: 'builders-tote',
    title: 'Builders Tote',
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
  };
  return (
    <Section className="py-32">
      <Container as="header">
        <Heading className="flex justify-between w-full -mb-6 uppercase max-w-none text-7xl">
          <span>Best</span>
          <span>Sellers</span>
        </Heading>
      </Container>
      <Container>
        <Grid columns={12} rows={12} className="aspect-[4/6]">
          <ProductCard
            className="col-span-5 col-start-1 row-start-1"
            product={product}
          />
          <ProductCard
            className="col-span-3 col-start-7 row-start-3"
            product={product}
          />
          <ProductCard
            className="col-span-3 col-start-10 row-start-1"
            product={product}
          />
          <ProductCard
            className="col-span-3 col-start-1 row-start-9"
            product={product}
          />
          <ProductCard
            className="col-span-3 col-start-5 row-start-7"
            product={product}
          />
          <ProductCard
            className="col-span-4 col-start-9 row-start-8"
            product={product}
          />
        </Grid>
      </Container>
    </Section>
  );
}
