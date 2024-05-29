import {AddToCartButton} from '@h2/new/Button';
import {Heading, Text} from '@h2/new/Text';
import {Container, Flex, Grid, Section} from '@h2/new/Layout';
import {Image} from '@shopify/hydrogen';

export default function Spotlight() {
  return (
    <Section padding className="mb-24">
      <Container as="header" className="pb-16">
        <Flex gap={4} direction="down">
          <Heading size={9} uppercase weight="regular">
            New
          </Heading>
          <Text size={6} color="black" weight="medium" className="opacity-50">
            Just Dropped
          </Text>
        </Flex>
      </Container>
      <Container>
        <div className="absolute top-0 flex items-center justify-center w-40 translate-x-1/2 -translate-y-1/2 bg-white rounded-full text-7xl -rotate-12 right-10 shadow-badge aspect-square">
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
            <div className="w-[22rem] h-[15rem] flex items-end justify-center">
              <Image
                aspectRatio="1/1"
                crop="center"
                width={380}
                src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/01-DevMode-Buildertote_PDP_3_fa8b6520-484a-47e7-818d-b217b04d31e6.png"
              />
            </div>
            <Flex gap={4} direction="down" align="center" justify="center">
              <Heading size="l" weight="medium">
                Builders Tote
              </Heading>
              <Text width="narrow">
                Sofie Pavitt Face is an intentional edit of skincare essentials
                designed for acne-prone skin.
              </Text>
            </Flex>
            <AddToCartButton>Add to cart</AddToCartButton>
          </Flex>
          <div className="self-stretch bg-accent">
            <Image
              className="object-cover h-full"
              width={633}
              height={555}
              src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/01-DevMode-Buildertote_PDP_3_fa8b6520-484a-47e7-818d-b217b04d31e6.png"
            />
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
