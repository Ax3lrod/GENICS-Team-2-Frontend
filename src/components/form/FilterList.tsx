'use client';

import { Input } from '@nextui-org/input';
import { BiSearch } from 'react-icons/bi';
import { Button } from '../nextui-extend-variants/Button';
import { FaPenToSquare } from 'react-icons/fa6';
import { LuListFilter } from 'react-icons/lu';
import { useCallback, useEffect, useState } from 'react';
import debounce from '@/lib/debounce';
import {
  Badge,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { BsBank2 } from 'react-icons/bs';
import { FaCalendar } from 'react-icons/fa';
import { IoIosListBox } from 'react-icons/io';
import clsxm from '@/lib/clsxm';

type FilterData = {
  search: string;
  sort: string;
};
type FilterListProps = {
  onChangeFilter: (filter: FilterData) => void;
  onActionButtonClick: () => void;
  searchPlaceholder?: string;
  actionButtonLabel?: string;
  actionButtonIcon?: JSX.Element;
};
export default function FilterList({
  onChangeFilter,
  onActionButtonClick,
  searchPlaceholder = 'Search lecturer...',
  actionButtonLabel = 'Feedback',
  actionButtonIcon = <FaPenToSquare className='h-4 md:h-6 w-4 md:w-6' />,
}: FilterListProps) {
  const SORT_OPTION = [
    {
      value: 'faculty',
      label: 'Fakultas',
      icon: <BsBank2 />,
    },
    {
      value: 'department',
      label: 'Jurusan',
      icon: <IoIosListBox />,
    },
    {
      value: 'createdAt',
      label: 'Release time',
      icon: <FaCalendar />,
    },
  ];

  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const [filterData, setFilterData] = useState({
    search: '',
    sort: '',
  });

  const setSearchData = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilterData({
        ...filterData,
        search: event.target.value,
      });
    },
    200,
  );

  const handleSearch = useCallback(setSearchData, [
    setSearchData,
    filterData.search,
  ]);

  const onClearSearch = () => {
    setFilterData({ ...filterData, search: '' });
  };

  const setSortValue = (value: string) => {
    setFilterData({
      ...filterData,
      sort: value == filterData.sort ? '' : value,
    });
    setIsOpenFilter(false);
  };

  useEffect(() => {
    onChangeFilter(filterData);
  }, [filterData.search, filterData.sort, filterData, onChangeFilter]);

  return (
    <div className='flex flex-col md:flex-row md:items-center gap-6 w-full max-w-4xl mx-auto'>
      <Input
        isClearable
        variant='flat'
        aria-label={searchPlaceholder}
        placeholder={searchPlaceholder}
        onClear={onClearSearch}
        onInput={handleSearch}
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
      <div className='flex gap-6 items-center max-md:justify-center'>
        <Button
          size='lg'
          className='!h-14 md:!h-16 bg-primary-400'
          onClick={onActionButtonClick}
        >
          <div className='flex items-center gap-2 text-base md:text-xl lg:text-2xl'>
            {actionButtonIcon}
            {actionButtonLabel}
          </div>
        </Button>

        <Popover
          color='primary'
          placement='bottom'
          showArrow={true}
          isOpen={isOpenFilter}
          onOpenChange={(open) => setIsOpenFilter(open)}
        >
          <PopoverTrigger>
            <Button
              size='lg'
              className='!h-14 md:!h-16 bg-primary-400 !min-w-fit'
            >
              <Badge
                content=''
                color='secondary'
                placement='bottom-right'
                isInvisible={!filterData.sort}
              >
                <LuListFilter className='h-4 md:h-6 w-4 md:w-6' />
              </Badge>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className='flex flex-col gap-8 px-4 py-5 min-w-60'>
              {SORT_OPTION.map((option) => (
                <div
                  key={option.value}
                  className={clsxm(
                    'flex gap-3 items-center text-2xl cursor-pointer',
                    filterData.sort === option.value
                      ? 'text-white'
                      : 'text-primary-100 hover:text-primary-200',
                  )}
                  onClick={() => setSortValue(option.value)}
                >
                  {option.icon}
                  <p className='font-bold'>{option.label}</p>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
