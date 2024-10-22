import * as React from 'react';
import {
  Controller,
  FieldError,
  get,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

import { FormSelect } from '@/components/nextui-extend-variants/Select';
import clsxm from '@/lib/clsxm';

type SelectProps = {
  id: string;
  label: string;
  placeholder?: string;
  variant: 'bordered' | 'flat' | 'underlined' | 'faded' | undefined;
  labelPlacement: 'inside' | 'outside' | 'outside-left' | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  validation?: RegisterOptions;
  className?: string;
  option: string;
  onChangeFn?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
  isRequired?: boolean;
  description?: React.ReactNode;
  errorMessage?:
    | React.ReactNode
    | ((v: FieldError | undefined) => React.ReactNode);
} & React.ComponentPropsWithoutRef<'select'>;

export default function SelectInput({
  id,
  label,
  variant,
  placeholder,
  labelPlacement,
  validation,
  children,
  className,
  option,
  onChangeFn,
  isDisabled,
  isRequired,
  description,
  errorMessage,
}: SelectProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);
  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({ field }) => (
        <FormSelect
          label={label}
          variant={variant}
          placeholder={placeholder}
          labelPlacement={labelPlacement}
          className={clsxm(className, error && 'rounded-xl bg-red-200')}
          onChange={(e) => {
            field.onChange(e);
            if (onChangeFn) {
              onChangeFn(e);
            }
          }}
          errorMessage={
            errorMessage && typeof errorMessage === 'function'
              ? errorMessage(error)
              : errorMessage
          }
          isDisabled={isDisabled}
          {...(option ? { selectedKeys: [option] } : {})}
          value={field.value}
          isRequired={isRequired}
          description={description}
        >
          {children}
        </FormSelect>
      )}
    />
  );
}