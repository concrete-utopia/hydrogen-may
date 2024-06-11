import {Container, Flex, Section} from '@h2/new/Layout';
import {Heading, Span, Strong, Text} from '@h2/new/Text';
import {Button} from '@h2/new/Button';
import {cva, cx} from '@h2/new/utils';

export default function Reviews({data}) {
  const {review_count, review_avg, reviews} = data.reviews;

  if (reviews == null) {
    return null
  }
  
  const customerReviews = reviews.references.nodes;

  return (
    <Section>
      <Container as="header" className="py-56 -mb-[26rem]">
        <Flex direction="down" gap={8}>
          <Heading size="6xl" uppercase weight="regular" wrap="balance">
            Don’t take our word for it
          </Heading>
          <Flex direction="down" gap={6}>
            <Text size="2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                fill="none"
                className="inline h-[1em]"
              >
                <path
                  fill="#BDCF00"
                  d="M4 17.3a.8.8 0 0 1-.4-.6l.1-.8 1.6-4.8-4-2.9-.6-.6a.8.8 0 0 1 0-.6c0-.2.2-.4.4-.5l.8-.2h5l1.5-4.7c.1-.3.2-.6.4-.7l.6-.3.6.3.4.7 1.5 4.8h5l.8.1c.2.1.4.3.4.5v.6l-.6.6-4 3 1.5 4.7c.1.3.2.6.1.8l-.3.6c-.2.1-.4.2-.6.1a1 1 0 0 1-.7-.3l-4.1-3-4 3-.8.3-.6-.1Z"
                />
              </svg>{' '}
              {JSON.parse(review_avg.value).value}{' '}
              <Span className="opacity-50">&mdash; {review_count.value}</Span>
            </Text>
            <Button color="accent">View all reviews</Button>
          </Flex>
        </Flex>
      </Container>
      <Container className="pb-16">
        <div className="max-w-[52rem] ml-auto">
          <div className="gap-12 columns-2">
            <div className="mt-36" />
            {customerReviews.map((review, i) => {
              return (
                <Review
                  key={review.id}
                  data={review}
                  background={i === 0 ? 'black' : i === 4 ? 'accent' : 'white'}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

const review = cva({
  base: ['mb-12'],
  variants: {
    background: {
      black: 'bg-black text-white',
      accent: 'bg-accent',
      white: 'bg-white border-accentDark border',
    },
  },
  defaultVariants: {
    background: 'white',
  },
});

function Review({data, className, ...props}) {
  const {quote, customer} = data;
  const classes = cx(review(props), className);

  const {firstSentence, remainingText} = splitTextIntoSentences(quote.value);

  return (
    <div className="relative inline-block">
      <Flex px={7} py={6} direction="down" gap={5} className={classes}>
        <span className={`${props.background === 'black' && 'text-accent'}`}>
          {props.background === 'black' && (
            <span className="absolute top-0 left-0 w-6 bg-white aspect-square"></span>
          )}
          <IconQuote />
        </span>
        <Text>
          <Strong color={props.background === 'black' ? 'white' : 'text'}>
            {firstSentence}
          </Strong>{' '}
          <Span
            color={props.background === 'black' ? 'white' : 'black'}
            className="opacity-70"
          >
            {remainingText}
          </Span>
        </Text>
        <Text
          weight="medium"
          className={props.background === 'black' && 'text-accent'}
        >
          &mdash;{customer.value}
        </Text>
      </Flex>
    </div>
  );
}

function splitTextIntoSentences(text) {
  const regex = /([.!?]\s+)(?=[A-Z"'\s])/;

  const splitIndex = text.search(regex);

  if (splitIndex === -1) {
    return {firstSentence: text, remainingText: ''};
  }

  const endIndex = splitIndex + text.slice(splitIndex).match(regex)[0].length;

  const firstSentence = text.substring(0, endIndex);
  const remainingText = text.substring(endIndex).trim();

  return {firstSentence, remainingText};
}

const IconQuote = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="26" fill="none">
    <path
      fill="currentColor"
      d="m29 12.5-.2-.2c0-.2-.6-.6-1.4-1.3-.4-.4-.8-1-1-1.8C26 8.4 26 7.7 26 7c0-2 .6-3.4 1.9-4.5A8.7 8.7 0 0 1 33.5 1c5 0 7.6 2 7.6 6 0 1.7-.7 3.2-2 4.5a5.5 5.5 0 0 1-4.4 1.5c-1.8 0-2.7.1-2.7.7 0 .2.3.5.9.8A6 6 0 0 1 35 19c0 2-.7 3.4-2 4.5a7 7 0 0 1-5 1.7l-3.3-.1-1.9-.8c-1-.5-1.7-1.2-2.3-2.2a6 6 0 0 1-.8-3c0-1.6.6-3 1.8-4.1a6.5 6.5 0 0 1 4.6-1.8h1.3c1 0 1.4-.2 1.4-.7Zm-19.4 0-.1-.2L8 11c-.5-.4-.8-1-1-1.8-.3-.8-.5-1.5-.5-2.2 0-2 .7-3.4 2-4.5A8.7 8.7 0 0 1 14.2 1c5 0 7.6 2 7.6 6 0 1.7-.7 3.2-2 4.5a5.5 5.5 0 0 1-4.4 1.5c-1.8 0-2.7.1-2.7.7 0 .2.3.5.9.8.6.5 1 1.1 1.4 2 .4.8.6 1.7.6 2.7 0 1.8-.6 3.3-1.8 4.4a7 7 0 0 1-5 1.7l-3.3-.1c-.8-.2-1.4-.5-2-.8-.9-.5-1.6-1.2-2.2-2.2a6 6 0 0 1-.8-3c0-1.6.6-3 1.8-4.1a6.5 6.5 0 0 1 4.6-1.8h1.3c1 0 1.4-.2 1.4-.7Z"
    />
  </svg>
);
