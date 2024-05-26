import {Button} from '@h2/Button';
import Link from '@h2/Link';
import {Price} from '@h2/Price';
import {Heading, Span, Text} from '@h2/new/Text';
import {Background, Container, Flex, Section} from '@h2/new/Layout';
import {useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export default function Hero() {
  const {product} = useLoaderData();
  const {selectedVariant} = product;
  return (
    <Section className="min-h-screen text-white bg-darkGray">
      <Container resizeY="fill">
        <Flex direction="down" justify="between" py="3xl" resizeY="fill">
          <Flex direction="down" gap={6}>
            <Text uppercase color="accent" font="display">
              Coming Soon
            </Text>
            <Heading size="5xl" leading="tight">
              Builder
              <br />
              <Span font="display" uppercase>
                Keyboard
              </Span>
            </Heading>
            <Price as={Text} size="6xl" variant={selectedVariant} />
          </Flex>
          <Flex direction="down" gap={4}>
            <Button>Pre-order</Button>
            <Text width="narrow" className="opacity-70">
              See{' '}
              <Link className="border-b border-white/45" to="/">
                FAQs
              </Link>{' '}
              for more details on pre-orders
            </Text>
          </Flex>
        </Flex>
      </Container>
      <Background columns={1}>
        <Image />
      </Background>
    </Section>
  );
}
