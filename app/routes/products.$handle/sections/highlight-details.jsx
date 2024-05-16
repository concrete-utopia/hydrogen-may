import React from 'react'
import {
  Container,
  Section,
  Background,
  Grid,
  Flex,
} from '/app/components/hydrogen/new/Layout';
import {Heading} from '~/components/hydrogen/Text';

export default function HighlightDetails() {
  return (
    <Section className="bg-darkGray items-center text-white min-h-[40vw]">
      <Container>
        <Grid resizeY="fill">
          <Flex resizeY="fill" justify="center" direction="down" gap={8}>
            <Flex direction="down" gap={4}>
              <Heading>Materials and care</Heading>
              <ul>
                <li>Recycled cotton tote.</li>
                <li>Machine wash cold. Hang dry.</li>
              </ul>
            </Flex>

            <Flex direction="down" gap={4}>
              <Heading>Size</Heading>
              <ul>
                <li>16&quot; W x 15.5&quot; H x 3&quot; bottom gusst. </li>
                <li>10&quot; handle drop length.</li>
              </ul>
            </Flex>
          </Flex>
        </Grid>
      </Container>
      <Background>
        <div className="w-full h-full"></div>
        <div className="w-full h-full bg-accent"></div>
      </Background>
    </Section>
  );
}
