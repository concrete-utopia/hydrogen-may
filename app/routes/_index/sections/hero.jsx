import {Button} from '@h2/Button';
import {Heading, Text} from '@h2/new/Text';
import {Background, Container, Flex, Section} from '@h2/new/Layout';
import {Image} from '@shopify/hydrogen';

export default function Hero() {
  return (
    <Section className="aspect-video bg-darkGray">
      <Background>
        <div></div>
        <div>
          <Image
            src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png"
            className="w-full h-full"
          />
        </div>
      </Background>
      <Container resizeY="fill" className="py-24">
        <Flex direction="down" resizeY="fill" justify="between">
          <Flex direction="down">
            <Text uppercase size={6} className="text-accent font-display">
              Summer 2024
            </Text>
            <Heading size="8" color="white" uppercase>
              Building <br />
              <span className="font-display">Essentials</span>
            </Heading>
          </Flex>
          <Button to="/">Shop now</Button>
        </Flex>
      </Container>
    </Section>
  );
}
