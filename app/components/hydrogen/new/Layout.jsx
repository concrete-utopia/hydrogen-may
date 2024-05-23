import {forwardRef} from 'react';
import {cx, cva, compose} from './utils';

const layout = cva({
  variants: {
    p: {
      0: 'p-0',
      1: 'p-1',
      2: 'p-2',
      3: 'p-3',
      4: 'p-4',
      5: 'p-6',
      6: 'p-8',
      7: 'p-10',
      8: 'p-12',
      9: 'p-16',
    },
    px: {
      0: 'px-0',
      1: 'px-1',
      2: 'px-2',
      3: 'px-3',
      4: 'px-4',
      5: 'px-6',
      6: 'px-8',
      7: 'px-10',
      8: 'px-12',
      9: 'px-16',
    },
    py: {
      0: 'py-0',
      1: 'py-1',
      2: 'py-2',
      3: 'py-3',
      4: 'py-4',
      5: 'py-6',
      6: 'py-8',
      7: 'py-10',
      8: 'py-12',
      9: 'py-16',
    },
    m: {
      0: 'm-0',
      1: 'm-1',
      2: 'm-2',
      3: 'm-3',
      4: 'm-4',
      5: 'm-6',
      6: 'm-8',
      7: 'm-10',
      8: 'm-12',
      9: 'm-16',
    },
    mx: {
      0: 'mx-0',
      1: 'mx-1',
      2: 'mx-2',
      3: 'mx-3',
      4: 'mx-4',
      5: 'mx-6',
      6: 'mx-8',
      7: 'mx-10',
      8: 'mx-12',
      9: 'mx-16',
    },
    my: {
      0: 'my-0',
      1: 'my-1',
      2: 'my-2',
      3: 'my-3',
      4: 'my-4',
      5: 'my-6',
      6: 'my-8',
      7: 'my-10',
      8: 'my-12',
      9: 'my-16',
    },
    resizeX: {
      hug: 'w-auto',
      fill: 'w-full',
      fixed: '',
    },
    resizeY: {
      hug: 'h-auto',
      fill: ['h-inherit', 'min-h-inherit'],
      fixed: '',
    },
    position: {
      relative: 'relative',
      absolute: 'absolute',
      fixed: 'fixed',
      sticky: 'sticky',
      static: 'static',
    },
  },
});

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
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-6',
      6: 'gap-8',
      7: 'gap-10',
      8: 'gap-12',
      9: 'gap-16',
    },
    wrap: 'flex-wrap',
  },
  defaultVariants: {
    direction: 'row',
    align: 'start',
    justify: 'start',
    resizeX: 'hug',
    resizeY: 'hug',
  },
});

export const Flex = forwardRef(
  ({as: Component = 'div', children, className, ...props}, ref) => {
    const styles = compose(layout, flex);

    return (
      <Component ref={ref} className={styles({...props, className})} {...props}>
        {children}
      </Component>
    );
  },
);

const grid = cva({
  base: ['grid'],
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    },
    rows: {
      1: 'grid-rows-1',
      2: 'grid-rows-2',
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
      6: 'grid-rows-6',
      7: 'grid-rows-7',
      8: 'grid-rows-8',
      9: 'grid-rows-9',
      10: 'grid-rows-10',
      11: 'grid-rows-11',
      12: 'grid-rows-12',
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
      9: 'gap-9',
      10: 'gap-10',
      11: 'gap-11',
      12: 'gap-12',
    },
  },
  defaultVariants: {
    gap: 4,
    resizeX: 'hug',
    resizeY: 'hug',
  },
});

export const Grid = forwardRef(({children, className, ...props}, ref) => {
  const styles = compose(layout, grid);

  return (
    <div ref={ref} className={styles({...props, className})} {...props}>
      {children}
    </div>
  );
});

const background = cva({
  base: [
    'grid',
    'overflow-hidden',
    'absolute',
    'z-0',
    'inset-0',
    'pointer-events-none',
  ],
  variants: {
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
    columns: 1,
  },
});

export const Background = forwardRef(({children, className, ...props}, ref) => {
  return (
    <div ref={ref} className={background({...props, className})} {...props}>
      {children}
    </div>
  );
});

export const Container = forwardRef(
  ({as: Component = 'div', children, className, ...props}, ref) => {
    const container = cva({
      base: [
        'mx-auto',
        'px-4',
        'md:px-8',
        'lg:px-10',
        'w-full',
        'relative',
        'z-10',
      ],
      variants: {
        fluid: {
          true: 'max-w-none',
          false: 'max-w-7xl',
        },
      },
      defaultVariants: {
        resizeX: 'hug',
        resizeY: 'hug',
        fluid: false,
      },
    });

    const styles = compose(layout, container);

    return (
      <Component ref={ref} className={styles({...props, className})} {...props}>
        {children}
      </Component>
    );
  },
);

const section = cva({
  base: ['w-full', 'relative', 'min-h-8'],
  variants: {
    padding: {true: 'py-16', false: null},
    defaultVariants: {
      padding: false,
    },
  },
});

export const Section = forwardRef(
  ({as: Component = 'section', children, className, ...props}, ref) => {
    return (
      <Component
        ref={ref}
        className={section({...props, className})}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
