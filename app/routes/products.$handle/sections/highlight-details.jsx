import {Container, Section, Background, Grid, Flex} from '@h2/new/Layout';
import {Heading} from '~/components/hydrogen/Text';

export default function HighlightDetails() {
  return (
    <Section className="bg-darkGray items-center text-white min-h-[40vw]">
      <Container resizeY="fill">
        <Grid resizeY="fill">
          <Flex resizeY="fill" justify="center" direction="down" gap={9}>
            <Flex direction="down" gap={5}>
              <Heading>Materials and care</Heading>
              <Flex as="ul" gap={2} direction="down">
                <Flex gap={4} as="li" className="flex items-center">
                  <span className="bg-accent inline-block w-10 h-[2px]" />
                  Recycled cotton tote.
                </Flex>
                <Flex gap={4} as="li" className="flex items-center">
                  <span className="bg-accent inline-block w-10 h-[2px]" />
                  Machine wash cold. Hang dry.
                </Flex>
              </Flex>
            </Flex>

            <Flex direction="down" gap={5}>
              <Heading>Size</Heading>
              <Flex as="ul" gap={2} direction="down">
                <Flex gap={4} as="li" className="flex items-center">
                  <span className="bg-accent inline-block w-10 h-[2px]" />
                  16&quot; W x 15.5&quot; H x 3&quot; bottom gusst.{' '}
                </Flex>
                <Flex gap={4} as="li" className="flex items-center">
                  <span className="bg-accent inline-block w-10 h-[2px]" />
                  10&quot; handle drop length.
                </Flex>
              </Flex>
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
