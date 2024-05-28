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
import { Placeholder } from 'utopia-api'
import * as React from 'react'
import { Star } from '/app/components/Star'

const reviews = [
  {
    id: '1',
    quote:
      'This is a really nice tote bag, perfect size for carry on travel or day trips. I really like that it zips up. Sturdy and the handles don’t slip off your shoulder! I love it.”',
    customer: 'Lynn W.',
  },
  {
    id: '2',
    quote:
      'I love my Builders Tote! It’s durable, and fits everything I need for my commute, from my laptop to my water bottle. Totally worth it!',
    customer: 'Emma R.',
  },
  {
    id: '3',
    quote:
      'This tote bag has become an essential part of my daily routine. It’s spacious enough for all my stuff, from documents to gym clothes, and it’s impressively sturdy.',
    customer: 'Mark L.',
  },
  {
    id: '4',
    quote:
      'Great tote for everyday use. It carries my laptop, books, and even my lunch with ease. Plus, it’s a fantastic conversation starter wherever I go.',
    customer: 'Chris D.',
  },
  {
    id: '5',
    quote:
      'Incredibly handy for my weekend trips. It’s big enough to hold all my essentials and looks fantastic with any outfit. Can’t imagine my weekends without it now',
    customer: 'Rachel T.',
  },
  {
    id: '6',
    quote:
      'The perfect blend of functionality and fashion. I take it to work, on weekend getaways, and even to the gym. It’s a must-have for any builder!',
    customer: 'Sarah M.',
  },
]

export default function Reviews({ data = reviews }) {
  return (
    <Section>
      <Container as='header' className='py-56 -mb-[26rem]'>
        <Flex direction='down' gap={8}>
          <Heading size='6xl'>
            Don’t take our word for it
          </Heading>
          <Flex direction='down' gap={6}>
            <Text size='2xl' weight='medium'>
              <Star />
              4.8
              <Span className='opacity-50'>
                &mdash; 385 Reviews
              </Span>
            </Text>
            <Button color='accent'>View all reviews</Button>
          </Flex>
        </Flex>
      </Container>
      <Container className='pb-16'>
        <MultiColumn columns={2} gap maxWidth>
          <Spacer height={144} />
          {data.map((review) => {
            return <Review key={review.id} data={review} />
          })}
        </MultiColumn>
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
  const { id, quote, customer } = data

  // hack so we have a background from data.id
  const moduloId = (parseInt(id) - 1) % 6
  const background =
    props.background ??
    (moduloId === 1
      ? 'black'
      : moduloId === 5
      ? 'accent'
      : 'white')

  const classes = cx(
    review({ ...props, background }),
    className,
  )
  const { firstSentence, remainingText } =
    splitTextIntoSentences(quote)

  console.log(background)
  return (
    <div className='relative inline-block'>
      <Flex
        px={7}
        py={6}
        direction='down'
        gap={5}
        className={classes}
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
          &mdash;{customer}
        </Text>
      </Flex>
    </div>
  )
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
