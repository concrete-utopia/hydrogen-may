import {Container, Section, Background, Grid, Flex} from '@h2/new/Layout';
import {Heading, Text} from '@h2/new/Text';

export default function HighlightDetails() {
  return (
    <Section className="items-center text-white py-44 bg-darkGray">
      <Container resizeY="fill">
        <Grid resizeY="fill">
          <Flex resizeY="fill" justify="center" direction="down" gap={9}>
            <Flex direction="down" gap={5}>
              <Heading font="text" size={4} color="white">
                Materials and care
              </Heading>
              <Flex as="ul" gap={2} direction="down">
                <Flex gap={4} as="li" className="flex items-center">
                  <span className="bg-accent inline-block w-10 h-[2px]" />
                  <Text size="xl" color="white" className="opacity-70">
                    Recycled cotton tote.
                  </Text>
                </Flex>
                <Flex gap={4} as="li" className="flex items-center">
                  <span className="bg-accent inline-block w-10 h-[2px]" />
                  <Text size="xl" color="white" className="opacity-70">
                    Machine wash cold. Hang dry.
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex direction="down" gap={5}>
              <Heading font="text" size={4} color="white">
                Size
              </Heading>
              <Flex as="ul" gap={2} direction="down">
                <Flex gap={4} as="li" className="flex items-center">
                  <span className="bg-accent inline-block w-10 h-[2px]" />
                  <Text size="xl" color="white" className="opacity-70">
                    16&quot; W x 15.5&quot; H x 3&quot; bottom gusset.
                  </Text>
                </Flex>
                <Flex gap={4} as="li" className="flex items-center">
                  <span className="bg-accent inline-block w-10 h-[2px]" />
                  <Text size="xl" color="white" className="opacity-70">
                    10&quot; handle drop length.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Grid>
      </Container>
      <Background columns={2}>
        <div className="w-full h-full"></div>
        <div className="w-full h-full bg-accent"></div>
      </Background>
    </Section>
  );
}
