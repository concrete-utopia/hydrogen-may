import {ProductCard} from '@h2/ProductCard';
import {Heading} from '@h2/Text';
import {Container, Grid, Section} from '@h2/new/Layout';

export default function BestSellers() {
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
          <ProductCard className="col-span-5 col-start-1 row-start-1" />
          <ProductCard className="col-span-3 col-start-7 row-start-3" />
          <ProductCard className="col-span-3 col-start-10 row-start-1" />
          <ProductCard className="col-span-3 col-start-1 row-start-9" />
          <ProductCard className="col-span-3 col-start-5 row-start-7" />
          <ProductCard className="col-span-4 col-start-9 row-start-8" />
        </Grid>
      </Container>
    </Section>
  );
}
