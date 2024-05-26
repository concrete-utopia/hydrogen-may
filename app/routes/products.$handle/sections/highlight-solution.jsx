import {Heading, Span, Text} from '@h2/new/Text';
import {useLoaderData} from '@remix-run/react';
import {Button} from '@h2/new/Button';
import {Image} from '@shopify/hydrogen';
import {Flex, Section, Container, Background, Grid} from '@h2/new/Layout';

export default function HighlightSolution() {
  const {
    product: {selectedVariant},
  } = useLoaderData();
  return (
    <Section className="aspect-[2/1]">
      <Flex
        className="relative z-10 h-full"
        direction="right"
        justify="center"
        align="center"
      >
        <Container className="h-full">
          <Grid columns={2} className="h-full">
            <div></div>
            <Flex
              className="pl-8"
              resizeY="fill"
              direction="down"
              align="start"
              justify="center"
              gap={9}
            >
              <Heading uppercase wrap="balance">
                Your{' '}
                <Span pill className="bg-accent">
                  ideal
                </Span>
                &nbsp;
                <Span pill className="w-[1em] px-6 bg-accent">
                  &nbsp;
                </Span>{' '}
                travel companion
              </Heading>
              <Text wrap="balance" size="xl" className="opacity-70">
                This is a really nice tote bag, perfect size for carry on travel
                or day trips. It&rsquo;s the maximum size for “personal” carry
                on luggage on flights. Lots of pockets in all the right places.
                I really like that it zips up. Sturdy and the handles don’t slip
                off your shoulder! I love it.
              </Text>
              <Button color="white">Learn more</Button>
            </Flex>
          </Grid>
        </Container>
      </Flex>
      <Background overflow="visible" columns={2} className="bg-offWhite">
        <div className="h-full">
          <Image
            className="object-fill w-auto scale-[118%] -translate-y-14 -translate-x-6 pointer-events-none mix-blend-darken rotate-12"
            data={selectedVariant.image}
          />
        </div>
      </Background>
      <div className="absolute bottom-0 right-0 flex justify-around w-1/2 translate-y-7">
        <span className="-translate-x-4 translate-y-4 aspect-square w-14 bg-offWhite"></span>
        <span className="-translate-x-2 aspect-square w-14 bg-offWhite"></span>
        <span className="-translate-x-11 translate-y-14 aspect-square w-14 bg-offWhite"></span>
        <span className="-translate-x-4 translate-y-4 aspect-square w-14 bg-offWhite"></span>
        <span className="bg-white aspect-square w-14 -translate-y-7"></span>
      </div>
    </Section>
  );
}
