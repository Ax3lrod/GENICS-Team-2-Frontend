'use client';
import { extendVariants, Input } from '@nextui-org/react';

export const FormInput = extendVariants(Input, {
  variants: {
    variant: {
      bordered: {
        inputWrapper:
          'data-[hover=true]:border-default-400 group-data-[focus=true]:border-default-400',
      },
      textarea: {
        inputWrapper:
          'rounded-[6px] border-[3px] border-[var(--Foundation-Primary-primary-500,#007A89)] ' +
          'bg-[var(--Foundation-Primary-primary-50,#E6F2F3)] ' +
          'shadow-[4px_4px_4px_0px_rgba(179,231,237,0.15)]',
      },
      blue: {
        inputWrapper:
          'rounded-[10px] border-[3px] border-[var(--Foundation-Primary-primary-500,#007A89)] ' +
          'bg-white' +
          'shadow-[4px_4px_4px_0px_rgba(179,231,237,0.15)]',
        input: 'focus:bg-[#E6F2F3]',
        placeholder: 'text-black',
      },
    },
    size: {
      sm: {
        inputWrapper: 'h-[41px] min-h-[41px]',
        input: 'text-tiny text-default-500 placeholder-default-500',
        label: 'text-base pr-[10px]',
      },
      md: {
        inputWrapper: 'h-[44px] min-h-[44px]',
        input: 'text-small text-default-500 placeholder-default-500',
        label: 'text-base md:text-lg pr-[17.5px]',
      },
      lg: {
        inputWrapper: 'h-[54px] min-h-[54px]',
        input: 'text-medium text-default-500 placeholder-default-500',
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
        input: 'placeholder:text-danger text-danger',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'bordered',
  },
});
