'use client';
import Layout from '@/layouts/Layout';
import NextImage from '@/components/NextImage';
import { SelectItem, Select, Input } from '@nextui-org/react';
import * as React from 'react';
import { Button } from '@/components/nextui-extend-variants/Button';
import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';
import { useLandingPageQuery } from './hooks/mutation';
import ModuleCard from '@/components/ModuleCard';
import withAuth from '@/components/hoc/withAuth';

export default withAuth(Home, 'public');

function Home() {
  const ModuleDetail = {
    id: '1',
    title: 'Introduction to Web Development',
    description:
      'Start your journey in web development by exploring the basics of HTML, CSS, and JavaScript. ',
    faculty: 'FTEIC',
    major: 'Sistem Informasi',
    course: 'Web Development',
    filePath: 'www.google.com',
    upVote: 10,
    downVote: 12,
    createdAt: '11-12-2024',
    updatedAt: '11-12-2024',
    user: {
      username: 'John Doe',
    },
  };

  const Data = {
    detailUrl: 'www.google.com',
    moduleData: ModuleDetail,
    isActive: true,
  };

  const { queryData, isPending, isError } = useLandingPageQuery();

  return (
    <>
      <Layout>
        <main className='flex flex-col items-center sm:items-start justify-center'>
          <section className='flex flex-row w-full h-full py-28 px-[32px] lg:px-[80px] gap-[47px] justify-center items-center'>
            {/*Left Side*/}
            <div className='flex flex-col w-full h-full justify-center items-center'>
              <h1 className='text-[28px] lg:text-16 font-bold text-center lg:text-start'>
                Welcome to Our Integrated Learning Platform
              </h1>
              <p className='text-lg lg:text-2xl font-normal text-center lg:text-start'>
                Receive constructive anonymous feedback from professors and
                peers to improve your learning quality
              </p>
              <div className='flex flex-col lg:flex-row gap-[30px] mt-[60px] w-full h-fit justify-start'>
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
            <div className='hidden lg:flex flex-col w-fit h-fit justify-center items-center'>
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
          <section className='relative flex flex-col w-full h-full py-72 px-8 lg:px-52 rounded-[30px] justify-center items-center bg-primary-500'>
            {/*Content*/}
            <div className='flex flex-col gap-11 justify-center items-center'>
              <h1 className='font-semibold text-center text-[28px] lg:text-[55px] text-white'>
                Search modules or Lecturer
              </h1>
              <div className='flex flex-row justify-center items-center'>
                <Input
                  id='search'
                  placeholder='Search modules or lecturer....'
                  classNames={{
                    inputWrapper:
                      'w-full md:w-[500px] h-[52px] lg:h-16 rounded-none rounded-l-[10px] bg-white dark:bg-white',
                    input: [
                      'text-black/90 dark:text-black/90',
                      'placeholder:text-default-700/50',
                    ],
                    label: 'text-xl text-black pr-[21px]',
                  }}
                  startContent={
                    <IoSearch color='#A5A5A5' className='w-8 h-8' />
                  }
                />
                <Select
                  id='select_filter'
                  placeholder='Choose type'
                  classNames={{
                    trigger:
                      'w-20 md:w-[182px] h-[52px] lg:h-16 rounded-none rounded-r-[10px] lg:rounded-r-[0px] bg-white dark:bg-white',
                    base: [
                      'text-black/90 dark:text-black/90',
                      'placeholder:text-default-700/50',
                      'w-20 md:w-[182px] h-[52px] lg:h-16 rounded-none rounded-r-[10px] lg:rounded-r-[0px] bg-white dark:bg-white',
                    ],
                    label: 'text-xl text-black pr-[21px]',
                  }}
                >
                  <SelectItem key='Modules' value='Modules'>
                    Modules
                  </SelectItem>
                  <SelectItem key='Lecturer' value='Lecturer'>
                    Lecturer
                  </SelectItem>
                </Select>
                <div className='hidden lg:flex w-[146px] h-16 rounded-[10px]'>
                  <Button
                    variant={undefined}
                    className='hidden w-[146px] lg:flex h-16 rounded-[10px] bg-primary-200 text-white'
                  >
                    Search
                  </Button>
                </div>
              </div>
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
              <h1 className='text-[28px] lg:text-16 font-bold '>Module List</h1>
              <p className='text-lg lg:text-2xl max-w-[774px] text-center px-4 md:px-20'>
                Access a variety of engaging course modules to expand your
                knowledge and skills with shareITS
              </p>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-6'>
              {isPending && 'loading...'}
              {!isError &&
                queryData?.responseObject.map((data) => (
                  <ModuleCard
                    key={data.id}
                    moduleData={data}
                    detailUrl={'/module/' + data.id}
                  />
                ))}
              {isError && (
                <div className='flex flex-wrap justify-center items-center gap-6'>
                  <ModuleCard
                    moduleData={Data.moduleData}
                    detailUrl={Data.detailUrl}
                  />
                  <ModuleCard
                    moduleData={Data.moduleData}
                    detailUrl={Data.detailUrl}
                  />
                  <ModuleCard
                    moduleData={Data.moduleData}
                    detailUrl={Data.detailUrl}
                  />
                  <ModuleCard
                    moduleData={Data.moduleData}
                    detailUrl={Data.detailUrl}
                  />
                  <ModuleCard
                    moduleData={Data.moduleData}
                    detailUrl={Data.detailUrl}
                  />
                  <ModuleCard
                    moduleData={Data.moduleData}
                    detailUrl={Data.detailUrl}
                  />
                </div>
              )}
            </div>
            <div className='w-full h-fit lg:w-fit px-8'>
              <Button
                as={Link}
                size='sm'
                color='primary'
                href='www.google.com'
                className='mt-24'
                fullWidth
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
