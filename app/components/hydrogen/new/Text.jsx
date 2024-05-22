import {forwardRef} from 'react';
import {cva} from './utils';

const text = cva({
  variants: {
    base: ['text-black/70', 'w-full', 'max-w-prose'],
    size: {
      1: 'text-xs', // 12/16 - 0.75rem
      2: 'text-sm', // 14/20 - 0.875rem
      3: 'text-base', // 16/24 - 1rem
      4: 'text-lg', // 18/28 - 1.125rem
      5: 'text-xl', // 20/28 - 1.25rem
      6: 'text-2xl', // 24/32 - 1.5rem
      7: 'text-3xl', // 30/36 - 1.875rem
      8: 'text-4xl', // 36/40 - 2.25rem
      9: 'text-5xl', // 48/48 - 3rem
    },
    width: {
      narrow: 'max-w-prose-narrow',
      wide: 'max-w-prose-wide',
      full: 'max-w-full',
    },
    weight: {
      light: 'font-light',
      regular: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    wrap: {
      wrap: 'text-wrap',
      nowrap: 'text-nowrap',
      pretty: 'text-pretty',
      balance: 'text-balance',
    },
    color: {
      black: 'text-black',
      accent: 'text-accent',
      white: 'text-white',
      gray: 'text-gray',
    },
    truncate: {
      true: 'truncate',
      false: null,
    },
    uppercase: {
      true: 'uppercase',
      false: null,
    },
  },
  defaultVariants: {
    truncate: false,
    uppercase: false,
    size: 3,
  },
});

export const Text = forwardRef(
  ({as: Component = 'span', children, className, ...props}, ref) => {
    return (
      <Component
        ref={ref}
        className={text({
          ...props,
          className,
        })}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

const heading = cva({
  variants: {
    size: {
      1: 'text-base', // 16/24 - 1rem
      2: 'text-lg', // 18/28 - 1.125rem
      3: 'text-xl', // 20/28 - 1.25rem
      4: 'text-4xl', // 36/40 - 2.25rem
      5: 'text-5xl', // 48/48 - 3rem
      6: 'text-6xl', // 60/60 - 3.75rem
      7: 'text-7xl', // 72/72 - 4.5rem
      8: 'text-8xl', // 96/96 - 6rem
      9: 'text-9xl', // 128/128 - 8rem
    },
    weight: {
      light: 'font-light',
      regular: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    wrap: {
      wrap: 'text-wrap',
      nowrap: 'text-nowrap',
      pretty: 'text-pretty',
      balance: 'text-balance',
    },
    color: {
      black: 'text-black',
      accent: 'text-accent',
      white: 'text-white',
      gray: 'text-gray',
    },
    uppercase: {
      true: 'uppercase',
      false: null,
    },
  },
  defaultVariants: {
    color: 'black',
    size: 5,
    weight: 'bold',
    wrap: 'pretty',
  },
});

export const Heading = forwardRef(
  ({as: Component = 'h2', children, className, ...props}, ref) => {
    return (
      <Component
        ref={ref}
        className={heading({
          ...props,
          className,
        })}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
