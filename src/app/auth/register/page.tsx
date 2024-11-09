'use client';

import Input from '@/components/form/Input';
import { SelectItem } from '@nextui-org/react';
import NextImage from '@/components/NextImage';
import { Button } from '@/components/nextui-extend-variants/Button';
import { Select } from '@/components/nextui-extend-variants/Select';
import Link from 'next/link';
import { RegisterRequest } from '@/types/auth/regist';
import { serialize } from 'object-to-formdata';
import { facultyList } from '@/contents/faculty';
import { majorList } from '@/contents/major';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import LogoGoogle from '@/contents/LogoGoogle';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { REG_EMAIL, REG_PASSWORD } from '@/contents/regex';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useRegistMutation } from './hooks/mutation';
import * as React from 'react';

export default function Register() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [passwordValue, setValuePassword] = React.useState('');
  const [emailValue, setValueEmail] = React.useState('');

  const toggleVisibility = () => setIsVisible(!isVisible);

  const methods = useForm<RegisterRequest>({
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    formState: { isValid },
    register,
    watch,
  } = methods;

  const { handleRegist, isPending } = useRegistMutation();

  const onSubmit: SubmitHandler<RegisterRequest> = (data) => {
    serialize(
      handleRegist({
        username: data.email,
        email: data.email,
        faculty: data.faculty,
        major: data.major,
        password: data.password,
      }),
    );
  };

  const password = watch('password');
  const faculty = watch('faculty');

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full h-full lg:w-screen lg:h-screen flex bg-white'
      >
        <div className='flex flex-col w-full h-full lg:w-screen lg:h-screen justify-center items-center lg:flex-row bg-white'>
          <section className='relative flex flex-col justify-center items-center w-full h-full '>
            <div className='w-full h-full'>
              <NextImage
                src='/register/background.png'
                alt='Asset register'
                width={747}
                height={1026}
                className='w-full h-full'
                imgClassName='w-full h-full'
              />
              <div className='absolute z-0 w-fit h-fit top-11 left-11'>
                <NextImage
                  src='/register/logo-white.png'
                  alt='Asset register'
                  width={159}
                  height={91}
                  className='max-w-full h-auto'
                />
              </div>
              <div className='absolute z-0 w-fit h-fit top-[136px] left-[309px]'>
                <NextImage
                  src='/register/asset-1.png'
                  alt='Asset register'
                  width={311}
                  height={206}
                  className='max-w-full h-full'
                />
              </div>
              <div className='absolute z-0 w-fit h-fit top-48 md:top-72 left-2.5'>
                <NextImage
                  src='/register/asset-2.png'
                  alt='Asset register'
                  width={121}
                  height={67}
                  className='max-w-full h-full'
                />
              </div>
              <div className='absolute z-0 w-fit h-fit top-[300px] md:top-[473px] left-10'>
                <NextImage
                  src='/register/person.png'
                  alt='Asset register'
                  width={478}
                  height={394}
                  className='w-[250px] h-auto md:w-[478px] lg:w-[350px] md:h-auto'
                />
              </div>
              <div className='absolute z-0 w-fit h-fit bottom-[31px] left-[508px] lg:left-[450px]'>
                <NextImage
                  src='/register/asset-3.png'
                  alt='Asset register'
                  width={142}
                  height={79}
                  className='max-w-full h-full lg:w-[142px] lg:h-auto'
                />
              </div>
            </div>
          </section>
          <section className='flex flex-col justify-center items-center w-full h-full py-[93px] px-[32px] md:px-[109px] gap-[30px] lg:overflow-y-auto'>
            <div className='relative flex flex-row justify-center items-center w-full h-full'>
              <Link href='/auth'>
                <IoArrowBackCircleOutline className='absolute w-[49px] h-[49px] left-0 -translate-x-24' />
              </Link>
              <p className='text-5xl font-semibold lg:text-4xl'>
                {' '}
                Create your Account{' '}
              </p>
            </div>
            <div className='flex flex-col w-full h-full gap-11'>
              <div className='flex w-full h-full'>
                <Input
                  id='email'
                  label='Username/Email'
                  labelPlacement='outside'
                  placeholder='Input your Username or Email'
                  variant='bordered'
                  isRequired
                  validation={{
                    required: true,
                    pattern: {
                      value: REG_EMAIL,
                      message: '',
                    },
                  }}
                  value={emailValue}
                  onValueChange={setValueEmail}
                  {...register('email')}
                />
              </div>
              <div className='flex w-full h-full'>
                <Input
                  id='password'
                  label='Password'
                  labelPlacement='outside'
                  placeholder='Input your password'
                  variant='bordered'
                  isRequired
                  validation={{
                    required: true,
                    pattern: {
                      value: REG_PASSWORD,
                      message: '',
                    },
                  }}
                  endContent={
                    <button
                      className='focus:outline-none'
                      type='button'
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <FaRegEye className='pointer-events-none text-2xl text-default-400' />
                      ) : (
                        <FaRegEyeSlash className='pointer-events-none text-2xl text-default-400' />
                      )}
                    </button>
                  }
                  type={isVisible ? 'text' : 'password'}
                  description='Mengandung huruf kecil, huruf besar, dan angka dengan panjang minimal 8 karakter.'
                  {...register('password')}
                />
              </div>
              <div className='flex w-full h-full'>
                <Input
                  id='confirm_password'
                  label='Confirm your Password'
                  labelPlacement='outside'
                  placeholder='Input your password again'
                  variant='bordered'
                  isRequired
                  value={passwordValue}
                  onValueChange={setValuePassword}
                  endContent={
                    <button
                      className='focus:outline-none'
                      type='button'
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <FaRegEye className='pointer-events-none text-2xl text-default-400' />
                      ) : (
                        <FaRegEyeSlash className='pointer-events-none text-2xl text-default-400' />
                      )}
                    </button>
                  }
                  type={isVisible ? 'text' : 'password'}
                  validation={{
                    required: true,
                    validate: (value) =>
                      value === password || 'Password tidak cocok',
                  }}
                />
              </div>
              <div className='flex w-full h-full'>
                <Select
                  id='faculty'
                  label='Faculty'
                  labelPlacement='outside'
                  isRequired
                  placeholder='Input your faculty'
                  variant='bordered'
                  {...register('faculty')}
                >
                  {facultyList.map((faculty) => (
                    <SelectItem key={faculty.faculty} value={faculty.faculty}>
                      {faculty.faculty}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className='flex w-full h-full'>
                <Select
                  id='major'
                  label='Major'
                  isRequired
                  labelPlacement='outside'
                  placeholder='Input your major'
                  variant='bordered'
                  {...register('major')}
                >
                  {majorList
                    .filter((item) => item.faculty == faculty)
                    .map((data) => (
                      <SelectItem key={data.major} value={data.major}>
                        {data.major}
                      </SelectItem>
                    ))}
                </Select>
              </div>
            </div>
            <div className='flex w-full h-full'>
              <Button
                type='submit'
                isLoading={isPending}
                isDisabled={!isValid}
                size='md'
                color='primary'
                className='w-full h-[44px]'
              >
                <span className='text-xs lg:text-base'>Create Account</span>
              </Button>
            </div>
            <div className='flex w-full h-full items-center'>
              <div className='flex-grow border-t border-black'></div>
              <span className='flex-shrink mx-4 text-black text-2xl'>
                Or With
              </span>
              <div className='flex-grow border-t border-black'></div>
            </div>
            <div className='flex w-full h-full'>
              <Button
                as={Link}
                size='md'
                color='primary'
                href='www.google.com'
                variant='bordered'
                className='w-full h-[44px]'
                startContent={<LogoGoogle />}
              >
                <span className='text-xs lg:text-base'>Login With Google</span>
              </Button>
            </div>
            <p className='text-xs lg:text-2xl'>
              Already have an account?{' '}
              <Link href='/auth/login'>
                <span className='text-primary-500 font-semibold'>Log in</span>
              </Link>
            </p>
          </section>
        </div>
      </form>
    </FormProvider>
  );
}
