'use client';

import LecturerCard from '@/components/LecturerCard';
import Layout from '@/layouts/Layout';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { useLecturersQuery } from './hooks/query';
import FilterList from '@/components/form/FilterList';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/nextui-extend-variants/Button';

export default function LecturerList() {
  const [filterData, setFilterData] = useState({
    search: '',
    sort: '',
  });

  const router = useRouter();

  const areUseFilter = useMemo(
    () => !!(filterData.search || filterData.sort),
    [filterData],
  );

  const {
    data: totalData,
    filteredData: lecturerList,
    isPending: isLoadingList,
    isRefetching: isRefetchingList,
    refetch: fetchLecturerList,
    onLoadMore,
  } = useLecturersQuery(filterData);

  useEffect(() => {
    fetchLecturerList();
  }, [filterData.search, filterData.sort, fetchLecturerList]);

  return (
    <Layout>
      <div className='min-h-svh overflow-x-hidden px-6 py-10 flex flex-col gap-20'>
        {areUseFilter ? (
          <div className='relative'>
            <Image
              src='/images/lecturer/cloud.svg'
              alt='cloud'
              width={100}
              height={100}
              className='hidden md:block object-fit w-[12%] min-w-32 max-w-48 absolute bottom-0 left-0 transform -translate-x-1/3'
            />
            <Image
              src='/images/lecturer/cloud.svg'
              alt='cloud'
              width={100}
              height={100}
              className='hidden md:block object-fit w-[12%] min-w-32 max-w-48 absolute bottom-1/2 right-0 transform translate-x-1/3'
            />
            <div className='relative z-10 flex flex-col items-center gap-4 md:w-11/12 max-w-5xl mx-auto'>
              <h3 className='text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800'>
                Lecture List
              </h3>
              <p className='text-base md:text-xl lg:text-2xl text-center font-medium text-gray-800 tracking-widest'>
                Get to know your lecturers and their teaching methods only at
                ShareITS
              </p>
            </div>
          </div>
        ) : (
          <div className='flex items-center max-w-7xl mx-auto md:gap-10'>
            <div className='flex flex-col items-center gap-4 md:w-3/5'>
              <h3 className='text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800'>
                Lecture List
              </h3>
              <p className='text-base md:text-xl lg:text-2xl text-center font-medium text-gray-800 tracking-widest'>
                Get to know your lecturers and their teaching methods only at
                ShareITS
              </p>
            </div>
            <Image
              src='/images/lecturer/hero-illustration.svg'
              alt='hero-illustration'
              width={500}
              height={500}
              className='w-2/5 hidden md:block'
            />
          </div>
        )}

        <FilterList
          onChangeFilter={setFilterData}
          onActionButtonClick={() => router.push('/lecturer/feedback')}
        />
        {isLoadingList || isRefetchingList ? (
          <p className='text-2xl text-center text-primary-200 font-bold py-20'>
            Loading...
          </p>
        ) : lecturerList?.length ? (
          <div className='w-full flex flex-col items-center gap-10 md:gap-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-6 mx-auto justify-center'>
              {lecturerList.map((lecturer) => (
                <LecturerCard
                  className='!w-full'
                  key={lecturer.id}
                  lecturerData={lecturer}
                />
              ))}
            </div>
            {totalData && lecturerList.length < totalData?.length && (
              <Button
                size='sm'
                color='primary'
                className='max-md:w-full'
                onClick={onLoadMore}
              >
                See More
              </Button>
            )}
          </div>
        ) : (
          <p className='text-2xl text-center text-primary-200 font-bold py-20'>
            No lecturers found
          </p>
        )}
      </div>
    </Layout>
  );
}
