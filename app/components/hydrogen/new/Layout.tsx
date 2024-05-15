import React from 'react';

// Import configured class names generator functions with predetermined styles.
import {cx, cva} from './cva.config';

/**
 * Type definitions for the Flex component props enriched with Tailwind CSS class and CSS mapping details.
 */
interface FlexProps {
  as?: React.ElementType;
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
  /**
   * Controls the flex-direction CSS property.
   * - `'row'`: `flex-row` (CSS: `flex-direction: row`)
   * - `'column'`: `flex-col` (CSS: `flex-direction: column`)
   */
  direction?: 'row' | 'column';
  /**
   * Controls the align-items CSS property.
   * - `'start'`: `items-start` (CSS: `align-items: flex-start`)
   * - `'center'`: `items-center` (CSS: `align-items: center`)
   * - `'end'`: `items-end` (CSS: `align-items: flex-end`)
   * - `'baseline'`: `items-baseline` (CSS: `align-items: baseline`)
   * - `'stretch'`: `items-stretch` (CSS: `align-items: stretch`)
   */
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  /**
   * Controls the justify-content CSS property.
   * - `'center'`: `justify-center` (CSS: `justify-content: center`)
   * - `'start'`: `justify-start` (CSS: `justify-content: flex-start`)
   * - `'end'`: `justify-end` (CSS: `justify-content: flex-end`)
   * - `'between'`: `justify-between` (CSS: `justify-content: space-between`)
   */
  justify?: 'center' | 'start' | 'end' | 'between';
  /**
   * Controls the gap CSS property.
   * - `1`: `gap-1` (CSS: `gap: 0.25rem`)
   * - `2`: `gap-2` (CSS: `gap: 0.5rem`)
   * - `3`: `gap-3` (CSS: `gap: 0.75rem`)
   * - `4`: `gap-4` (CSS: `gap: 1rem`)
   * - `5`: `gap-5` (CSS: `gap: 1.25rem`)
   */
  gap?: 1 | 2 | 3 | 4 | 5;
}

/**
 * Configuration for "cva" to generate a dynamic class string based on the provided flex configuration.
 */
const flex = cva({
  base: 'flex',
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    justify: {
      center: 'justify-center',
      start: 'justify-start',
      end: 'justify-end',
      between: 'justify-between',
    },
    gap: {
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
    },
  },
});

/**
 * A highly customizable Flex component designed to facilitate the easier use of CSS flexbox layout
 * with additional options to control alignment, distribution, and direction of child components.
 *
 * @component
 * @param {React.ElementType} [as='div'] - The element type to be rendered as the Flex container.
 * @param {React.ReactNode} children - Elements to be included inside the Flex container.
 * @param {string} className - Additional custom classes to enhance or modify the default styling.
 * @param {'row' | 'column'} direction - Direction which children are laid out in the Flex container.
 * @param {'start' | 'center' | 'end' | 'baseline' | 'stretch'} align - Align children vertically or horizontally (dependent on `direction`).
 * @param {'center' | 'start' | 'end' | 'between'} justify - Control the distribution of children along main axis.
 * @returns {React.ReactNode} The React component rendering the Flex container with applied styles.
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({as: Component = 'div', children, className = '', ...props}, ref) => {
    const classes = cx(flex(props), className);

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  },
);

interface GridProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5;
  rows?: 1 | 2 | 3 | 4 | 5;
}

const grid = cva({
  base: ['grid'],
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
    },
    rows: {
      1: 'grid-rows-1',
      2: 'grid-rows-2',
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
    },
    gap: {
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      7: 'gap-7',
      8: 'gap-8',
    },
  },
});

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({children, className, ...props}, ref) => {
    const classes = cx(grid(props), className);

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  },
);

interface BackgroundProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5;
  rows?: 1 | 2 | 3 | 4 | 5;
}

const background = cva({
  base: ['grid', 'absolute', 'z-0', 'inset-0', 'pointer-events-none'],
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
    },
    rows: {
      1: 'grid-rows-1',
      2: 'grid-rows-2',
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
    },
  },
  defaultVariants: {
    columns: 2,
  },
});

export const Background = React.forwardRef<HTMLDivElement, BackgroundProps>(
  ({children, className, ...props}, ref) => {
    const classes = cx(background(props), className);

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  },
);

// /**
//  * Grid
//  */
// const grid = cva({
//   base: 'grid',
//   variants: {
//     gridTemplateColumns: {
//       three: 'grid-cols-3',
//     },
//   },
//   defaultVariants: {
//     gridTemplateColumns: 'three',
//   },
// });

// export const Grid = React.forwardRef((props, ref) => (
//   <div ref={ref} className={grid(props)} {...props} />
// ));

// // export const Section = React.forwardRef((props, ref) => (
// //   <section ref={ref} className={box(props)} {...props} />
// // ));

// const container = cva({
//   base: 'container mx-auto px-4',
//   variants: {
//     size: {
//       small: 'max-w-sm',
//       large: 'max-w-7xl',
//     },
//   },
//   defaultVariants: {
//     size: 'large',
//   },
// });

// export const Container = React.forwardRef((props, ref) => (
//   <div ref={ref} className={container(props)} {...props} />
// ));
