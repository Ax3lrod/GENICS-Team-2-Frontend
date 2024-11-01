'use client';

import ModuleCard, { ModuleCardProps } from '@/components/ModuleCard';
import { Button } from '@/components/nextui-extend-variants/Button';
import Layout from '@/layouts/Layout';
import { Input } from '@nextui-org/input';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FiUpload } from 'react-icons/fi';
import { LuListFilter } from 'react-icons/lu';

export default function ModuleList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearch] = useState('');

  // DUMMY DATA, please replace with actual data when integrating with API
  const moduleList: ModuleCardProps[] = Array.from({ length: 15 }, (_, i) => ({
    moduleData: {
      id: `module-${i + 1}`,
      title:
        i % 2 == 0
          ? 'Object oriented programming'
          : 'Fundamentals of database systems',
      description:
        'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio  mattis.',
      updatedAt: '01 Nov 2024',
      createdAt: '01 Nov 2024',
      upvotes: Math.round(Math.random() * 100),
      downvotes: Math.round(Math.random() * 100),
      user: {
        username: `User ${i + 1}`,
      },
    },
    detailUrl: `/module/${i + 1}`,
    illustrationUrl:
      i % 2 == 0
        ? '/images/module/computer.png'
        : '/images/module/statistic.png',
    isActive: i === 0,
  }));
  return (
    <Layout>
      <div className='min-h-svh overflow-x-hidden px-6 py-10 md:py-16 lg:py-24 flex flex-col gap-20'>
        <div className='flex flex-col md:flex-row md:items-center gap-6 w-full max-w-4xl mx-auto'>
          <Input
            isClearable
            variant='flat'
            aria-label='Search modules'
            placeholder='Search modules...'
            onClear={() => setSearch('')}
            onInput={(e) => setSearch(e.currentTarget.value)}
            startContent={
              <BiSearch className='h-6 md:h-8 w-6 md:w-8 text-gray-400' />
            }
            classNames={{
              inputWrapper: ['!bg-primary-50 px-4 md:px-8', 'h-auto'],
              innerWrapper: ['gap-4 md:gap-8'],
              input: ['py-4 text-lg md:text-2xl !text-gray-500'],
              clearButton: ['text-xl md:text-3xl text-gray-400'],
            }}
          />
          <div className='flex gap-6 items-center max-md:justify-end'>
            <Button
              as={Link}
              href='/module/upload-module'
              size='lg'
              className='!h-14 md:!h-16 bg-primary-400'
            >
              <div className='flex items-center gap-2 text-base md:text-xl lg:text-2xl'>
                <FiUpload className='h-4 md:h-6 w-4 md:w-6' />
                Upload
              </div>
            </Button>
            <Button
              size='lg'
              className='!h-14 md:!h-16 bg-primary-400 !min-w-fit'
            >
              <LuListFilter className='h-4 md:h-6 w-4 md:w-6' />
            </Button>
          </div>
        </div>

        <div className='relative'>
          <Image
            src='/images/module/cloud.svg'
            alt='cloud'
            width={100}
            height={100}
            className='hidden md:block object-fit w-[12%] min-w-32 max-w-48 absolute bottom-0 left-0 transform -translate-x-1/3'
          />
          <Image
            src='/images/module/cloud.svg'
            alt='cloud'
            width={100}
            height={100}
            className='hidden md:block object-fit w-[12%] min-w-32 max-w-48 absolute bottom-1/2 right-0 transform translate-x-1/3'
          />
          <div className='relative z-10 flex flex-col items-center gap-4 md:w-11/12 max-w-5xl mx-auto'>
            <h3 className='text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800'>
              Module List
            </h3>
            <p className='text-base md:text-xl lg:text-2xl text-center font-medium text-gray-800 tracking-widest'>
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 md:w-fit gap-6 mx-auto'>
          {moduleList?.length ? (
            moduleList.map((module) => (
              <ModuleCard
                className='!w-full'
                key={module.moduleData.id}
                detailUrl={module.detailUrl}
                illustrationUrl={module.illustrationUrl}
                moduleData={module.moduleData}
                isActive={module.isActive}
              />
            ))
          ) : (
            <p>No Module yet</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
