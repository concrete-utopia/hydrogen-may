import {Button} from '@h2/Button';
import Link from '@h2/Link';
import {Price} from '@h2/Price';
import {Heading, Text} from '@h2/Text';
import {Background, Flex, Section} from '@h2/new/Layout';
import {useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export default function Hero() {
  const {product} = useLoaderData();
  const {selectedVariant} = product;
  return (
    <Section className="text-white bg-darkGray">
      <Flex direction="down" justify="between">
        <Flex direction="down" gap={6}>
          <Text>Coming Soon</Text>
          <Heading>
            Builder <span className="font-display">Keyboard</span>
          </Heading>
          <Price variant={selectedVariant} />
        </Flex>
        <Flex direction="down" gap={4}>
          <Button>Pre-order</Button>
          <Text width="narrow">
            See <Link to="/">FAQs</Link> for more details on pre-orders
          </Text>
        </Flex>
      </Flex>
      <Background columns={1}>
        <Image />
      </Background>
    </Section>
  );
}
