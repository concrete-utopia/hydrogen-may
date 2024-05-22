import {Button} from '@h2/Button';
import Link from '@h2/Link';
import {Heading, Text} from '@h2/Text';
import {Background, Flex, Section} from '@h2/new/Layout';

export default function CTA() {
  return (
    <Section className="bg-accent aspect-video">
      <Flex>
        <Heading>
          <span className="font-display">
            <span>CTRL</span> YOUR PRODUCTIVITY,
          </span>
          <br />
          <span className="font-sans">
            <span>ALT</span> YOUR WORK GAME.
          </span>
        </Heading>
        <Button>Pre-order</Button>
        <Text>
          See <Link to="/">FAQs</Link> for more details on pre-orders
        </Text>
      </Flex>
      <Background></Background>
    </Section>
  );
}
