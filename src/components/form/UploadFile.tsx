'use client';

import { useState } from 'react';
import { Accept, FileRejection, useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { BsFileEarmarkRichtext } from 'react-icons/bs';
import { MdUploadFile } from 'react-icons/md';

type UploadFileProps = {
  id: string;
  supportFiles?: string[];
  accept?: Accept;
  className?: string;
  title: string;
  description?: string;
  isRequired?: boolean;
  variant: 'md' | 'lg';
  maxSize?: number;
};

export default function UploadFile({
  id,
  supportFiles = [],
  accept = {},
  className,
  title,
  description,
  isRequired = false,
  variant = 'md',
  maxSize = 2000000,
}: UploadFileProps) {
  const { setValue, clearErrors, watch } = useFormContext();
  const [error, setError] = useState<string | null>(null);

  // Watch for current file state
  const currentFile = watch(id);

  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length > 0) {
      const message =
        rejectedFiles[0].errors[0].code === 'file-too-large'
          ? 'File size is too large.'
          : 'Invalid file type.';
      setError(message);
    } else {
      setError(null);
      // Save the file to react-hook-form state
      setValue(id, acceptedFiles[0], { shouldValidate: true });
      clearErrors(id);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize,
    accept,
  });

  return (
    <section className={twMerge('flex flex-col w-full', className)}>
      <label
        className={twMerge(
          'text-[16px] md:text-[18px] font-semibold mb-2',
          isRequired
            ? "after:ml-0.5 after:text-danger after:content-['*']"
            : '',
        )}
        htmlFor={id}
      >
        {title}
      </label>
      <div
        className={twMerge(
          'flex flex-col gap-1 cursor-pointer p-4 border rounded-lg',
          error ? 'border-red-500' : 'border-primary-500 border-dashed',
          variant === 'lg' ? 'h-48' : 'h-48',
        )}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {currentFile ? (
          <div className='flex flex-col items-center justify-center h-full text-primary-500'>
            <div className='flex justify-center items-center'>
              <BsFileEarmarkRichtext className='mb-2' size={64} />
            </div>
            <p className='truncate w-full text-center'>
              {(currentFile as File).name}
            </p>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center h-full text-primary-500'>
            <div className='flex justify-center items-center'>
              <MdUploadFile className='mb-2' size={64} />
            </div>
            <h3 className='text-center font-semibold'>Upload File</h3>
            <p className='text-center'>{description}</p>
            {supportFiles.length > 0 && (
              <p className='mt-2 text-sm text-primary-500'>
                Supported file types: {supportFiles.join(', ')}
              </p>
            )}
          </div>
        )}
      </div>
      {error && <p className='text-sm text-red-500'>{error}</p>}
    </section>
  );
}
