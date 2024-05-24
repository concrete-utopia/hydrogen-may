import {Button} from '@h2/Button';
import Link from '@h2/Link';
import {Heading, Text, Span} from '@h2/new/Text';
import {Background, Container, Flex, Section} from '@h2/new/Layout';

export default function CTA() {
  return (
    <Section className="bg-accent aspect-video">
      <Container resizeY="fill">
        <Flex
          gap="m"
          py="xl"
          align="center"
          justify="end"
          direction="down"
          resizeY="fill"
        >
          <Heading weight="regular" leading="normal">
            <Span font="display">
              <Span pill>CTRL</Span> YOUR PRODUCTIVITY,
            </Span>
            <br />
            <Span font="sans">
              <Span pill>ALT</Span> YOUR WORK GAME.
            </Span>
          </Heading>
          <Button>Pre-order</Button>
          <Text>
            See <Link to="/">FAQs</Link> for more details on pre-orders
          </Text>
        </Flex>
      </Container>
      <Background></Background>
    </Section>
  );
}
