'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ModuleDetail } from '@/types/module/module';
import { IoDocumentText } from 'react-icons/io5';
import { Button } from '@/components/nextui-extend-variants/Button';
import clsxm from '@/lib/clsxm';
import * as React from 'react';

export type ModuleCardProps = {
  detailUrl: string;
  moduleData: ModuleDetail;
};

export default function ModuleCard({
  moduleData,
  detailUrl,
  ...attrs
}: ModuleCardProps & React.HTMLAttributes<HTMLDivElement>) {
  const [isLike, setIsLike] = React.useState(false);
  const [isDislike, setIsDislike] = React.useState(false);
  const [upVote, setUpVote] = React.useState(moduleData.upVote);
  const [downVote, setDownVote] = React.useState(moduleData.downVote);

  const handleLike = () => {
    if (isLike == false && isDislike == false) {
      setUpVote(upVote + 1);
      setIsLike(true);
    } else if (isDislike == true) {
      setDownVote(downVote - 1);
      setUpVote(upVote + 1);
      setIsLike(true);
      setIsDislike(false);
    }
  };

  const handleDislike = () => {
    if (isLike == false && isDislike == false) {
      setDownVote(downVote + 1);
      setIsDislike(true);
    } else if (isLike == true) {
      setDownVote(downVote + 1);
      setUpVote(upVote - 1);
      setIsLike(false);
      setIsDislike(true);
    }
  };

  return (
    <div
      {...attrs}
      className={clsxm(
        'bg-primary-50 px-9 py-7 rounded-lg flex flex-col gap-3 min-h-[295px] lg:min-h-[348px] w-full max-w-[309px] lg:max-w-[365px] shadow-card hover:border-2 hover:border-primary transition ease-in-out',
      )}
    >
      <div className='flex justify-between items-center gap-4 w-full'>
        <IoDocumentText className='w-20 h-20' color='#007a89' />
        <h5 className='text-primary font-semibold text-lg text-center capitalize'>
          {moduleData.title}
        </h5>
      </div>

      <p className='line-clamp-4'>{moduleData.description}</p>
      <p className='text-primary'>By: {moduleData.user?.username}</p>

      <div className='flex justify-between gap-12 mt-auto'>
        <div className='flex gap-9'>
          <div className='flex items-center gap-1 text-primary'>
            <Image
              onClick={() => handleLike()}
              className='cursor-pointer hover:scale-110 active:scale-125 transition-transform'
              width={20}
              height={20}
              src='/images/module/like.png'
              alt='like'
            />
            <p>{upVote}</p>
          </div>
          <div className='flex items-center gap-1 text-gray-500'>
            <Image
              onClick={() => handleDislike()}
              className='cursor-pointer hover:scale-110 active:scale-125 transition-transform'
              width={20}
              height={20}
              src='/images/module/dislike.svg'
              alt='dislike'
            />
            <p>{downVote}</p>
          </div>
        </div>

        <Button as={Link} size='sm' color='primary' href={detailUrl}>
          View
        </Button>
      </div>
    </div>
  );
}
