import {Heading, Text} from '@h2/Text';
import {Container, Flex, Grid, Section} from '@h2/new/Layout';

export default function OurPromise() {
  return (
    <Section className="py-16">
      <Container as="header" className="py-16">
        <Heading>
          Our
          <br />
          Promise
        </Heading>
      </Container>
      <Container className="pb-36">
        <Grid columns={3} gap={5}>
          <Flex
            p={6}
            gap={4}
            direction="down"
            className="text-black translate-y-16 bg-accent aspect-square"
          >
            <div className="aspect-[4/3] w-full border-white"></div>
            <Heading>Guaranteed For Life</Heading>
            <Text width="narrow">
              Every one of our products comes with a limited lifetime warranty.
            </Text>
          </Flex>
          <Flex
            p={6}
            gap={4}
            direction="down"
            className="text-black bg-gray aspect-square"
          >
            <div className="aspect-[4/3] w-full border-white"></div>
            <Heading>100 days to try</Heading>
            <Text width="narrow">
              Try it out for 100 days. If you don’t love it, send it back.
            </Text>
          </Flex>
          <Flex
            p={6}
            gap={4}
            direction="down"
            className="text-white -translate-y-16 bg-black aspect-square"
          >
            <div className="aspect-[4/3] w-full border-white"></div>
            <Heading>Free shipping</Heading>
            <Text width="narrow">
              We’ll cover shipping on all orders to the contiguous US and
              Canada.
            </Text>
          </Flex>
        </Grid>
      </Container>
    </Section>
  );
}
