'use client';
import Layout from '@/layouts/Layout';
import NextImage from '@/components/NextImage';
import { SelectItem } from '@nextui-org/react';
import SearchFilter from '@/components/form/SearchFilter';
import * as React from 'react';
import { Button } from '@/components/nextui-extend-variants/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Layout>
        <main className='flex flex-col items-center sm:items-start justify-center'>
          <section className='flex flex-row w-full h-full py-28 px-[80px] gap-[47px] justify-center items-center'>
            {/*Left Side*/}
            <div className='flex flex-col w-full h-full justify-center items-center'>
              <h1 className='text-[64px] font-bold'>
                Welcome to Our Integrated Learning Platform
              </h1>
              <p className='text-2xl font-normal'>
                Receive constructive anonymous feedback from professors and
                peers to improve your learning quality
              </p>
              <div className='flex flex-row gap-[30px] mt-[60px] w-full h-fit justify-start'>
                <Button as={Link} size='sm' color='primary' href='/module'>
                  Share Modules
                </Button>
                <Button
                  as={Link}
                  size='sm'
                  color='primary'
                  variant='bordered'
                  href='/lecture'
                >
                  Search Lecturer
                </Button>
              </div>
            </div>
            {/*Right Side*/}
            <div className='flex flex-col w-fit h-fit justify-center items-center'>
              <div className='h-fit w-fit'>
                <NextImage
                  src='/landing-page/hero.png'
                  alt='Asset register'
                  width={891}
                  height={1003}
                  className='w-[400px] h-auto'
                />
              </div>
            </div>
          </section>
          <section className='flex flex-col w-full h-full py-72 px-52 rounded-[30px] justify-center items-center bg-primary-500'>
            <div className='flex flex-col gap-11 justify-center items-center'>
              <h1 className='font-semibold text-[55px] text-white'>
                Search modules or Lecturer
              </h1>
              <SearchFilter>
                <SelectItem key='Module' value='Module'>
                  Module
                </SelectItem>
                <SelectItem key='Lecture' value='Lecture'>
                  Lecture
                </SelectItem>
              </SearchFilter>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
