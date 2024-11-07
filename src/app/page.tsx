'use client';
import Layout from '@/layouts/Layout';
import NextImage from '@/components/NextImage';
import { SelectItem } from '@nextui-org/react';
import SearchFilter from '@/components/form/SearchFilter';
import * as React from 'react';
import { Button } from '@/components/nextui-extend-variants/Button';
import Link from 'next/link';
import ModuleCard from '@/components/ModuleCard';

export default function Home() {
  const ModuleDetail = {
    id: '01',
    title: 'Object-Oriented Programming',
    description:
      'Start your journey in web development by exploring the basics of HTML, CSS, and JavaScript.',
    upvotes: 10,
    downvotes: 2,
    createdAt: '10-11-2024',
    updatedAt: '10-11-2024',
    user: {
      username: 'awan',
    },
  };

  const Data = {
    detailUrl: 'www.google.com',
    illustrationUrl: '/images/loginawan1.png',
    moduleData: ModuleDetail,
    isActive: true,
  };

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
          {/*Section 2*/}
          <section className='relative flex flex-col w-full h-full py-72 px-52 rounded-[30px] justify-center items-center bg-primary-500'>
            {/*Content*/}
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
            {/*Background*/}
            <div className='absolute z-0 w-fit h-fit bottom-0 left-6'>
              <NextImage
                src='/landing-page/asset-1.png'
                alt='Asset landing page'
                width={397}
                height={204}
                className='max-w-full h-auto'
              />
            </div>
            <div className='absolute z-0 w-fit h-fit top-[182px] left-32'>
              <NextImage
                src='/landing-page/asset-2.png'
                alt='Asset landing page'
                width={75}
                height={46}
                className='max-w-full h-auto'
              />
            </div>
            <div className='absolute z-0 w-fit h-fit top-24 right-4'>
              <NextImage
                src='/landing-page/asset-3.png'
                alt='Asset landing page'
                width={97}
                height={66}
                className='max-w-full h-auto'
              />
            </div>
          </section>
          <section className='flex flex-col py-20 justify-center items-center h-full w-full'>
            <div className='flex flex-col justify-center items-center mb-[78px]'>
              <h1 className='text-[64px] font-bold '>Module List</h1>
              <p className='text-2xl max-w-[774px] text-center'>
                Access a variety of engaging course modules to expand your
                knowledge and skills with shareITS
              </p>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-6'>
              <ModuleCard
                illustrationUrl={Data.illustrationUrl}
                moduleData={Data.moduleData}
                detailUrl={Data.detailUrl}
              />
              <ModuleCard
                illustrationUrl={Data.illustrationUrl}
                moduleData={Data.moduleData}
                detailUrl={Data.detailUrl}
              />
              <ModuleCard
                illustrationUrl={Data.illustrationUrl}
                moduleData={Data.moduleData}
                detailUrl={Data.detailUrl}
              />
              <ModuleCard
                illustrationUrl={Data.illustrationUrl}
                moduleData={Data.moduleData}
                detailUrl={Data.detailUrl}
              />
              <ModuleCard
                illustrationUrl={Data.illustrationUrl}
                moduleData={Data.moduleData}
                detailUrl={Data.detailUrl}
              />
              <ModuleCard
                illustrationUrl={Data.illustrationUrl}
                moduleData={Data.moduleData}
                detailUrl={Data.detailUrl}
              />
            </div>
            <div>
              <Button
                as={Link}
                size='sm'
                color='primary'
                href='www.google.com'
                className='mt-24'
              >
                See More
              </Button>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
