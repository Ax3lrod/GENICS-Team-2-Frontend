import * as React from 'react';
import { Checkbox } from '@nextui-org/react';
import { Button } from '@/components/nextui-extend-variants/Button';
import Link from 'next/link';
import Input from '@/components/form/Input';
import Image from 'next/image';

export default function Login() {
  return (
    <div className='w-screen h-screen flex bg-white'>
      <section className='lg:w-[60%] w-[100%] h-full flex justify-center items-center min-w-[350px]'>
        <section className='w-[50%] h-fit flex flex-col gap-4 min-w-[300px]'>
          <div className='flex flex-col w-full items-center'>
            <p className='lg:text-4xl text-2xl font-semibold text-[#343232] mb-4'>
              Log In
            </p>
          </div>
          <div className='flex flex-col w-full gap-2 mb-4'>
            <Input
              id='Username/Email'
              label='Username/Email'
              labelPlacement='outside'
              placeholder='Input your Username or Email'
              variant='bordered'
            />
          </div>
          <div className='flex flex-col w-full gap-2'>
            <Input
              id='Password'
              label='Password'
              labelPlacement='outside'
              placeholder='Input your password'
              variant='bordered'
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
          <Button>
            <span className='text-xs lg:text-base'>Log In</span>
          </Button>
          <div className='w-full flex items-center justify-center'>
            <hr className='w-[40%] bg-black border-black'></hr>
            <p className='w-[20%] text-center px-0 m-0 text-xs lg:text-base'>
              Or With
            </p>
            <hr className='w-[40%] bg-black border-black'></hr>
          </div>
          <Button className='bg-white border-primary-500 border-2 text-primary-500 text-xs lg:text-base'>
            <Image
              src='/images/googlelogo.png'
              alt='Google'
              width={20}
              height={20}
              className='mr-2'
            />
            Log in With Google
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
          src='/images/loginvector1.png'
          alt='Login Background Right'
          width={747.5}
          height={1023.5}
          className=''
        />
        <Image
          src='/images/loginvector2.png'
          alt='Login Person'
          width={358.316}
          height={295.5}
          className='absolute bottom-28 right-20'
        />
        <Image
          src='/images/loginawan1.png'
          alt='Awan Gede'
          width={257.477}
          height={194.567}
          className='absolute top-20'
        />
        <Image
          src='/images/logoshareitslogin.png'
          alt='Awan Kecil'
          width={119.203}
          height={68.675}
          className='absolute right-10 top-5'
        />
        <Image
          src='/images/loginawan2.png'
          alt='Awan Kecil'
          width={91.223}
          height={50.568}
          className='absolute right-5 top-52'
        />
        <Image
          src='/images/loginawan3.png'
          alt='Awan Kecil'
          width={91.223}
          height={50.568}
          className='absolute left-0 bottom-10'
        />
      </section>
    </div>
  );
}
