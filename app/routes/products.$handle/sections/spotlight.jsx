import {Button} from '@h2/Button';
import {Heading, Text} from '@h2/Text';
import {Container, Flex, Grid, Section} from '@h2/new/Layout';
import {Image} from '@shopify/hydrogen';

export default function Spotlight() {
  return (
    <Section>
      <Container as="header" className="py-16">
        <Heading>New</Heading>
        <Text>Just Dropped</Text>
      </Container>
      <Container>
        <div className="absolute top-0 right-0 flex items-center justify-center w-40 text-6xl translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-card aspect-square">
          👀
        </div>
        <Grid columns={2} gap={0}>
          <Flex
            direction="down"
            align="center"
            justify="center"
            gap={6}
            className="bg-offWhite"
            p={8}
          >
            <div className="w-[30rem] h-[15rem] flex items-end justify-center">
              <Image
                aspectRatio="1/1"
                crop="center"
                width={380}
                src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png"
              />
            </div>
            <Flex gap={4} direction="down" align="center" justify="center">
              <Heading>Builders Tote</Heading>
              <Text width="narrow">
                Sofie Pavitt Face is an intentional edit of skincare essentials
                designed for acne-prone skin.
              </Text>
            </Flex>
            <Button>Add to cart</Button>
          </Flex>
          <div className="bg-accent">
            <Image
              className="object-cover h-full"
              width={633}
              height={555}
              src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png"
            />
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
