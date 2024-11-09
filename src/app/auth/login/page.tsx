'use client';

import * as React from 'react';
import { Checkbox } from '@nextui-org/react';
import { Button } from '@/components/nextui-extend-variants/Button';
import Link from 'next/link';
import Input from '@/components/form/Input';
import Image from 'next/image';
import { LoginRequest } from '@/types/auth/login';
import { serialize } from 'object-to-formdata';
import { useLoginMutation } from './hooks/mutation';
import LogoGoogle from '@/contents/LogoGoogle';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { REG_EMAIL, REG_PASSWORD } from '@/contents/regex';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(false);
  const [usernameValue, setValueUsername] = React.useState('');
  const [passwordValue, setValuePassword] = React.useState('');

  const toggleVisibility = () => setIsVisible(!isVisible);

  const methods = useForm<LoginRequest>({
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = methods;

  const { handleLogin, isPending } = useLoginMutation();

  const onSubmit: SubmitHandler<LoginRequest> = (data) => {
    serialize(
      handleLogin({
        username: data.username,
        password: data.password,
      }),
    );
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-screen h-screen flex bg-white'
      >
        <section className='lg:w-[60%] w-[100%] h-full flex justify-center items-center min-w-[350px]'>
          <button type='button' onClick={() => router.push('/')}>
            <Image
              src='/images/login/loginbackbutton.png'
              alt='Back Button'
              width={49}
              height={49}
              className='absolute top-10 left-10 hidden lg:block'
            />
            <Image
              src='/images/login/logo_mobile.png'
              alt='Logo ShareITS'
              width={75.72}
              height={43.37}
              className='absolute top-10 left-10 lg:hidden'
            />
          </button>
          <section className='w-[50%] h-fit flex flex-col gap-4 min-w-[300px]'>
            <div className='flex flex-col w-full items-center'>
              <p className='lg:text-4xl text-2xl font-semibold text-[#343232] mb-4'>
                Log In
              </p>
            </div>
            <div className='flex flex-col w-full gap-2 mb-4'>
              <Input
                id='username'
                label='Username/Email'
                labelPlacement='outside'
                placeholder='Input your Username or Email'
                variant='bordered'
                value={usernameValue}
                onValueChange={setValueUsername}
                isRequired
                validation={{
                  required: true,
                  pattern: {
                    value: REG_EMAIL,
                    message: '',
                  },
                }}
                errorMessage='Please enter a valid email/username'
                {...register('username')}
              />
            </div>
            <div className='flex flex-col w-full gap-2'>
              <Input
                id='password'
                label='Password'
                labelPlacement='outside'
                placeholder='Input your password'
                validation={{
                  required: true,
                  pattern: {
                    value: REG_PASSWORD,
                    message: '',
                  },
                }}
                variant='bordered'
                value={passwordValue}
                onValueChange={setValuePassword}
                errorMessage='Please enter your password'
                isRequired
                endContent={
                  <button
                    className='focus:outline-none'
                    type='button'
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FaRegEye className='pointer-events-none text-2xl text-default-400' />
                    ) : (
                      <FaRegEyeSlash className='pointer-events-none text-2xl text-default-400' />
                    )}
                  </button>
                }
                type={isVisible ? 'text' : 'password'}
                {...register('password')}
              />
            </div>
            <div className='flex w-full justify-between'>
              <div className='flex items-center'>
                <Checkbox>
                  <span className='text-xs lg:text-base'>Remember Me</span>
                </Checkbox>
              </div>
              <div className='flex items-center'>
                <a className='text-primary-500 font-semibold text-xs lg:text-base'>
                  Forgot Password?
                </a>
              </div>
            </div>
            <Button type='submit' isLoading={isPending} isDisabled={!isValid}>
              <span className='text-xs lg:text-base'>Log In</span>
            </Button>
            <div className='w-full flex items-center justify-center'>
              <hr className='w-[40%] bg-black border-black'></hr>
              <p className='w-[20%] text-center px-0 m-0 text-xs lg:text-base'>
                Or With
              </p>
              <hr className='w-[40%] bg-black border-black'></hr>
            </div>
            <Button
              size='md'
              color='primary'
              variant='bordered'
              type='submit'
              className='w-full h-[44px]'
              startContent={<LogoGoogle />}
            >
              <span className='text-xs lg:text-base'>Login With Google</span>
            </Button>
            <div className='w-full flex items-center justify-center'>
              <p className='text-xs lg:text-base'>
                Don&apos;t have an account?{' '}
                <Link href='/auth/register'>
                  <span className='text-primary-500 font-semibold'>
                    Create an account
                  </span>
                </Link>
              </p>
            </div>
          </section>
        </section>
        <section className='w-[40%] h-full relative hidden lg:flex'>
          <Image
            src='/images/login/loginvector1.png'
            alt='Login Background Right'
            width={747.5}
            height={1023.5}
            className=''
          />
          <Image
            src='/images/login/loginvector2.png'
            alt='Login Person'
            width={358.316}
            height={295.5}
            className='absolute bottom-28 right-20'
          />
          <Image
            src='/images/login/loginawan1.png'
            alt='Awan Gede'
            width={257.477}
            height={194.567}
            className='absolute top-20'
          />
          <Image
            src='/images/login/logoshareitslogin.png'
            alt='Awan Kecil'
            width={119.203}
            height={68.675}
            className='absolute right-10 top-5'
          />
          <Image
            src='/images/login/loginawan2.png'
            alt='Awan Kecil'
            width={91.223}
            height={50.568}
            className='absolute right-5 top-52'
          />
          <Image
            src='/images/login/loginawan3.png'
            alt='Awan Kecil'
            width={91.223}
            height={50.568}
            className='absolute left-0 bottom-10'
          />
        </section>
      </form>
    </FormProvider>
  );
}
