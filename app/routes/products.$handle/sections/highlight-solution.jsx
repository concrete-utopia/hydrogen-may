import {Heading, Text} from '@h2/Text';
import {useLoaderData} from '@remix-run/react';
import {Button} from '~/components/hydrogen/Button';
import {Container} from '@h2/Section';
import {Image} from '@shopify/hydrogen';

export default function HighlightSolution() {
  const {
    product: {selectedVariant},
  } = useLoaderData();
  return (
    <section className="aspect-[2/1] flex items-center">
      <div className="rotate-12 absolute w-1/2 max-w-screen-md">
        <Image className="pointer-events-none" data={selectedVariant.image} />
      </div>
      <Container className="grid grid-cols-2">
        <div></div>
        <div>
          <Heading className="uppercase">
            Your <span className="rounded-full p-2 mx-2 bg-accent">ideal</span>
            <span className="rounded-full px-4 py-2 mx-2 bg-accent">
              &nbsp;
            </span>{' '}
            travel companion
          </Heading>
          <Text>
            This is a really nice tote bag, perfect size for carry on travel or
            day trips. It&rsquo;s the maximum size for “personal” carry on
            luggage on flights. Lots of pockets in all the right places. I
            really like that it zips up. Sturdy and the handles don’t slip off
            your shoulder! I love it.
          </Text>
          <Button>Learn more</Button>
        </div>
      </Container>
    </section>
  );
}
