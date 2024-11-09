'use client';
import { extendVariants, Select as NextUISelect } from '@nextui-org/react';

export const Select = extendVariants(NextUISelect, {
  variants: {
    variant: {
      bordered: {
        trigger:
          'data-[hover=true]:border-default-400 data-[focus=true]:border-default-400 data-[open=true]:border-default-400',
      },
    },
    size: {
      sm: {
        trigger: 'h-[41px] min-h-[41px] ',
        input: 'text-tiny text-default-500 placeholder-default-500',
        label: 'text-base pr-[10px]',
      },
      md: {
        trigger: 'h-[44px] min-h-[44px]',
        input: 'text-small text-default-500 placeholder-default-500',
        label: 'text-base md:text-lg pr-[17.5px]',
      },
      lg: {
        trigger: 'h-[54px] min-h-[54px]',
        input: 'text-medium text-default-500 placeholder-default-500',
        label: 'text-xl pr-[21px]',
      },
      search: {
        trigger: 'w-[146px] h-[64px] min-h-[64px] rounded-none bg-white',
        input: 'text-medium text-black placeholder-default-500',
        label: 'text-xl pr-[21px]',
      },
    },
    labelPlacement: {
      inside: {
        label: 'font-semibold',
      },
      outside: {
        label: 'font-semibold',
      },
      'outside-left': {
        label: 'font-semibold',
      },
    },
    isInvalid: {
      true: {
        label: 'text-danger',
        trigger: 'placeholder:text-danger text-danger',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'bordered',
  },
});
