import {
  Container,
  Flex,
  Section,
  MultiColumn,
  Spacer,
} from '@h2/new/Layout'
import { Heading, Span, Strong, Text } from '@h2/new/Text'
import { Button } from '@h2/new/Button'
import { cva, cx } from '@h2/new/utils'
import * as React from 'react'
import { Star } from '/app/components/Star'

export default function Reviews({ data }) {
  const { review_count, review_avg, reviews } = data.reviews

  const customerReviews = reviews.references.nodes.map(
    (r, i) => {
      return {
        ...r,
        background:
          i === 0 ? 'black' : i === 4 ? 'accent' : 'white',
      }
    },
  )

  const reviewAvg = JSON.parse(review_avg.value).value
  const reviewCount = review_count.value

  return (
    <Section>
      <Container paddingY='l' marginBottom>
        <Flex direction='down' gap={8}>
          <Heading size='6xl'>
            Don’t take our word for it
          </Heading>
          <Flex direction='down' gap={6}>
            <ReviewStatistics
              average={reviewAvg}
              count={reviewCount}
              icon={<Star />}
            />
            <Button color='accent'>View all reviews</Button>
          </Flex>
        </Flex>
      </Container>
      <Container paddingBottom='s'>
        <Flex direction='row' justify='end'>
          <Flex
            direction='down'
            wrap
            align='end'
            maxHeight
            maxWidth
          >
            <Spacer height={144} />
            {customerReviews.map((review) => {
              return (
                <Review key={review.id} data={review} />
              )
            })}
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
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
})

export function Review({ data, className, ...props }) {
  const { id, quote, customer, background } = data

  const classes = cx(
    review({ ...props, background }),
    className,
  )
  const { firstSentence, remainingText } =
    splitTextIntoSentences(quote.value)

  return (
    <div className='relative inline-block mx-6'>
      <Flex
        px={7}
        py={6}
        direction='down'
        gap={5}
        className={classes}
        style={{ width: 392 }}
      >
        <span
          className={`${
            background === 'black' && 'text-accent'
          }`}
        >
          {background === 'black' && (
            <span className='absolute top-0 left-0 w-6 bg-white aspect-square' />
          )}
          <IconQuote />
        </span>
        <Text>
          <Strong
            color={
              background === 'black' ? 'white' : 'text'
            }
          >
            {firstSentence}
          </Strong>{' '}
          <Span
            color={
              background === 'black' ? 'white' : 'black'
            }
            className='opacity-70'
          >
            {remainingText}
          </Span>
        </Text>
        <Text
          weight='medium'
          className={
            background === 'black' && 'text-accent'
          }
        >
          &mdash;{customer.value}
        </Text>
      </Flex>
    </div>
  )
}

export function ReviewsSkeleton({ data }) {
  const { review_count, review_avg, reviews } = data.reviews

  const customerReviews = reviews.references.nodes.map(
    (r, i) => {
      return {
        ...r,
        background:
          i === 0 ? 'black' : i === 4 ? 'accent' : 'white',
      }
    },
  )

  const reviewAvg = JSON.parse(review_avg.value).value
  const reviewCount = review_count.value

  return <Section />
}

function splitTextIntoSentences(text) {
  const regex = /([.!?]\s+)(?=[A-Z"'\s])/

  const splitIndex = text.search(regex)

  if (splitIndex === -1) {
    return { firstSentence: text, remainingText: '' }
  }

  const endIndex =
    splitIndex +
    text.slice(splitIndex).match(regex)[0].length

  const firstSentence = text.substring(0, endIndex)
  const remainingText = text.substring(endIndex).trim()

  return { firstSentence, remainingText }
}

const IconQuote = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='42'
    height='26'
    fill='none'
  >
    <path
      fill='currentColor'
      d='m29 12.5-.2-.2c0-.2-.6-.6-1.4-1.3-.4-.4-.8-1-1-1.8C26 8.4 26 7.7 26 7c0-2 .6-3.4 1.9-4.5A8.7 8.7 0 0 1 33.5 1c5 0 7.6 2 7.6 6 0 1.7-.7 3.2-2 4.5a5.5 5.5 0 0 1-4.4 1.5c-1.8 0-2.7.1-2.7.7 0 .2.3.5.9.8A6 6 0 0 1 35 19c0 2-.7 3.4-2 4.5a7 7 0 0 1-5 1.7l-3.3-.1-1.9-.8c-1-.5-1.7-1.2-2.3-2.2a6 6 0 0 1-.8-3c0-1.6.6-3 1.8-4.1a6.5 6.5 0 0 1 4.6-1.8h1.3c1 0 1.4-.2 1.4-.7Zm-19.4 0-.1-.2L8 11c-.5-.4-.8-1-1-1.8-.3-.8-.5-1.5-.5-2.2 0-2 .7-3.4 2-4.5A8.7 8.7 0 0 1 14.2 1c5 0 7.6 2 7.6 6 0 1.7-.7 3.2-2 4.5a5.5 5.5 0 0 1-4.4 1.5c-1.8 0-2.7.1-2.7.7 0 .2.3.5.9.8.6.5 1 1.1 1.4 2 .4.8.6 1.7.6 2.7 0 1.8-.6 3.3-1.8 4.4a7 7 0 0 1-5 1.7l-3.3-.1c-.8-.2-1.4-.5-2-.8-.9-.5-1.6-1.2-2.2-2.2a6 6 0 0 1-.8-3c0-1.6.6-3 1.8-4.1a6.5 6.5 0 0 1 4.6-1.8h1.3c1 0 1.4-.2 1.4-.7Z'
    />
  </svg>
)

export const ReviewStatistics = ({
  icon,
  average,
  count,
}) => {
  const averageLabel = ` ${average} `
  return (
    <Text size='2xl' weight='medium'>
      {icon}
      {averageLabel}
      <Span transparent>&mdash; {count} reviews</Span>
    </Text>
  )
}
