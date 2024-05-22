import {ProductCard} from '@h2/ProductCard';
import {Heading} from '@h2/Text';
import {Container, Section} from '@h2/new/Layout';

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
    <Section padded className="w-screen" {...props}>
      <Container className="pb-16">
        <Heading>
          You may
          <br />
          also like
        </Heading>
      </Container>
      <div className="swimlane">
        {products.nodes.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className="snap-start w-80"
          />
        ))}
      </div>
    </Section>
  );
}
