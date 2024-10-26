import * as React from 'react';
import { SelectItem } from '@nextui-org/react';
import {
  // Controller,
  FieldError,
  // get,
  RegisterOptions,
  // useFormContext,
} from 'react-hook-form';

import { FormSelect } from '@/components/nextui-extend-variants/Select';
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
  id?: string;
  label?: string;
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
  children?: JSX.Element | JSX.Element[];
  validation?: RegisterOptions;
  className?: string;
  option?: string;
  onChangeFn?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
  isRequired?: boolean;
  description?: React.ReactNode;
  errorMessage?:
    | React.ReactNode
    | ((v: FieldError | undefined) => React.ReactNode);
} & React.ComponentPropsWithoutRef<'select'>;

export default function SelectInput({
  // id,
  label,
  variant,
  placeholder,
  labelPlacement,
  size,
  // validation,
  children,
  className,
  option,
  // onChangeFn,
  isDisabled,
  isRequired,
  description,
  // errorMessage,
  radius,
  color,
  classNames,
}: SelectProps) {
  // const {
  //   control,
  //   formState: { errors },
  // } = useFormContext();

  // const error = get(errors, id);
  return (
    // <Controller
    //   control={control}
    //   name={id}
    //   rules={validation}
    //   render={({ field }) => (
    <FormSelect
      label={label}
      variant={variant}
      placeholder={placeholder}
      labelPlacement={labelPlacement}
      className={clsxm(className, {
        /*error && 'rounded-xl bg-red-200'*/
      })}
      // onChange={(e) => {
      //   field.onChange(e);
      //   if (onChangeFn) {
      //     onChangeFn(e);
      //   }
      // }}
      // errorMessage={
      //   errorMessage && typeof errorMessage === 'function'
      //     ? errorMessage(error)
      //     : errorMessage
      // }
      isDisabled={isDisabled}
      {...(option ? { selectedKeys: [option] } : {})}
      // value={field.value}
      isRequired={isRequired}
      description={description}
      radius={radius}
      size={size}
      color={color}
      classNames={classNames}
    >
      {children}
    </FormSelect>
    // )}
    // />
  );
}
