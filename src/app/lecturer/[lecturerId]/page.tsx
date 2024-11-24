'use client';

import React, { useState } from 'react';
import Navbar from '@/layouts/Navbar';
import NextImage from '@/components/NextImage';
import { Button } from '@/components/nextui-extend-variants/Button';
import Input from '@/components/form/Input';
import { IoMdStarOutline, IoMdStar } from 'react-icons/io';
import { FaRegCircleUser } from 'react-icons/fa6';
import { LecturerDetail, LectureComment } from '@/types/lecturer/lecturer';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { CommentRequest } from '@/types/comment/comment';
import { serialize } from 'object-to-formdata';
import { useCommentMutation } from './hooks/mutation';
import { useQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/types/api';
import { usePathname } from 'next/navigation';
import Loading from '@/components/Loading';
import api from '@/lib/api';
import { DANGER_TOAST, showToast } from '@/components/Toast';
import withAuth from '@/components/hoc/withAuth';
import useAuthStore from '@/stores/useAuthStore';

export default withAuth(LecturerDetailPage, 'private');
function LecturerDetailPage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const lecturerId = usePathname().split('/').pop();

  const { data: lecturerData } = useQuery({
    queryKey: ['module', lecturerId],
    queryFn: async () => {
      try {
        const { data } = await api.get<ApiResponse<LecturerDetail>>(
          `/lecturers/${lecturerId}`,
        );

        return data.responseObject;
      } catch (error) {
        showToast('Error fetching module data', DANGER_TOAST);
        throw error;
      }
    },
  });

  const { data: lecturerCommentsData } = useQuery({
    queryKey: ['moduleComments', lecturerId],
    queryFn: async () => {
      try {
        const { data } = await api.get<ApiResponse<LectureComment[]>>(
          `/comments/lecturer/${lecturerId}`,
        );

        return data.responseObject;
      } catch (error) {
        showToast('Error fetching module comments data', DANGER_TOAST);
        throw error;
      }
    },
  });

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  const getStarIcon = (index: number) => {
    return index <= rating ? (
      <IoMdStar className='h-[30px] w-[30px] text-primary-500' />
    ) : (
      <IoMdStarOutline className='h-[30px] w-[30px] text-primary-500' />
    );
  };

  const renderStars = (rating: number) => {
    return (
      <div className='flex'>
        {[...Array(5)].map((_, index) =>
          index < rating ? (
            <IoMdStar
              key={index}
              className='h-[30px] w-[30px] text-primary-50'
            />
          ) : (
            <IoMdStarOutline
              key={index}
              className='h-[30px] w-[30px] text-primary-50'
            />
          ),
        )}
      </div>
    );
  };

  const methods = useForm<CommentRequest>({
    mode: 'onTouched',
  });

  const { handleSubmit } = methods;

  const { handleComment, isPending } = useCommentMutation();

  const generateCommentId = () => {
    return `comment_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  };

  const { user } = useAuthStore();

  const onSubmit: SubmitHandler<CommentRequest> = (data) => {
    const uniqueCommentId = generateCommentId();

    serialize(
      handleComment({
        id: uniqueCommentId,
        feedback: data.feedback,
        rating: rating,
        userId: user?.user.id,
        lecturerId: lecturerId,
        moduleId: 'unasigned',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }),
    );
  };

  return lecturerData ? (
    <main className='w-screen min-h-screen bg-[#f7f7f7]'>
      <Navbar />

      {/* Hero Section */}
      <section className='w-full h-fit flex flex-row px-8 py-16 justify-center items-center'>
        <div className='flex flex-col h-fit w-fit justify-center items-center'>
          <h1 className='text-lg md:text-4xl font-bold text-black '>
            Lecturer Details
          </h1>
          <p className='text-[9px] md:text-base text-start md:text-center max-w-[250px] md:max-w-[450px]'>
            View your lecturer&apos;s profile, create assessment statistics, and
            introspect with each other only on ShareITS.
          </p>
        </div>
        <div className='flex z-0 w-fit h-fit'>
          <NextImage
            src='/lecturer/lecturer-detail/hero.png'
            alt='Hero'
            width={138}
            height={145}
            className='flex z-0 w-[138px] h-[145px] lg:w-auto lg:h-[556px]'
            imgClassName='flex z-0 w-[138px] h-[145px] lg:w-auto lg:h-[556px]'
          />
        </div>
      </section>

      {/* Module Detail Section */}
      <section className='w-full h-fit min-h-[600px] bg-primary-500 rounded-xl mt-10 relative text-primary-50 flex flex-col justify-center items-center py-[30px] px-20 gap-y-8'>
        <NextImage
          src='/module/module-detail/awan1.png'
          alt='Awan1'
          width={181}
          height={111}
          className='absolute top-5 left-5 z-0 max-md:w-[90px] max-md:h-[55px] max-md:left-2 max-md:top-2'
        />
        <NextImage
          src='/module/module-detail/awan1.png'
          alt='Awan1'
          width={181}
          height={111}
          className='absolute top-16 left-20 z-0 max-md:w-[90px] max-md:h-[55px] max-md:left-10 max-md:top-8'
        />
        <NextImage
          src='/module/module-detail/awan2.png'
          alt='Awan2'
          width={186}
          height={127}
          className='absolute top-7 right-0 z-0 max-md:w-[93px] max-md:h-[63px] max-md:top-4'
        />
        <NextImage
          src='/module/module-detail/awan3.png'
          alt='Awan3'
          width={181}
          height={111}
          className='absolute bottom-10 right-12 z-0 max-md:w-[90px] max-md:h-[55px] max-md:right-6 max-md:bottom-5'
        />
        <NextImage
          src='/module/module-detail/logo_blue.png'
          alt='Logo'
          width={300}
          height={154.12}
          className='absolute bottom-0 left-10 z-0 max-md:w-[150px] max-md:h-[77.06px] max-md:left-5'
        />
        <div className='flex flex-col z-10 rounded-[10px] w-full h-[674px] bg-[#E6F7F9] gap-[60px] justify-center items-center'>
          <div className='w-[60%] flex justify-center text-center flex-col gap-y-4 z-10'>
            <h1 className='font-bold text-4xl text-primary-500'>
              {lecturerData.name}
            </h1>
            <h5 className='text-xl text-primary-500'>Lecturer</h5>
          </div>
          <div className='w-[70%] h-fit flex flex-col justify-center text-center z-10'>
            <h5 className='text-xl font-bold text-black'>Faculty</h5>
            <p className='text-xl text-black'>{lecturerData.faculty}</p>
          </div>
          <div className='w-[70%] h-fit flex flex-col justify-center text-center z-10'>
            <h5 className='text-xl font-bold text-black'>Department</h5>
            <p className='text-xl text-black'>{lecturerData.department}</p>
          </div>
        </div>
      </section>

      {/* Download and Feedback Post */}
      <section className='w-full h-fit flex flex-col justify-center items-center gap-20 py-20'>
        {/* Feedback Section */}
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='bg-[#E6F7F9] flex flex-col justify-center items-center w-1/3 max-md:w-[90%] h-fit rounded-lg shadow-[3px_6px_20px_rgba(0,0,0,0.20)] py-14 gap-6 px-20'
          >
            <h2 className='font-semibold text-primary-500 text-3xl text-center'>
              Give Your Feedback
            </h2>

            <Input
              id='feedback'
              type='text'
              placeholder='Type review...'
              variant='textarea'
              value={comment}
              onValueChange={setComment}
            />

            {/* Rating stars */}
            <div className='flex'>
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleStarClick(index + 1)}
                  className='cursor-pointer'
                >
                  {getStarIcon(index + 1)}
                </div>
              ))}
            </div>

            <Button type='submit' isLoading={isPending}>
              Comment
            </Button>
          </form>
        </FormProvider>
      </section>

      {/* Users Feedback Section */}
      <section className='bg-primary-500 w-full h-fit min-h-[430px] flex items-center pl-7 overflow-x-scroll'>
        {lecturerCommentsData?.map((comment) => (
          <div
            key={comment.id}
            className='h-[330px] bg-primary-50 w-[700px] rounded-xl mr-5'
          >
            <div className='w-full h-[30%] rounded-t-xl bg-primary-400 flex items-center px-10 max-md:px-6 justify-between'>
              <div className='gap-5 h-full w-full flex justify-start items-center'>
                <FaRegCircleUser className='h-[50px] w-[50px] text-primary-50' />
                <h5 className='text-xl font-bold text-primary-50 max-md:text-lg'>
                  {comment.userId}
                </h5>
              </div>
              <div className='h-full w-full flex justify-end items-center'>
                {renderStars(comment.rating)}
              </div>
            </div>
            <div className='w-full h-[70%] flex justify-center items-center p-14'>
              <h5 className='text-xl text-gray-500 max-md:text-sm'>
                {comment.feedback}
              </h5>
            </div>
          </div>
        ))}
      </section>
    </main>
  ) : (
    <main className='w-screen min-h-screen bg-[#f7f7f7] flex justify-center items-center'>
      <Loading />
    </main>
  );
}
