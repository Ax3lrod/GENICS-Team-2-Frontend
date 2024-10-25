import { extendVariants, Input } from '@nextui-org/react';

export const FormInput = extendVariants(Input, {
  variants: {
    variant: {
      bordered: {
        inputWrapper:
          'data-[hover=true]:border-default-400 group-data-[focus=true]:border-default-400',
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
      search: {
        inputWrapper: 'w-[800px] h-[64px] min-h-[64px] rounded-none rounded-l-[10px] bg-white',
        input: 'text-medium text-black placeholder-default-500',
        label: 'text-xl pr-[21px]',
      }
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
