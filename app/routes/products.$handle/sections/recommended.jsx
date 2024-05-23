import {ProductCard} from '@h2/ProductCard';
import {Heading, Text} from '@h2/new/Text';
import {Container, Flex, Grid, Section} from '@h2/new/Layout';

const mockProducts = {
  nodes: new Array(12).fill(''),
};

export default function Recommended({
  title = 'Featured Products',
  products = mockProducts,
  count = 12,
  ...props
}) {
  return (
    <Section padding className="w-screen" {...props}>
      <Container as="header" py={9} className="-mb-28">
        <Flex gap={4} direction="down">
          <Heading size={9} uppercase weight="regular" wrap="balance">
            You may also like
          </Heading>
        </Flex>
      </Container>
      <Grid gap={8} className="swimlane">
        {products.nodes.map((product) => (
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
