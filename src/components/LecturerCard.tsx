import clsxm from '@/lib/clsxm';
import { LecturerDetail } from '@/types/lecturer/lecturer';
import React from 'react';
import { Button } from './nextui-extend-variants/Button';
import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md';
import { IoPersonCircleOutline } from 'react-icons/io5';

export type LecturerCardProps = {
  lecturerData: LecturerDetail;
  onLike?: () => void;
  onDislike?: () => void;
};

export default function LecturerCard({
  lecturerData,
  ...attrs
}: LecturerCardProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...attrs}
      className={clsxm(
        'bg-primary-50 px-6 py-5 rounded-lg flex flex-col gap-3 min-h-[348px] w-full max-w-[365px] md:max-w-[400px] shadow-card border-2 border-primary',
      )}
    >
      <div className='flex w-full justify-between items-center'>
        <Chip
          size='lg'
          radius='sm'
          classNames={{
            base: 'bg-primary-300',
            content: 'font-semibold',
          }}
        >
          {lecturerData.faculty}
        </Chip>
        <div className='flex items-center'>
          {Array.from({ length: 5 }, (_, i) =>
            i + 1 <= lecturerData.rating ? (
              <MdOutlineStar
                key={`${lecturerData.id}-star-${i}`}
                className='text-primary text-3xl'
              />
            ) : (
              <MdOutlineStarBorder
                key={`${lecturerData.id}-star-${i}`}
                className='text-primary text-3xl'
              />
            ),
          )}
        </div>
      </div>

      <IoPersonCircleOutline className='h-20 w-20 text-primary mx-auto' />

      <h5 className='text-lg font-semibold text-primary text-center mt-3'>
        {lecturerData.name}
      </h5>

      <div className='flex flex-col gap-3 mt-auto'>
        <p className='text-base text-primary text-center'>
          Dosen: {lecturerData.department}
        </p>
        <div className='flex justify-center gap-12'>
          <Button
            as={Link}
            size='sm'
            color='primary'
            href={`/lecturer/${lecturerData.id}`}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
