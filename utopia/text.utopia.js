import * as Utopia from 'utopia-api'
import { Heading, Text, Span } from '@h2/new/Text'

const tshirtSizes = [
  'xs',
  's',
  'm',
  'l',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
]

const annotations = {
  Heading: {
    component: Heading,
    properties: {
      size: Utopia.popupListControl(
        tshirtSizes.map((size) => ({
          label: size,
          value: size,
        })),
      ),
    },
    focus: 'never',
    inspector: 'hidden',
    variants: tshirtSizes.map((size) => ({
      label: `Heading (size ${size})`,
      imports: `import { Heading } from '@h2/new/Text'`,
      code: `<Heading size={'${size}'}>
        Lorem ipsum
    </ Heading>`,
    })),
  },
  Text: {
    component: Text,
    properties: {
      size: Utopia.popupListControl(
        tshirtSizes.map((size) => ({
          label: size,
          value: size,
        })),
      ),
    },
    focus: 'never',
    inspector: 'hidden',
    variants: tshirtSizes.map((size) => ({
      label: `Text (size ${size})`,
      imports: `import { Text } from '@h2/new/Text'`,
      code: `<Text size={'${size}'}>
        Lorem ipsum
    </ Text>`,
    })),
  },
  Span: {
    component: Span,
    properties: {
      transparent: Utopia.checkboxControl(),
    },
    focus: 'never',
    inspector: 'hidden',
    variants: [
      {
        label: `Span`,
        imports: `import { Span } from '@h2/new/Text'`,
        code: `<Span>
        Lorem ipsum
    </ Span>`,
      },
      {
        label: `Span (transparent)`,
        imports: `import { Span } from '@h2/new/Text'`,
        code: `<Span transparent>
        Lorem ipsum
    </ Span>`,
      },
    ],
  },
}

const Components = {
  '/app/components/hydrogen/new/Text': annotations,
  '@h2/new/Text': annotations,
}

export default Components
