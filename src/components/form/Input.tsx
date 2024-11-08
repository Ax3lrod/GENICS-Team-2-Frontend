'use client';
import React from 'react';
import {
  FieldError,
  get,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

import { FormInput } from '@/components/nextui-extend-variants/Input';
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
};

type InputProps = {
  id: string;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  size?: 'sm' | 'md' | 'lg';
  classNames?: classNames;
  variant?: 'bordered' | 'flat' | 'underlined' | 'faded' | undefined;
  label?: string;
  placeholder?: string;
  validation?: RegisterOptions;
  labelPlacement?: 'inside' | 'outside' | 'outside-left' | undefined;
  className?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  description?: string;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  defaultValue?: string;
  errorMessage?:
    | React.ReactNode
    | ((error: FieldError | undefined) => React.ReactNode);
  isDisabled?: boolean;
  onValueChange?: ((value: string) => void) | undefined;
  type?: string | undefined;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  id,
  variant,
  validation,
  size,
  label,
  placeholder,
  labelPlacement,
  className,
  isRequired,
  description,
  endContent,
  onValueChange,
  type,
  isDisabled,
  radius,
  classNames,
  errorMessage,
  startContent,
  defaultValue,
}: InputProps) {
  const formContext = useFormContext();

  const register = formContext ? formContext.register : () => {};
  const errors = formContext ? formContext.formState.errors : {};

  const error = get(errors, id) as FieldError | undefined;

  return (
    <FormInput
      {...register(id, validation)}
      variant={variant}
      label={label}
      placeholder={placeholder}
      labelPlacement={labelPlacement}
      className={clsxm(className)}
      isRequired={isRequired}
      isInvalid={Boolean(error)}
      errorMessage={
        typeof errorMessage === 'function' ? errorMessage(error) : errorMessage
      }
      description={description}
      startContent={startContent}
      endContent={endContent}
      onValueChange={onValueChange}
      type={type}
      isDisabled={isDisabled}
      defaultValue={defaultValue}
      radius={radius}
      size={size}
      classNames={classNames}
    />
  );
}
