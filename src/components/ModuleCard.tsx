'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ModuleDetail } from '@/types/module/module';
import { IoDocumentText } from 'react-icons/io5';
import { Button } from '@/components/nextui-extend-variants/Button';
import clsxm from '@/lib/clsxm';
import { useEffect, useState } from 'react';
import useAuthStore from '@/stores/useAuthStore';
import { useModulesMutation } from '@/app/module/hooks/mutation';
import { DANGER_TOAST, showToast } from './Toast';
import { useRouter } from 'next/navigation';
import { Spinner } from '@nextui-org/react';

export type ModuleCardProps = {
  detailUrl: string;
  moduleData: ModuleDetail;
};

export default function ModuleCard({
  moduleData,
  detailUrl,
  ...attrs
}: ModuleCardProps & React.HTMLAttributes<HTMLDivElement>) {
  const [upVote, setUpVote] = useState(moduleData.upVote);
  const [downVote, setDownVote] = useState(moduleData.downVote);

  const router = useRouter();
  const isAuthed = useAuthStore.useIsAuthed();

  const {
    upvoteData,
    handleUpvote,
    isPendingUpvote,
    isErrorUpvote,
    downvoteData,
    handleDownvote,
    isPendingDownvote,
    isErrorDownvote,
  } = useModulesMutation();

  const handleVotes = (type: 'upVote' | 'downVote') => {
    if (!isAuthed) {
      showToast('Please login first', DANGER_TOAST);
      router.push('/auth/login');
      return;
    }

    if (type === 'upVote') {
      handleUpvote(moduleData.id);
    } else {
      handleDownvote(moduleData.id);
    }
  };

  useEffect(() => {
    if (upvoteData) {
      setUpVote(upvoteData?.upVote);
      setDownVote(upvoteData?.downVote);
    }
  }, [upvoteData]);

  useEffect(() => {
    if (downvoteData) {
      setUpVote(downvoteData?.upVote);
      setDownVote(downvoteData?.downVote);
    }
  }, [downvoteData]);

  useEffect(() => {
    if (isErrorUpvote || isErrorDownvote) {
      showToast('Failed to vote module! Try again later', DANGER_TOAST);
    }
  }, [isErrorUpvote, isErrorDownvote]);

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
          <div className='relative flex items-center gap-1 text-primary'>
            <Spinner
              className={clsxm(
                'absolute inset-0',
                isPendingUpvote ? 'visible' : 'invisible',
              )}
              size='sm'
            />
            <Image
              onClick={() => handleVotes('upVote')}
              className={clsxm(
                'hover:scale-110 active:scale-125 transition-transform',
                isPendingUpvote ? 'cursor-not-allowed' : 'cursor-pointer',
              )}
              width={20}
              height={20}
              src='/images/module/like.png'
              alt='like'
            />
            <p>{upVote}</p>
          </div>
          <div className='relative flex items-center gap-1 text-gray-500'>
            <Spinner
              className={clsxm(
                'absolute inset-0',
                isPendingDownvote ? 'visible' : 'invisible',
              )}
              size='sm'
            />
            <Image
              onClick={() => handleVotes('downVote')}
              className={clsxm(
                'hover:scale-110 active:scale-125 transition-transform',
                isPendingDownvote ? 'cursor-not-allowed' : 'cursor-pointer',
              )}
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
