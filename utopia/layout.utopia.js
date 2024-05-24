import * as Utopia from 'utopia-api'
import { Background } from '@h2/new/Layout'

const annotations = {
  Background: {
    component: Background,
    properties: {
      align: Utopia.popupListControl([
        {
          label: 'start',
          value: 'start',
        },
        {
          label: 'center',
          value: 'center',
        },
        {
          label: 'end',
          value: 'end',
        },
        {
          label: 'baseline',
          value: 'baseline',
        },
        {
          label: 'stretch',
          value: 'stretch',
        },
      ]),
      justify: Utopia.popupListControl([
        {
          label: 'start',
          value: 'start',
        },
        {
          label: 'center',
          value: 'center',
        },
        {
          label: 'end',
          value: 'end',
        },
        {
          label: 'between',
          value: 'between',
        },
      ]),
      columns: Utopia.sliderControl(1, 5, 1),
      rows: Utopia.sliderControl(1, 5, 1),
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
  '/app/components/hydrogen/new/Layout': annotations,
  '@h2/new/Layout': annotations,
}

export default Components
