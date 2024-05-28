import * as Utopia from 'utopia-api'
import { Heading } from '@h2/new/Text'

const tsirtSizes = [
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
        tsirtSizes.map((size) => ({
          label: size,
          value: size,
        })),
      ),
    },
    focus: 'never',
    inspector: 'hidden',
    variants: tsirtSizes.map((size) => ({
      label: `Heading (size ${size})`,
      imports: `import { Heading } from '@h2/new/Layout'`,
      code: `<Heading size={'${size}'}>
        Lorem ipsum
    </ Heading>`,
    })),
  },
  Text: {
    component: Text,
    properties: {
      size: Utopia.popupListControl(
        tsirtSizes.map((size) => ({
          label: size,
          value: size,
        })),
      ),
    },
    focus: 'never',
    inspector: 'hidden',
    variants: tsirtSizes.map((size) => ({
      label: `Text (size ${size})`,
      imports: `import { Text } from '@h2/new/Layout'`,
      code: `<Text size={'${size}'}>
        Lorem ipsum
    </ Text>`,
    })),
  },
}

const Components = {
  '/app/components/hydrogen/new/Text': annotations,
  '@h2/new/Text': annotations,
}

export default Components
