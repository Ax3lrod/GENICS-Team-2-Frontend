'use client';
import * as React from 'react';
import { FieldError, RegisterOptions, useFormContext } from 'react-hook-form';

import { Select } from '@/components/nextui-extend-variants/Select';
import clsxm from '@/lib/clsxm';

type classNames = {
  base?: string;
  input?: string | string[];
  inputWrapper?: string;
  label?: string;
  helperText?: string;
  clearButton?: string;
  startContent?: string;
  endContent?: string;
  trigger?: string;
};

type SelectProps = {
  id: string;
  label?: string;
  selectedKeys?: string;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  size?: 'sm' | 'md' | 'lg';
  classNames?: classNames;
  placeholder?: string;
  variant?: 'bordered' | 'flat' | 'underlined' | 'faded' | undefined;
  labelPlacement?: 'inside' | 'outside' | 'outside-left' | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  validation?: RegisterOptions;
  className?: string;
  option?: string;
  onChange?: React.ChangeEvent<HTMLSelectElement>;
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
  size,
  validation,
  children,
  className,
  option,
  onChange,
  isDisabled,
  isRequired,
  description,
  radius,
  color,
  classNames,
  selectedKeys,
}: SelectProps) {
  const formContext = useFormContext();

  const register = formContext ? formContext.register : () => {};
  return (
    <Select
      {...register(id, validation)}
      label={label}
      variant={variant}
      placeholder={placeholder}
      labelPlacement={labelPlacement}
      className={clsxm(className)}
      onChange={onChange}
      isDisabled={isDisabled}
      {...(option ? { value: option } : {})}
      isRequired={isRequired}
      description={description}
      radius={radius}
      size={size}
      color={color}
      classNames={classNames}
      selectedKeys={selectedKeys}
    >
      {children}
    </Select>
  );
}
