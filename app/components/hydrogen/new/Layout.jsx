import React from 'react'

// Import configured class names generator functions with predetermined styles.
import { cx, cva } from './cva.config'

/**
 * Configuration for "cva" to generate a dynamic class string based on the provided flex configuration.
 */
const flex = cva({
  base: 'flex',
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
      right: 'flex-row',
      down: 'flex-col',
      left: 'flex-row-reverse',
      up: 'flex-col-reverse',
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
      6: 'gap-6',
      7: 'gap-7',
      8: 'gap-8',
    },
    resizeX: {
      hug: 'w-auto',
      fill: 'w-full',
      fixed: '',
    },
    resizeY: {
      hug: 'h-auto',
      fill: 'h-full',
      fixed: '',
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'start',
    justify: 'start',
    resizeX: 'hug',
    resizeY: 'hug',
  },
})

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
export const Flex = React.forwardRef(
  (
    {
      as: Component = 'div',
      children,
      className = '',
      ...props
    },
    ref,
  ) => {
    const classes = cx(flex(props), className)

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    )
  },
)

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
    resizeX: {
      hug: 'w-auto',
      fill: 'w-full',
      fixed: '',
    },
    resizeY: {
      hug: 'h-auto',
      fill: 'h-full',
      fixed: '',
    },
  },
  defaultVariants: {
    gap: 4,
    resizeX: 'hug',
    resizeY: 'hug',
  },
})

export const Grid = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    const classes = cx(grid(props), className)

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    )
  },
)

const background = cva({
  base: [
    'grid',
    'absolute',
    'z-0',
    'inset-0',
    'pointer-events-none',
  ],
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
})

export const Background = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    const classes = cx(background(props), className)

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    )
  },
)

const container = cva({
  base: [
    'mx-auto',
    'px-4',
    'md:px-8',
    'lg:px-10',
    'w-full',
  ],
  variants: {
    fluid: {
      true: 'max-w-none',
      false: 'max-w-7xl',
    },
    resizeX: {
      hug: 'w-auto',
      fill: 'w-full',
      fixed: '',
    },
    resizeY: {
      hug: 'h-auto',
      fill: 'h-full',
      fixed: '',
    },
  },
  defaultVariants: {
    fluid: false,
    resizeX: 'hug',
    resizeY: 'hug',
  },
})

export const Container = React.forwardRef(
  (
    {
      as: Component = 'div',
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const classes = cx(container(props), className)

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    )
  },
)

const section = cva({
  base: ['w-full', 'relative', 'min-h-8'],
  variants: {
    padded: {
      true: 'py-8', // Tailwind classes for padding (you can change as needed)
      false: '',
    },
  },
  defaultVariants: {
    padded: true,
  },
})

export const Section = React.forwardRef(
  (
    {
      as: Component = 'section',
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const classes = cx(section(props), className)

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    )
  },
)
