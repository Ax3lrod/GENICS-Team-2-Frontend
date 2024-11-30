'use client';

import Input from '@/components/form/Input';
import { SelectItem } from '@nextui-org/react';
import { Select } from '@/components/nextui-extend-variants/Select';
import UploadFile from '@/components/form/UploadFile';
import { facultyList } from '@/contents/faculty';
import { majorList } from '@/contents/major';
import * as React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { AddModuleRequest } from '@/types/module/module';
import { useAddModuleMutation } from './hooks/mutation';
import { serialize } from 'object-to-formdata';
import { Button } from '@/components/nextui-extend-variants/Button';
import NextImage from '@/components/NextImage';
import { DANGER_TOAST, showToast } from '@/components/Toast';
import withAuth from '@/components/hoc/withAuth';
import Link from 'next/link';

export default withAuth(UploadModulePage, 'private');
function UploadModulePage() {
  const methods = useForm<AddModuleRequest>({
    mode: 'onTouched',
    defaultValues: {
      title: '',
      description: '',
      faculty: '',
      department: '',
      course: '',
      file: '',
    },
  });

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = methods;

  const { handleUpload, isPending } = useAddModuleMutation();

  const faculty = watch('faculty');

  const onSubmit: SubmitHandler<AddModuleRequest> = (data) => {
    if (!data.title) {
      showToast('Module name is required', DANGER_TOAST);
      return;
    }
    if (!data.description) {
      showToast('Description is required', DANGER_TOAST);
      return;
    }
    if (!data.faculty) {
      showToast('Faculty is required', DANGER_TOAST);
      return;
    }
    if (!data.department) {
      showToast('Major is required', DANGER_TOAST);
      return;
    }

    const payload = {
      title: data.title,
      description: data.description,
      faculty: data.faculty,
      department: data.department,
      course: data.course,
      file: data.file,
    };

    serialize(handleUpload(payload));
  };

  return (
    <main className='w-full min-h-screen flex flex-col items-center bg-white px-12 lg:px-36 pt-16 gap-20 pb-16 relative'>
      <Link href='/'>
        <NextImage
          src='/login/loginbackbutton.png'
          alt='Back Button'
          width={49}
          height={49}
          className='absolute hidden lg:block w-[49px] h-[49px] left-10 top-10'
        />
        <NextImage
          src='/login/logo_mobile.png'
          alt='Logo ShareITS'
          width={75.72}
          height={43.37}
          className='absolute lg:hidden top-8 left-10'
        />
      </Link>
      <NextImage
        src='/module/upload/Awan.png'
        alt='awan'
        width={296.096}
        height={196.499}
        className='absolute bottom-0 right-0 z-0 max-md:w-44 max-md:h-auto'
      />
      <section className='w-full lg:w-3/5 h-fit flex flex-col items-center text-center text-gray-600 gap-5'>
        <h1 className='font-semibold lg:text-6xl text-2xl text-black'>
          Upload Module
        </h1>
        <h5 className='text-medium lg:text-2xl font-medium text-black'>
          Upload your learning modules in just a few clicks and reach people
          seeking new learning resources.
        </h5>
      </section>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-full h-fit flex lg:flex-row flex-col items-start gap-24 lg:justify-between'
        >
          <section className='w-full lg:w-1/2 h-full flex flex-col items-start gap-6'>
            <Input
              id='title'
              label='Module Name'
              placeholder='Enter module name'
              variant='blue'
              labelPlacement='outside'
              isRequired
              {...register('title', { required: 'Module name is required' })}
              errorMessage={errors.title?.message}
            />
            <Select
              id='faculty'
              label='Faculty'
              labelPlacement='outside'
              isRequired
              placeholder='Select your faculty'
              variant='blue'
              onChange={(e) => setValue('faculty', e.target.value)}
            >
              {facultyList.map((faculty) => (
                <SelectItem key={faculty.faculty} value={faculty.faculty}>
                  {faculty.faculty}
                </SelectItem>
              ))}
            </Select>
            {errors.faculty && (
              <p className='text-red-500'>{errors.faculty?.message}</p>
            )}
            <Select
              id='department'
              label='Department'
              labelPlacement='outside'
              isRequired
              placeholder='Select your department'
              variant='blue'
              onChange={(e) => setValue('department', e.target.value)}
            >
              {majorList
                .filter((item) => item.faculty === faculty)
                .map((data) => (
                  <SelectItem key={data.major} value={data.major}>
                    {data.major}
                  </SelectItem>
                ))}
            </Select>
            {errors.department && (
              <p className='text-red-500'>{errors.department?.message}</p>
            )}
            <Input
              id='course'
              label='Course'
              placeholder='Enter module course'
              variant='blue'
              labelPlacement='outside'
              isRequired
              {...register('course', { required: 'Course is required' })}
              errorMessage={errors.course?.message}
            />
            <Input
              id='description'
              label='Description'
              placeholder='Enter module description'
              variant='blue'
              labelPlacement='outside'
              isRequired
              {...register('description', {
                required: 'Description is required',
              })}
              errorMessage={errors.description?.message}
            />
          </section>
          <section className='w-full first-letter:lg:w-1/2 h-full flex flex-col gap-[18px] items-center'>
            <UploadFile
              id='file'
              title='Upload Module'
              description='Click or drag and drop to upload'
              variant='md'
              supportFiles={['.pdf', '.doc', '.docx']}
              accept={{
                'image/png': ['.pdf', '.doc', '.docx'],
              }}
              maxSize={2000000}
              isRequired={true}
            />
            <Button type='submit' fullWidth isLoading={isPending}>
              Publish Module
            </Button>
          </section>
        </form>
      </FormProvider>
    </main>
  );
}
