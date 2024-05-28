import * as Utopia from 'utopia-api'
import { Heading } from '@h2/new/Text'

const annotations = {
  Heading: {
    component: Heading,
    properties: {
      size: Utopia.popupListControl([
        {
          label: 'xs',
          value: 'xs',
        },
        {
          label: 's',
          value: 's',
        },
        {
          label: 'm',
          value: 'm',
        },
        {
          label: 'l',
          value: 'l',
        },
        {
          label: 'xl',
          value: 'xl',
        },
        {
          label: '2xl',
          value: '2xl',
        },
        {
          label: '3xl',
          value: '3xl',
        },
        {
          label: '4xl',
          value: '4xl',
        },
        {
          label: '5xl',
          value: '5xl',
        },
        {
          label: '6xl',
          value: '6xl',
        },
      ]),
    },
    focus: 'never',
    inspector: 'hidden',
    variants: [
      {
        label: 'Background with placeholders',
        imports: `import { Background } from '@h2/new/Layout'
            import { Placeholder } from 'utopia-api'`,
        code: `<Background
          columns={2}
        >
          <Placeholder />
          <Placeholder />
        </Background>`,
      },
    ],
  },
}

const Components = {
  '/app/components/hydrogen/new/Text': annotations,
  '@h2/new/Text': annotations,
}

export default Components
