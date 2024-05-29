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
    label: 'true',
    value: 'true',
  },
  {
    label: 'false',
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
  Flex: {
    component: Flex,
    properties: {
      direction: Utopia.popupListControl([
        {
          label: 'row',
          value: 'row',
        },
        {
          label: 'column',
          value: 'column',
        },
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
      gap: Utopia.sliderControl(0, 9, 1),
      wrap: BooleanSegmentControl,
    },
    focus: 'never',
    inspector: 'hidden',
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
    inspector: 'hidden',
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
    inspector: 'hidden',
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
      paddingY: Utopia.radioControl([
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
      ]),
      paddingBottom: Utopia.radioControl([
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
      ]),
      marginBottom: BooleanSegmentControl,
    },
    focus: 'never',
    inspector: 'hidden',
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
        label: 'Container (Review Title)',
        imports: `import { Container } from '@h2/new/Layout'
          import { Placeholder } from 'utopia-api'`,
        code: `<Container paddingY='l' marginBottom>
          <Placeholder />
          <Placeholder />
        </Container>`,
      },
      {
        label: 'Container (Review Content)',
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
