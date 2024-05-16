import React from 'react'
import {Heading, Text} from '/app/components/hydrogen/Text';
import {useLoaderData} from '@remix-run/react';
import {Button} from '~/components/hydrogen/Button';
import {Image} from '@shopify/hydrogen';
import {
  Flex,
  Section,
  Container,
  Background,
  Grid,
} from '/app/components/hydrogen/new/Layout';

export default function HighlightSolution() {
  const {
    product: {selectedVariant},
  } = useLoaderData();
  return (
    <Section className="aspect-[2/1]">
      <Background>
        <div className="rotate-12 max-w-screen-md">
          <Image className="pointer-events-none" data={selectedVariant.image} />
        </div>
      </Background>
      <Flex direction="right" justify="center" align="center">
        <Container>
          <Grid columns={2} justify="center">
            <div></div>
            <Flex direction="down" align="start" gap={4}>
              <Heading className="uppercase">
                Your{' '}
                <span className="rounded-full p-2 mx-2 bg-accent">ideal</span>
                <span className="rounded-full px-4 py-2 mx-2 bg-accent">
                  &nbsp;
                </span>{' '}
                travel companion
              </Heading>
              <Text>
                This is a really nice tote bag, perfect size for carry on travel
                or day trips. It&rsquo;s the maximum size for “personal” carry
                on luggage on flights. Lots of pockets in all the right places.
                I really like that it zips up. Sturdy and the handles don’t slip
                off your shoulder! I love it.
              </Text>
              <Button>Learn more</Button>
            </Flex>
          </Grid>
        </Container>
      </Flex>
    </Section>
  );
}
