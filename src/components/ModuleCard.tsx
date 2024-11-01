'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ModuleDetail } from '@/types/module/module';
import { Button } from '@/components/nextui-extend-variants/Button';
import clsxm from '@/lib/clsxm';

export type ModuleCardProps = {
  detailUrl: string;
  illustrationUrl: string;
  moduleData: ModuleDetail;
  isActive?: boolean;
  onLike?: () => void;
  onDislike?: () => void;
};

export default function ModuleCard({
  moduleData,
  illustrationUrl,
  detailUrl,
  isActive = false,
  onLike,
  onDislike,
  ...attrs
}: ModuleCardProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...attrs}
      className={clsxm(
        'bg-primary-50 px-9 py-7 rounded-lg flex flex-col gap-3 min-h-[348px] w-full max-w-[365px] shadow-card',
        isActive && 'border-2 border-primary',
      )}
    >
      <div className='flex justify-between gap-4 w-full'>
        <Image
          src={illustrationUrl}
          alt={moduleData.title}
          width={100}
          height={100}
          className='h-24 w-auto object-contain'
        />
        <h5 className='text-primary font-semibold text-lg text-center capitalize'>
          {moduleData.title}
        </h5>
      </div>

      <p className='line-clamp-4'>{moduleData.description}</p>
      <p className='text-primary'>By: {moduleData.user.username}</p>

      <div className='flex justify-between gap-12 mt-auto'>
        <div className='flex gap-9'>
          <div className='flex items-center gap-1 text-primary'>
            <Image
              onClick={onLike}
              className='cursor-pointer hover:scale-110 active:scale-125 transition-transform'
              width={20}
              height={20}
              src='/images/module/like.png'
              alt='like'
            />
            <p>{moduleData.upvotes}</p>
          </div>
          <div className='flex items-center gap-1 text-gray-500'>
            <Image
              onClick={onDislike}
              className='cursor-pointer hover:scale-110 active:scale-125 transition-transform'
              width={20}
              height={20}
              src='/images/module/dislike.svg'
              alt='dislike'
            />
            <p>{moduleData.downvotes}</p>
          </div>
        </div>

        <Button as={Link} size='sm' color='primary' href={detailUrl}>
          View
        </Button>
      </div>
    </div>
  );
}
