import NextImage from '@/components/NextImage';
import { Button } from '@/components/nextui-extend-variants/Button';
import Link from 'next/link';

export default function Auth() {
  return (
    <>
      <main className='flex flex-col items-center justify-center w-full h-full pt-[145px] pb-[98px] gap-[70px]'>
        <section>
          <h1 className='font-bold text-[40px] md:text-8xl text-center'>
            Welcome
          </h1>
          <p className='text-lg md:text-2xl text-center'>
            Always stay updated in your student portal
          </p>
        </section>
        <section className='h-fit w-fit'>
          <NextImage
            src='/auth/person.png'
            alt='Asset auth'
            width={478}
            height={394}
            className='w-[240px] h-[198px] md:w-[478px] md:h-[394px]'
          />
        </section>
        <section className='flex flex-col justify-center items-center gap-[30px]'>
          <Button
            as={Link}
            size='sm'
            color='primary'
            href='/auth/register'
            className='w-[216px] md:w-[567px]'
          >
            Sign Up
          </Button>
          <p className='text-xs md:text-2xl'>
            Already have an account?{' '}
            <Link href='/auth/login'>
              <span className='text-primary-500 font-semibold'>Log in</span>
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
