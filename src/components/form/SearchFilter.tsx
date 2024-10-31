'use client';
import Input from './Input';
import SelectInput from './SelectInput';
import { Button } from '@nextui-org/react';

export default function SearchFilter({
  children,
}: {
  children?: React.ReactNode[];
}) {
  return (
    <div className='flex flex-row justify-center items-end'>
      <Input
        id='search'
        placeholder='Search modules or lecturer....'
        classNames={{
          inputWrapper:
            'w-[800px] h-[64px] min-h-[64px] rounded-none rounded-l-[10px] bg-white dark:bg-white',
          input: [
            'text-black/90 dark:text-black/90',
            'placeholder:text-default-700/50',
          ],
          label: 'text-xl text-black pr-[21px]',
        }}
      />
      <SelectInput
        placeholder='Choose type'
        classNames={{
          trigger:
            'w-[146px] h-[64px] min-h-[64px] rounded-none bg-white dark:bg-white',
          input: [
            'text-black/90 dark:text-black/90',
            'placeholder:text-default-700/50',
          ],
          label: 'text-xl text-black pr-[21px]',
        }}
      >
        {children}
      </SelectInput>
      <div className='flex w-[146px] h-[64px] rounded-[10px]'>
        <Button
          // onClick={prevStage}
          variant={undefined}
          className='flex w-[146px] h-[64px] rounded-[10px] bg-primary-200 text-white'
        >
          Search
        </Button>
      </div>
    </div>
  );
}
