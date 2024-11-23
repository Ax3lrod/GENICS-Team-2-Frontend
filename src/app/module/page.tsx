'use client';

import ModuleCard from '@/components/ModuleCard';
import { Button } from '@/components/nextui-extend-variants/Button';
import Layout from '@/layouts/Layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import withAuth from '@/components/hoc/withAuth';
import { useModulesQuery } from './hooks/query';
import { useRouter } from 'next/navigation';
import FilterList from '@/components/form/FilterList';

export default withAuth(ModuleList, 'public');
function ModuleList() {
  const [filterData, setFilterData] = useState({
    search: '',
    sort: '',
  });

  const router = useRouter();

  const {
    data: totalData,
    filteredData: moduleList,
    isPending: isLoadingList,
    isRefetching: isRefetchingList,
    refetch: fetchModuleList,
    onLoadMore,
  } = useModulesQuery(filterData);

  useEffect(() => {
    fetchModuleList();
  }, [filterData.search, filterData.sort, fetchModuleList]);

  useEffect(() => {
    if (totalData && totalData.length > 6) {
      onLoadMore();
    }
  }, [totalData, onLoadMore]);
  return (
    <Layout>
      <div className='min-h-svh overflow-x-hidden px-6 py-10 md:py-16 lg:py-24 flex flex-col gap-12 md:gap-20'>
        <div className='relative z-10'>
          <FilterList
            searchPlaceholder='Search module...'
            actionButtonLabel='Upload'
            actionButtonIcon={<FiUpload className='h-4 md:h-6 w-4 md:w-6' />}
            onChangeFilter={setFilterData}
            onActionButtonClick={() => router.push('/module/upload')}
          />
        </div>

        <div className='relative'>
          <Image
            src='/images/module/cloud.svg'
            alt='cloud'
            width={100}
            height={100}
            className='object-fit w-[12%] min-w-20 md:min-w-32 max-w-48 absolute -top-full md:top-auto md:bottom-0 left-0 transform -translate-x-1/3'
          />
          <Image
            src='/images/module/cloud.svg'
            alt='cloud'
            width={100}
            height={100}
            className='object-fit w-[12%] min-w-20 md:min-w-32 max-w-48 absolute bottom-full md:bottom-1/2 right-0 transform translate-x-1/3'
          />
          <div className='relative z-10 flex flex-col items-center gap-4 md:w-11/12 max-w-5xl mx-auto'>
            <h3 className='text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800'>
              Module List
            </h3>
            <p className='text-base md:text-xl lg:text-2xl text-center font-medium text-gray-800 tracking-widest'>
              Your learning adventure starts here! <br />
              Explore all of these learning modules.
            </p>
          </div>
        </div>

        {isLoadingList || isRefetchingList ? (
          <p className='text-2xl text-center text-primary-200 font-bold py-20'>
            Loading...
          </p>
        ) : moduleList?.length ? (
          <div className='w-full flex flex-col items-center gap-10 md:gap-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-6 mx-auto justify-center'>
              {moduleList.map((module) => (
                <ModuleCard
                  className='!w-full'
                  key={module.id}
                  detailUrl={`/module/${module.id}`}
                  moduleData={module}
                />
              ))}
            </div>
            {totalData && moduleList.length < totalData?.length && (
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
            No module found
          </p>
        )}
      </div>
    </Layout>
  );
}
