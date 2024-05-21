import {ProductCard} from '@h2/ProductCard';
import {Heading} from '@h2/Text';
import {Section} from '@h2/new/Layout';

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
    <Section {...props}>
      <Heading>
        You may
        <br />
        also like
      </Heading>
      <div className="swimlane hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12">
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
