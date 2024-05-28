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
    <Section data-uid='fuf'>
      <Container
        as='header'
        className='py-56 -mb-[26rem]'
        data-uid='fsx'
      >
        <Flex direction='down' gap={8} data-uid='fss'>
          <Heading
            size='6xl'
            uppercase
            weight='regular'
            wrap='balance'
            data-uid='frb'
          >
            Don’t take our word for it
          </Heading>
          <Flex direction='down' gap={6} data-uid='fsn'>
            <Text size='2xl' weight='medium' data-uid='fsd'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='19'
                height='18'
                fill='none'
                className='inline h-[1em]'
                data-uid='frr'
              >
                <path
                  fill='#BDCF00'
                  d='M4 17.3a.8.8 0 0 1-.4-.6l.1-.8 1.6-4.8-4-2.9-.6-.6a.8.8 0 0 1 0-.6c0-.2.2-.4.4-.5l.8-.2h5l1.5-4.7c.1-.3.2-.6.4-.7l.6-.3.6.3.4.7 1.5 4.8h5l.8.1c.2.1.4.3.4.5v.6l-.6.6-4 3 1.5 4.7c.1.3.2.6.1.8l-.3.6c-.2.1-.4.2-.6.1a1 1 0 0 1-.7-.3l-4.1-3-4 3-.8.3-.6-.1Z'
                  data-uid='frj'
                />
              </svg>{' '}
              4.8{' '}
              <Span className='opacity-50' data-uid='9af'>
                &mdash; 385 Reviews
              </Span>
            </Text>
            <Button color='accent' data-uid='fsi'>
              View all reviews
            </Button>
          </Flex>
        </Flex>
      </Container>
      <Container className='pb-16' data-uid='fuc'>
        <MultiColumn columns={2} gap maxWidth>
          <Spacer height={144} />
          {
            // @utopia/map-count=4
            data.map((review, i) => {
              return (
                <Review
                  key={review.id}
                  data={review}
                  background={
                    i === 0
                      ? 'black'
                      : i === 4
                      ? 'accent'
                      : 'white'
                  }
                  data-uid='0af'
                />
              )
            })
          }
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
  const { quote, customer } = data
  const classes = cx(review(props), className)

  const { firstSentence, remainingText } =
    splitTextIntoSentences(quote)

  return (
    <div className='relative inline-block' data-uid='fwp'>
      <Flex
        px={7}
        py={6}
        direction='down'
        gap={5}
        className={classes}
        data-uid='fwl'
      >
        <span
          className={`${
            props.background === 'black' && 'text-accent'
          }`}
          data-uid='fux'
        >
          {props.background === 'black' && (
            <span
              className='absolute top-0 left-0 w-6 bg-white aspect-square'
              data-uid='fun'
            />
          )}
          <IconQuote data-uid='fus' />
        </span>
        <Text data-uid='fvu'>
          <Strong
            color={
              props.background === 'black'
                ? 'white'
                : 'text'
            }
            data-uid='fvg'
          >
            {firstSentence}
          </Strong>{' '}
          <Span
            color={
              props.background === 'black'
                ? 'white'
                : 'black'
            }
            className='opacity-70'
            data-uid='fvr'
          >
            {remainingText}
          </Span>
        </Text>
        <Text
          weight='medium'
          className={
            props.background === 'black' && 'text-accent'
          }
          data-uid='fwd'
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
    data-uid='fxf'
  >
    <path
      fill='currentColor'
      d='m29 12.5-.2-.2c0-.2-.6-.6-1.4-1.3-.4-.4-.8-1-1-1.8C26 8.4 26 7.7 26 7c0-2 .6-3.4 1.9-4.5A8.7 8.7 0 0 1 33.5 1c5 0 7.6 2 7.6 6 0 1.7-.7 3.2-2 4.5a5.5 5.5 0 0 1-4.4 1.5c-1.8 0-2.7.1-2.7.7 0 .2.3.5.9.8A6 6 0 0 1 35 19c0 2-.7 3.4-2 4.5a7 7 0 0 1-5 1.7l-3.3-.1-1.9-.8c-1-.5-1.7-1.2-2.3-2.2a6 6 0 0 1-.8-3c0-1.6.6-3 1.8-4.1a6.5 6.5 0 0 1 4.6-1.8h1.3c1 0 1.4-.2 1.4-.7Zm-19.4 0-.1-.2L8 11c-.5-.4-.8-1-1-1.8-.3-.8-.5-1.5-.5-2.2 0-2 .7-3.4 2-4.5A8.7 8.7 0 0 1 14.2 1c5 0 7.6 2 7.6 6 0 1.7-.7 3.2-2 4.5a5.5 5.5 0 0 1-4.4 1.5c-1.8 0-2.7.1-2.7.7 0 .2.3.5.9.8.6.5 1 1.1 1.4 2 .4.8.6 1.7.6 2.7 0 1.8-.6 3.3-1.8 4.4a7 7 0 0 1-5 1.7l-3.3-.1c-.8-.2-1.4-.5-2-.8-.9-.5-1.6-1.2-2.2-2.2a6 6 0 0 1-.8-3c0-1.6.6-3 1.8-4.1a6.5 6.5 0 0 1 4.6-1.8h1.3c1 0 1.4-.2 1.4-.7Z'
      data-uid='fwy'
    />
  </svg>
)
