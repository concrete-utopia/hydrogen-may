import * as Utopia from 'utopia-api'
import {
  Background,
  Flex,
  MultiColumn,
  Spacer,
  Section,
  Container,
} from '@h2/new/Layout'

export const BooleanSegmentControl = Utopia.radioControl([
  {
    label: 'Yes',
    value: 'true',
  },
  {
    label: 'No',
    value: 'false',
  },
])

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
    inspector: {
      display: 'collapsed',
      sections: ['typography'],
    },
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
  Flex: {
    component: Flex,
    properties: {
      direction: Utopia.radioControl([
        {
          label: 'right',
          value: 'right',
        },
        {
          label: 'down',
          value: 'down',
        },
        {
          label: 'left',
          value: 'left',
        },
        {
          label: 'up',
          value: 'up',
        },
      ]),
      align: Utopia.radioControl([
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
      justify: Utopia.radioControl([
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
      gap: Utopia.sliderControl(0, 9, 1),
      wrap: BooleanSegmentControl,
    },
    focus: 'never',
    inspector: {
      display: 'collapsed',
      sections: ['typography'],
    },
    variants: [
      {
        label: 'Flex row with placeholders',
        imports: `import { Flex } from '@h2/new/Layout'
          import { Placeholder } from 'utopia-api'`,
        code: `<Flex>
        <Placeholder />
        <Placeholder />
      </Flex>`,
      },
      {
        label: 'Flex column with placeholders',
        imports: `import { Flex } from '@h2/new/Layout'
          import { Placeholder } from 'utopia-api'`,
        code: `<Flex direction={'column'}>
        <Placeholder />
        <Placeholder />
      </Flex>`,
      },
    ],
  },
  MultiColumn: {
    component: MultiColumn,
    properties: {
      columns: Utopia.sliderControl(1, 4, 1),
      gap: BooleanSegmentControl,
      maxWidth: BooleanSegmentControl,
    },
    focus: 'never',
    inspector: {
      display: 'collapsed',
      sections: ['typography'],
    },
    variants: [
      {
        label: 'MultiColumn with 2 columns',
        imports: `import { MultiColumn } from '@h2/new/Layout'
          import { Placeholder } from 'utopia-api'`,
        code: `<MultiColumn columns={2} gap maxWidth>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </MultiColumn>`,
      },
      {
        label: 'MultiColumn with 3 columns',
        imports: `import { MultiColumn } from '@h2/new/Layout'
          import { Placeholder } from 'utopia-api'`,
        code: `<MultiColumn columns={3} gap maxWidth>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </MultiColumn>`,
      },
    ],
  },
  Spacer: {
    component: Spacer,
    properties: {
      height: Utopia.numberControl(),
    },
    focus: 'never',
    inspector: 'hidden',
    children: 'not-supported',
    variants: {
      label: 'Spacer',
      imports: "import { Spacer } from '@h2/new/Layout'",
      code: `<Spacer height={144} />`,
    },
    icon: 'dashedframe',
  },
  Section: {
    component: Section,
    properties: {
      padded: BooleanSegmentControl,
    },
    focus: 'never',
    inspector: {
      display: 'collapsed',
      sections: ['typography'],
    },
    variants: [
      {
        label: 'Section',
        imports: "import { Section } from '@h2/new/Layout'",
        code: `<Section />`,
      },
      {
        label: 'Section (padded)',
        imports: "import { Section } from '@h2/new/Layout'",
        code: `<Section padded />`,
      },
    ],
    icon: 'dashedframe',
  },
  Container: {
    component: Container,
    properties: {
      fluid: BooleanSegmentControl,
      paddingBottom: {
        control: 'radio',
        options: [
          {
            label: 'None',
            value: 'null',
          },
          {
            label: 'S',
            value: 's',
          },
          {
            label: 'M',
            value: 'm',
          },
          {
            label: 'L',
            value: 'l',
          },
        ],
        label: 'Bottom padding',
        folder: 'Padding',
      },
      paddingTop: {
        control: 'radio',
        options: [
          {
            label: 'None',
            value: 'null',
          },
          {
            label: 'S',
            value: 's',
          },
          {
            label: 'M',
            value: 'm',
          },
          {
            label: 'L',
            value: 'l',
          },
        ],
        label: 'Top padding',
        folder: 'Padding',
      },
      paddingY: {
        control: 'radio',
        options: [
          {
            label: 'None',
            value: 'null',
          },
          {
            label: 'S',
            value: 's',
          },
          {
            label: 'M',
            value: 'm',
          },
          {
            label: 'L',
            value: 'l',
          },
        ],
        label: 'Vertical padding',
        folder: 'Padding',
      },

      marginBottom: {
        control: 'radio',
        options: [
          {
            label: 'Yes',
            value: 'true',
          },
          {
            label: 'No',
            value: 'false',
          },
        ],
        label: 'Bottom margin',
        folder: 'Margin',
      },
      backgroundColor: {
        control: 'color',
        label: 'Background color',
      },
    },
    focus: 'never',
    inspector: {
      display: 'collapsed',
      sections: ['typography'],
    },
    variants: [
      {
        label: 'Container with placeholder',
        imports: `import { Container } from '@h2/new/Layout'
          import { Placeholder } from 'utopia-api'`,
        code: `<Container>
          <Placeholder />
        </Container>`,
      },
      {
        label: 'Container (Reviews Title)',
        imports: `import { Container } from '@h2/new/Layout'
          import { Placeholder } from 'utopia-api'`,
        code: `<Container paddingY='l' marginBottom>
          <Placeholder />
          <Placeholder />
        </Container>`,
      },
      {
        label: 'Container (Reviews Content)',
        imports: `import { Container } from '@h2/new/Layout'
          import { Placeholder } from 'utopia-api'`,
        code: `<Container paddingBottom='s' >
          <Placeholder />
          <Placeholder />
        </Container>`,
      },
    ],
    icon: 'dashedframe',
  },
}

const Components = {
  '/app/components/hydrogen/new/Layout': annotations,
  '@h2/new/Layout': annotations,
}

export default Components
