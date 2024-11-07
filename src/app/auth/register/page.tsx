'use client';

import Input from '@/components/form/Input';
import NextImage from '@/components/NextImage';
import { Button } from '@/components/nextui-extend-variants/Button';
import Link from 'next/link';
import LogoGoogle from '@/contents/LogoGoogle';
import SelectInput from '@/components/form/SelectInput';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import * as React from 'react';

export default function Register() {
  return (
    <>
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
                id='Username/Email'
                label='Username/Email'
                labelPlacement='outside'
                placeholder='Input your Username or Email'
                variant='bordered'
              />
            </div>
            <div className='flex w-full h-full'>
              <Input
                id='Password'
                label='Password'
                labelPlacement='outside'
                placeholder='Input your password'
                variant='bordered'
              />
            </div>
            <div className='flex w-full h-full'>
              <Input
                id='search'
                label='Confirm your Password'
                labelPlacement='outside'
                placeholder='Input your password again'
                variant='bordered'
              />
            </div>
            <div className='flex w-full h-full'>
              <SelectInput
                id='Faculty'
                label='Faculty'
                labelPlacement='outside'
                placeholder='Input your faculty'
                variant='bordered'
              ></SelectInput>
            </div>
            <div className='flex w-full h-full'>
              <SelectInput
                id='Major'
                label='Major'
                labelPlacement='outside'
                placeholder='Input your major'
                variant='bordered'
              ></SelectInput>
            </div>
          </div>
          <div className='flex w-full h-full'>
            <Button
              as={Link}
              href='/'
              size='md'
              color='primary'
              className='w-full h-[44px]'
            >
              Create Account
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
              Login With Google
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
    </>
  );
}
