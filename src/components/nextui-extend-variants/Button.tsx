import { extendVariants, Button as NextUIButton } from '@nextui-org/react';

export const Button = extendVariants(NextUIButton, {
  variants: {
    size: {
      xs: 'px-[22px] h-10 text-base font-semibold gap-1 rounded-md',
      sm: 'px-[22px] h-[50px] text-lg font-semibold gap-2 rounded-md',
      md: 'px-[22px] h-[60px] text-2xl font-semibold gap-3 rounded-lg',
      lg: 'px-[22px] h-[70px] text-[28px] font-semibold gap-4 rounded-[10px]',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'xs',
  },
});
