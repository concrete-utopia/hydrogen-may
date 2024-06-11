import {ProductCard} from '@h2/ProductCard';
import {Heading} from '@h2/new/Text';
import {Container, Flex, Grid, Section} from '@h2/new/Layout';

export default function Recommended({
  title = 'You may also like',
  data,
  ...props
}) {
  return (
    <Section padding className="w-screen" {...props}>
      <Container as="header" className="-mb-10">
        <Flex gap="m" direction="down">
          <Heading
            size={9}
            uppercase
            weight="regular"
            wrap="balance"
            className="max-w-2xl"
          >
            {title}
          </Heading>
        </Flex>
      </Container>
      <Grid gap="l" className="swimlane">
        {data.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className="snap-start w-80"
          />
        ))}
      </Grid>
    </Section>
  );
}
