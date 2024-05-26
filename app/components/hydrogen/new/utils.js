import {defineConfig} from 'cva';
import {extendTailwindMerge} from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  override: {
    conflictingClassGroups: {
      // ↓ ID of class group which creates a conflict with…
      //           ↓ …classes from groups with these IDs
      //   Here we remove the default conflict between the font-size and leading class
      //   groups.
      'font-size': [],
    },
  },
});

export const {cva, cx, compose} = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});
