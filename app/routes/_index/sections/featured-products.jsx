import {Button} from '@h2/Button';
import {Heading, Text} from '@h2/new/Text';
import {Flex, Grid, Section} from '@h2/new/Layout';
import {Image} from '@shopify/hydrogen';

export default function FeaturedProducts() {
  return (
    <Section>
      <Grid columns={2} gap={0}>
        <Flex
          direction="down"
          align="center"
          justify="center"
          gap={6}
          className="bg-offWhite"
          p={8}
        >
          <Image
            aspectRatio="1/1"
            crop="center"
            width={380}
            src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png"
          />
          <Flex gap={4} direction="down" align="center" justify="center">
            <Heading size={3}>Builders Tote</Heading>
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
      <Grid columns={2} gap={0}>
        <div className="bg-accent">
          <Image
            className="object-cover h-full"
            width={633}
            height={555}
            src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png"
          />
        </div>
        <Flex
          direction="down"
          align="center"
          justify="center"
          gap={6}
          className="bg-offWhite"
          p={8}
        >
          <Image
            aspectRatio="1/1"
            crop="center"
            width={380}
            src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png"
          />
          <Flex gap={4} direction="down" align="center" justify="center">
            <Heading>Builders Tote</Heading>
            <Text width="narrow">
              Sofie Pavitt Face is an intentional edit of skincare essentials
              designed for acne-prone skin.
            </Text>
          </Flex>
          <Button>Add to cart</Button>
        </Flex>
      </Grid>
    </Section>
  );
}
