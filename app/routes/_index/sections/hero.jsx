import {Button} from '@h2/new/Button';
import {Heading, Text, Span} from '@h2/new/Text';
import {Background, Container, Flex, Section} from '@h2/new/Layout';
import {Image} from '@shopify/hydrogen';

export default function Hero() {
  return (
    <Section className="aspect-[8/5] bg-darkGray">
      <Container resizeY="fill" className="py-24">
        <Flex direction="down" resizeY="fill" justify="between" align="start">
          <Flex direction="down" gap="s">
            <Text
              uppercase
              size={6}
              font="display"
              color="accent"
              className="pl-1"
            >
              Summer 2024
            </Text>
            <Heading font="text" size="8" color="white">
              Building <br />
              <Span uppercase font="display">
                Essentials
              </Span>
            </Heading>
          </Flex>
          <Button to="/">Shop now</Button>
        </Flex>
      </Container>
      <Background columns={2}>
        <div></div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-darkGray to-transparent to-50% z-0"></div>
          <Image
            src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png"
            className="object-cover w-full h-full -z-10"
          />
        </div>
      </Background>
    </Section>
  );
}
